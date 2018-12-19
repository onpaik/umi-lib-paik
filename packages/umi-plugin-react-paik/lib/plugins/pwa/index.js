"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _path = require("path");

var _assert = _interopRequireDefault(require("assert"));

var _chalk = _interopRequireDefault(require("chalk"));

var _workboxWebpackPlugin = _interopRequireDefault(require("workbox-webpack-plugin"));

var _WebManifestPlugin = _interopRequireDefault(require("./WebManifestPlugin"));

var _generateWebManifest2 = _interopRequireDefault(require("./generateWebManifest"));

function _default(api, options) {
  var pkg = api.pkg,
      relativeToTmp = api.relativeToTmp,
      publicPath = api.config.publicPath,
      absSrcPath = api.paths.absSrcPath;
  (0, _assert.default)(pkg && pkg.name, "You must have ".concat(_chalk.default.underline.cyan('package.json'), " and configure ").concat(_chalk.default.underline.cyan('name'), " in it when enable pwa.")); // generate webmanifest before workbox generation, so that webmanifest can be added to precached list

  var _generateWebManifest = (0, _generateWebManifest2.default)(api, (0, _objectSpread2.default)({}, options.manifestOptions)),
      srcPath = _generateWebManifest.srcPath,
      outputPath = _generateWebManifest.outputPath;

  api.chainWebpackConfig(function (webpackConfig) {
    webpackConfig.plugin('webmanifest').use(_WebManifestPlugin.default, [{
      publicPath: publicPath,
      srcPath: srcPath,
      outputPath: outputPath,
      pkgName: pkg.name
    }]);
  });

  if (process.env.NODE_ENV === 'production') {
    var mode = options.workboxPluginMode || 'GenerateSW';
    var defaultGenerateSWOptions = mode === 'GenerateSW' ? {
      cacheId: pkg.name,
      skipWaiting: true,
      clientsClaim: true
    } : {
      swSrc: (0, _path.join)(absSrcPath, 'service-worker.js')
    };
    var workboxConfig = (0, _objectSpread2.default)({
      // remove manifest.json from exclude list. https://github.com/GoogleChrome/workbox/issues/1665
      exclude: [/\.map$/, /favicon\.ico$/, /^manifest.*\.js?$/]
    }, defaultGenerateSWOptions, options.workboxOptions || {});
    var swDest = workboxConfig.swDest || workboxConfig.swSrc && (0, _path.basename)(workboxConfig.swSrc) || 'service-worker.js';
    api.chainWebpackConfig(function (webpackConfig) {
      webpackConfig.plugin('workbox').use(_workboxWebpackPlugin.default[mode], [workboxConfig]);
      webpackConfig.resolve.alias.set('register-service-worker', require.resolve('register-service-worker'));
    });
    api.addEntryCode("\nvar registerSW = require('".concat(relativeToTmp((0, _path.join)(__dirname, './registerServiceWorker.js')), "').default;\nregisterSW('").concat(swDest, "');\n    ").trim());
  }
}