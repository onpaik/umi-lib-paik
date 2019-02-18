const config = require('./config');

const libName = 'paik-utils';

function paikError(msg) {
  throw new Error(`babel-plugin-import-paik: ${msg}`);
}
function transform(name, useLib = false) {
  let mod = name;
  if (config[name]) mod = `${config[name]}/${mod}`;
  const lib = `${useLib ? '/lib' : ''}`;
  return `${libName}${lib}/${mod}`;
}
module.exports = ({ types: t }) => {
  return {
    name: 'babel-plugin-import-paik',
    visitor: {
      ImportDeclaration: (path, state) => {
        const options = {
          preventFullImport: false,
          ...state.opts,
        };
        if (!t.isStringLiteral(path.node.source, { value: 'paik-utils' })) {
          return;
        }
        const transforms = [];

        const fullImports = path.node.specifiers.filter(specifier => {
          return specifier.type !== 'ImportSpecifier';
        });
        const memberImports = path.node.specifiers.filter(specifier => {
          return specifier.type === 'ImportSpecifier';
        });

        if (fullImports.length > 0) {
          if (options.preventFullImport) {
            paikError(
              `import of entire module ${libName} not allowed due to preventFullImport setting in .babelrc`,
            );
          }

          if (memberImports.length > 0) {
            transforms.push(
              t.importDeclaration(fullImports, t.stringLiteral(libName)),
            );
          }
        }
        memberImports.forEach(memberImport => {
          const importName = memberImport.imported.name;
          const replace = transform(importName, options.useLib);
          transforms.push(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier(memberImport.local.name))],
              t.stringLiteral(replace),
            ),
          );
        });

        if (transforms.length > 0) {
          path.replaceWithMultiple(transforms);
        }
      },
    },
  };
};
