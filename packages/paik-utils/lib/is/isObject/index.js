"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isObject = void 0;

var _common = require("../../common");

var isObject = function isObject(obj) {
  return (0, _common.is)(obj) === 'Object';
};

exports.isObject = isObject;
var _default = isObject;
exports.default = _default;