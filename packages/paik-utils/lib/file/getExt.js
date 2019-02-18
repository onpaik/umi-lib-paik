"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getExt = void 0;

/* eslint-disable */

/**
* 获取文件拓展名
* @param {*} name 符合路径规则的字符串
* @returns 文件拓展名 小写
*/
var getExt = function getExt(name) {
  return name.substring(name.lastIndexOf('.') + 1, name.length).toLowerCase();
};

exports.getExt = getExt;
var _default = getExt;
exports.default = _default;