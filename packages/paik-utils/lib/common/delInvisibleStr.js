"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.delInvisibleStr = void 0;

var delInvisibleStr = function delInvisibleStr(str) {
  return str.toString().replace(/\s*/g, '');
};

exports.delInvisibleStr = delInvisibleStr;
var _default = delInvisibleStr;
exports.default = _default;