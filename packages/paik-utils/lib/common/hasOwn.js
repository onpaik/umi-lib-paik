"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hasOwn = void 0;

var hasOwn = function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

exports.hasOwn = hasOwn;
var _default = hasOwn;
exports.default = _default;