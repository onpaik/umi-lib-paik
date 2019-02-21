/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hasOwn = void 0;

/**
 * hasOwnProperty
 * @param {*} obj 对象
 * @param {*} key key
 */
var hasOwn = function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

exports.hasOwn = hasOwn;
var _default = hasOwn;
exports.default = _default;