"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isString = void 0;

var _common = require("../../common");

var isString = function isString(obj) {
  return (0, _common.is)(obj) === 'String';
};

exports.isString = isString;
var _default = isString;
exports.default = _default;