"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.is = void 0;

var is = function is(obj) {
  return Object.prototype.toString.call(obj).replace(/^\[object ([a-zA-Z0-9]+)\]$/, '$1');
};

exports.is = is;
var _default = is;
exports.default = _default;