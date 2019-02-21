/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getParam = void 0;

/**
 * 获取url 问号后的值
 * @param {*} name 需要获取的key
 * @return 字符串，没有则返回 null
 */
var getParam = function getParam(name) {
  var href = window.location.href;

  if (href.indexOf('?') !== -1) {
    var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"));
    var param = decodeURIComponent(href).split(/\?/gi)[1];
    var r = param.match(reg);
    if (r) return r[2];
    return null;
  }

  return null;
};

exports.getParam = getParam;
var _default = getParam;
exports.default = _default;