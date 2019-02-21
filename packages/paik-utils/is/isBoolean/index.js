/* eslint-disable */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isBoolean = void 0;

var _is = _interopRequireDefault(require("../../common/is"));

var isBoolean = function isBoolean(obj) {
  return (0, _is.default)(obj) === 'Boolean';
};

exports.isBoolean = isBoolean;
var _default = isBoolean;
exports.default = _default;