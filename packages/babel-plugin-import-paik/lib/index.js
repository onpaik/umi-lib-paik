"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var config = require('./config');

var libName = 'paik-utils';

function paikError(msg) {
  throw new Error("babel-plugin-import-paik: ".concat(msg));
}

function transform(name) {
  var useLib = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mod = name;
  if (config[name]) mod = "".concat(config[name], "/").concat(mod);
  var lib = "".concat(useLib ? '/lib' : '');
  return "".concat(libName).concat(lib, "/").concat(mod);
}

module.exports = function (_ref) {
  var t = _ref.types;
  return {
    name: 'babel-plugin-import-paik',
    visitor: {
      ImportDeclaration: function ImportDeclaration(path, state) {
        var options = (0, _objectSpread2.default)({
          preventFullImport: false
        }, state.opts);

        if (!t.isStringLiteral(path.node.source, {
          value: 'paik-utils'
        })) {
          return;
        }

        var transforms = [];
        var fullImports = path.node.specifiers.filter(function (specifier) {
          return specifier.type !== 'ImportSpecifier';
        });
        var memberImports = path.node.specifiers.filter(function (specifier) {
          return specifier.type === 'ImportSpecifier';
        });

        if (fullImports.length > 0) {
          if (options.preventFullImport) {
            paikError("import of entire module ".concat(libName, " not allowed due to preventFullImport setting in .babelrc"));
          }

          if (memberImports.length > 0) {
            transforms.push(t.importDeclaration(fullImports, t.stringLiteral(libName)));
          }
        }

        memberImports.forEach(function (memberImport) {
          var importName = memberImport.imported.name;
          var replace = transform(importName, options.useLib);
          transforms.push(t.importDeclaration([t.importDefaultSpecifier(t.identifier(memberImport.local.name))], t.stringLiteral(replace)));
        });

        if (transforms.length > 0) {
          path.replaceWithMultiple(transforms);
        }
      }
    }
  };
};