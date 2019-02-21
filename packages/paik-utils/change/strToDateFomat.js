/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.strToDateFomat = void 0;

/**
 * 转为形如`YYYYMMDDHHmmss`日期字符串 为 YYYY/MM/DD HH:mm:ss
 * @param {*} str 时间字符串
 * @param {*} sperate 日期分隔符
 */
var strToDateFomat = function strToDateFomat(str) {
  var sperate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  return str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g, "$1/$2/$3 $4:$5:$6").replace(/\//, sperate);
};

exports.strToDateFomat = strToDateFomat;
var _default = strToDateFomat;
exports.default = _default;