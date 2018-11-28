(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fs", "path", "url"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fs"), require("path"), require("url"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fs, global.path, global.url);
    global.generateWebManifest = mod.exports;
  }
})(this, function (_exports, _fs, _path, _url) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prependPublicPath = prependPublicPath;
  _exports.default = generateWebManifest;
  _exports.DEFAULT_MANIFEST_FILENAME = _exports.PWACOMPAT_PATH = void 0;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var PWACOMPAT_PATH = 'pwacompat.min.js';
  _exports.PWACOMPAT_PATH = PWACOMPAT_PATH;
  var DEFAULT_MANIFEST_FILENAME = 'manifest.json';
  _exports.DEFAULT_MANIFEST_FILENAME = DEFAULT_MANIFEST_FILENAME;

  function prependPublicPath() {
    var publicPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var src = arguments.length > 1 ? arguments[1] : undefined;
    return (0, _url.resolve)(publicPath, src);
  }

  function generateWebManifest(api, options) {
    var publicPath = api.config.publicPath,
        log = api.log,
        absSrcPath = api.paths.absSrcPath,
        addHTMLLink = api.addHTMLLink,
        addHTMLHeadScript = api.addHTMLHeadScript,
        addPageWatcher = api.addPageWatcher,
        onGenerateFiles = api.onGenerateFiles;
    var defaultWebManifestOptions = {
      srcPath: (0, _path.join)(absSrcPath, DEFAULT_MANIFEST_FILENAME)
    };

    var _defaultWebManifestOp = _objectSpread({}, defaultWebManifestOptions, options),
        srcPath = _defaultWebManifestOp.srcPath;

    var manifestFilename = (0, _path.basename)(srcPath);

    if ((0, _fs.existsSync)(srcPath)) {
      // watch manifest on DEV mode
      if (process.env.NODE_ENV === 'development') {
        addPageWatcher([srcPath]);
      }
    } else {
      onGenerateFiles(function () {
        log.warn("You'd better provide a WebManifest. Try to:\n                1. Create one under: `".concat(srcPath, "`,\n                2. Or override its path with `pwa.manifestOptions.srcPath` in umi config"));
      });
      srcPath = null;
      manifestFilename = DEFAULT_MANIFEST_FILENAME;
    } // add <link rel="manifest">


    addHTMLLink({
      rel: 'manifest',
      href: prependPublicPath(publicPath, manifestFilename)
    }); // use PWACompat(https://github.com/GoogleChromeLabs/pwacompat) for non-compliant browsers

    addHTMLHeadScript({
      async: '',
      src: prependPublicPath(publicPath, PWACOMPAT_PATH)
    });
    return {
      srcPath: srcPath,
      outputPath: manifestFilename
    };
  }
});