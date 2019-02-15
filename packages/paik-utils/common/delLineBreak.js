/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.delLineBreak = void 0;

/**
 * 删除字符串中的换行符
 * @param {*} val 字符串
 */
var delLineBreak = function delLineBreak(val) {
  return val.replace(/[\r\n]/g, '');
};

exports.delLineBreak = delLineBreak;
var _default = delLineBreak;
exports.default = _default;