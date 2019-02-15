/* eslint-disable */ 
 "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getParams = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

/**
 * 获取url 问号后的值
 * @param {*} name 需要获取的key，非必填
 * @return
 * 0、无结果，返回null
 *
 * 1、有参数name, 返回字符串或者null
 *
 * 2、无参数，返回对象
 */
var getParams = function getParams(name) {
  var href = window.location.href;
  var obj = {};

  if (href.indexOf('?') !== -1) {
    var params = decodeURIComponent(href.substring(href.indexOf('?') + 1));
    var paramArry = params.split('&');
    paramArry.map(function (str) {
      var keyValue = str.split('=');

      var _keyValue = (0, _slicedToArray2.default)(keyValue, 2),
          key = _keyValue[0],
          value = _keyValue[1];

      obj[key] = value;
      return str;
    });
    if (name && name in obj) return obj[name];
    if (name && !(name in obj)) return null;
    if (Object.keys(obj).length === 0) return null;
    return obj;
  }

  return null;
};

exports.getParams = getParams;
var _default = getParams;
exports.default = _default;