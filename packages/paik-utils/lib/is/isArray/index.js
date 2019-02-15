"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isArray = void 0;

var _common = require("../../common");

var isArray = function isArray(obj) {
  if (!Array.isArray) {
    return (0, _common.is)(obj) === 'Array';
  }

  return Array.isArray(obj);
};

exports.isArray = isArray;
var _default = isArray;
exports.default = _default;