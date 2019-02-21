"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isPromise = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var isPromise = function isPromise(value) {
  if (value !== null && (0, _typeof2.default)(value) === 'object') {
    return value && typeof value.then === 'function';
  }

  return false;
};

exports.isPromise = isPromise;
var _default = isPromise;
exports.default = _default;