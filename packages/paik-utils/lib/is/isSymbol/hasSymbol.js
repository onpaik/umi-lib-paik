"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasSymbol;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _shams = _interopRequireDefault(require("./shams"));

var origSymbol = global.Symbol;

function hasSymbol() {
  if (typeof origSymbol !== 'function') {
    return false;
  }

  if (typeof Symbol !== 'function') {
    return false;
  }

  if ((0, _typeof2.default)(origSymbol('foo')) !== 'symbol') {
    return false;
  }

  if ((0, _typeof2.default)(Symbol('bar')) !== 'symbol') {
    return false;
  }

  return (0, _shams.default)();
}