"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withIntl", {
  enumerable: true,
  get: function get() {
    return _withIntl.default;
  }
});
exports.default = void 0;

var _withIntl = _interopRequireDefault(require("./withIntl"));

var _default = {
  withIntl: _withIntl.default
};
exports.default = _default;