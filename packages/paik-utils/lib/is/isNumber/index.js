"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNumber = void 0;

var _is = _interopRequireDefault(require("../../common/is"));

/* eslint-disable */
var isNumber = function isNumber(obj) {
  return (0, _is.default)(obj) === 'Number';
};

exports.isNumber = isNumber;
var _default = isNumber;
exports.default = _default;