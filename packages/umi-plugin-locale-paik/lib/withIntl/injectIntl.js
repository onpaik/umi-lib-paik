"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withInjectIntl;

var _reactIntl = require("react-intl");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

function withInjectIntl(WrappedComponent, options) {
  var Component = (0, _reactIntl.injectIntl)(WrappedComponent, options);
  (0, _hoistNonReactStatics.default)(Component, WrappedComponent);
  return Component;
}