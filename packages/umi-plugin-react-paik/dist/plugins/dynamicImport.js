(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/objectSpread", "path", "../utils/isReactComponent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/objectSpread"), require("path"), require("../utils/isReactComponent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectSpread, global.path, global.isReactComponent);
    global.dynamicImport = mod.exports;
  }
})(this, function (_exports, _objectSpread2, _path, _isReactComponent) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _isReactComponent = _interopRequireDefault(_isReactComponent);

  function _default(api, options) {
    var paths = api.paths,
        winPath = api.winPath;

    if (options.level) {
      process.env.CODE_SPLITTING_LEVEL = options.level;
    }

    api.modifyAFWebpackOpts(function (opts) {
      return (0, _objectSpread2.default)({}, opts, {
        disableDynamicImport: false
      });
    });
    api.modifyRouteComponent(function (memo, args) {
      var importPath = args.importPath,
          webpackChunkName = args.webpackChunkName;
      var loadingOpts = '';

      if (options.loadingComponent) {
        if ((0, _isReactComponent.default)(options.loadingComponent.trim())) {
          loadingOpts = ", loading: ".concat(options.loadingComponent.trim());
        } else {
          loadingOpts = ", loading: require('".concat(winPath((0, _path.join)(paths.absSrcPath, options.loadingComponent)), "').default");
        }
      }

      var extendStr = '';

      if (options.webpackChunkName) {
        extendStr = "/* webpackChunkName: ^".concat(webpackChunkName, "^ */");
      }

      return "dynamic({ loader: () => import(".concat(extendStr, "'").concat(importPath, "')").concat(loadingOpts, " })");
    });
  }
});