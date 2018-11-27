define(["exports", "path"], function (_exports, _path) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(api, options) {
    var cwd = api.cwd,
        compatDirname = api.compatDirname;
    api.chainWebpackConfig(function (webpackConfig) {
      if (options === 'preact') {
        webpackConfig.resolve.alias.set('preact/devtools', require.resolve('preact/devtools')).set('preact', require.resolve('preact')).set('react', compatDirname('preact-compat/package.json', cwd, (0, _path.dirname)(require.resolve('preact-compat/package.json')))).set('react-dom', compatDirname('preact-compat/package.json', cwd, (0, _path.dirname)(require.resolve('preact-compat/package.json')))).set('create-react-class', (0, _path.join)(compatDirname('preact-compat/lib/create-react-class', cwd, (0, _path.dirname)(require.resolve('preact-compat/lib/create-react-class'))), 'create-react-class'));
      }
    });
    api.addEntryImport(function () {
      if (process.env.NODE_ENV === 'development' && options === 'preact') {
        return {
          source: 'preact/devtools'
        };
      } else {
        return [];
      }
    });
  }
});