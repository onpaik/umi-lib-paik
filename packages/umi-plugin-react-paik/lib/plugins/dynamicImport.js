"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _path = require("path");

var _isReactComponent = _interopRequireDefault(require("../utils/isReactComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default(api, options) {
  var paths = api.paths,
      winPath = api.winPath;

  if (options.level) {
    process.env.CODE_SPLITTING_LEVEL = options.level;
  }

  api.modifyAFWebpackOpts(function (opts) {
    return _objectSpread({}, opts, {
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