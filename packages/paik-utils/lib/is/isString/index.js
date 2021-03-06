"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isString = void 0;

var _is = _interopRequireDefault(require("../../common/is"));

var isString = function isString(obj) {
  return (0, _is.default)(obj) === 'String';
};

exports.isString = isString;
var _default = isString;
exports.default = _default;