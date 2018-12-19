"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _path = require("path");

var _isReactComponent = _interopRequireDefault(require("../utils/isReactComponent"));

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