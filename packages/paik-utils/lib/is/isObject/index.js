"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isObject = void 0;

var _is = _interopRequireDefault(require("../../common/is"));

/* eslint-disable */
var isObject = function isObject(obj) {
  return (0, _is.default)(obj) === 'Object';
};

exports.isObject = isObject;
var _default = isObject;
exports.default = _default;