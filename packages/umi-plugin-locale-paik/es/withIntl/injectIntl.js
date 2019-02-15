define(["exports", "react-intl", "hoist-non-react-statics"], function (_exports, _reactIntl, _hoistNonReactStatics) {
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