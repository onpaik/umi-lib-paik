define(["exports", "path"], function (_exports, _path) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function importPlugin(key) {
    return [require.resolve('babel-plugin-import'), {
      libraryName: key,
      libraryDirectory: 'es',
      style: true
    }, key];
  }

  function _default(api) {
    var cwd = api.cwd,
        compatDirname = api.compatDirname;
    api.modifyAFWebpackOpts(function (opts) {
      opts.babel.plugins = _toConsumableArray(opts.babel.plugins || []).concat([importPlugin('antd'), importPlugin('antd-mobile'), [require.resolve('babel-plugin-import'), {
        libraryName: 'ant-design-pro',
        libraryDirectory: 'lib',
        style: true,
        camel2DashComponentName: false
      }, 'ant-design-pro']]);
      return opts;
    });
    api.chainWebpackConfig(function (webpackConfig) {
      webpackConfig.resolve.alias.set('antd', compatDirname('antd/package.json', cwd, (0, _path.dirname)(require.resolve('antd/package.json')))).set('antd-mobile', compatDirname('antd-mobile/package.json', cwd, (0, _path.dirname)(require.resolve('antd-mobile/package.json'))));
    });
  }
});