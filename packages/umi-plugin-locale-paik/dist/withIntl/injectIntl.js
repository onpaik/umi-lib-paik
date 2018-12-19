(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-intl", "hoist-non-react-statics"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-intl"), require("hoist-non-react-statics"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactIntl, global.hoistNonReactStatics);
    global.injectIntl = mod.exports;
  }
})(this, function (_exports, _reactIntl, _hoistNonReactStatics) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = withInjectIntl;
  _hoistNonReactStatics = _interopRequireDefault(_hoistNonReactStatics);

  function withInjectIntl(WrappedComponent, options) {
    var Component = (0, _reactIntl.injectIntl)(WrappedComponent, options);
    (0, _hoistNonReactStatics.default)(Component, WrappedComponent);
    return Component;
  }
});