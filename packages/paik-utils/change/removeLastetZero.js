/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.removeLastetZero = void 0;
var regexp = /(?:\.0*|(\.\d+?)0+)$/;
/**
 * 取消小数后面多余的0
 * @param {*} num 数字
 */

var removeLastetZero = function removeLastetZero(num) {
  return String(num).replace(regexp, '$1');
};

exports.removeLastetZero = removeLastetZero;
var _default = removeLastetZero;
exports.default = _default;