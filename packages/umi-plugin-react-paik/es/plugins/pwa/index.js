define(["exports", "@babel/runtime/helpers/objectSpread", "path", "assert", "chalk", "workbox-webpack-plugin", "./WebManifestPlugin", "./generateWebManifest"], function (_exports, _objectSpread2, _path, _assert, _chalk, _workboxWebpackPlugin, _WebManifestPlugin, _generateWebManifest2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _assert = _interopRequireDefault(_assert);
  _chalk = _interopRequireDefault(_chalk);
  _workboxWebpackPlugin = _interopRequireDefault(_workboxWebpackPlugin);
  _WebManifestPlugin = _interopRequireDefault(_WebManifestPlugin);
  _generateWebManifest2 = _interopRequireDefault(_generateWebManifest2);

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
});