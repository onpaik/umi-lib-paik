"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.strToNumber = void 0;

/**
 * 转换对象中属性值中的字符串为数字
 * @param {*} obj 对象
 */
var strToNumber = function strToNumber(obj) {
  var newObj = obj;
  Object.keys(obj).map(function (k) {
    if (Number(newObj[k])) newObj[k] = Number(newObj[k]);
    return k;
  });
  return newObj;
};

exports.strToNumber = strToNumber;
var _default = strToNumber;
exports.default = _default;