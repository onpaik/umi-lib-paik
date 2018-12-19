"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _path = require("path");

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
    opts.babel.plugins = [].concat((0, _toConsumableArray2.default)(opts.babel.plugins || []), [importPlugin('antd'), importPlugin('antd-mobile'), [require.resolve('babel-plugin-import'), {
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