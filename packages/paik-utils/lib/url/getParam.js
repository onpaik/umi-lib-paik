"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getParams = exports.getParam = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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
    return obj;
  }

  return null;
};

exports.getParams = getParams;
var _default = getParams;
exports.default = _default;