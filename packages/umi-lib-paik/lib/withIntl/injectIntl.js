"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withInjectIntl;

var _reactIntl = require("react-intl");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withInjectIntl(WrappedComponent, options) {
  var Component = (0, _reactIntl.injectIntl)(WrappedComponent, options);
  (0, _hoistNonReactStatics.default)(Component, WrappedComponent);
  return Component;
}