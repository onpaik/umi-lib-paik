"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNumber = void 0;

var _common = require("../../common");

var isNumber = function isNumber(obj) {
  return (0, _common.is)(obj) === 'Number';
};

exports.isNumber = isNumber;
var _default = isNumber;
exports.default = _default;