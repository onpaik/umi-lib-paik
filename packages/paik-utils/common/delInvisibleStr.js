/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.delInvisibleStr = void 0;

/**
 * 删除不可见字符
 * @param {*} str 字符串
 */
var delInvisibleStr = function delInvisibleStr(str) {
  return str.toString().replace(/\s*/g, '');
};

exports.delInvisibleStr = delInvisibleStr;
var _default = delInvisibleStr;
exports.default = _default;