"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNull = void 0;

var _common = require("../../common");

var isNull = function isNull(obj) {
  return (0, _common.is)(obj) === 'Null';
};

exports.isNull = isNull;
var _default = isNull;
exports.default = _default;