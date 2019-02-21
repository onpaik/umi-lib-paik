"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isEmptyObj", {
  enumerable: true,
  get: function get() {
    return _isEmptyObj.default;
  }
});
Object.defineProperty(exports, "isEmptyValue", {
  enumerable: true,
  get: function get() {
    return _isEmptyValue.default;
  }
});
exports.default = void 0;

var _isEmptyObj = _interopRequireDefault(require("./isEmptyObj"));

var _isEmptyValue = _interopRequireDefault(require("./isEmptyValue"));

var _default = {
  isEmptyObj: _isEmptyObj.default,
  isEmptyValue: _isEmptyValue.default
};
exports.default = _default;