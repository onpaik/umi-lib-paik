"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.toUpperCase = void 0;

var toUpperCase = function toUpperCase(str) {
  return String.prototype.toUpperCase.call(str || '');
};

exports.toUpperCase = toUpperCase;
var _default = toUpperCase;
exports.default = _default;