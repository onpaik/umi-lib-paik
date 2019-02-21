/* eslint-disable */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isEmptyValue = void 0;

var _common = _interopRequireDefault(require("../../common"));

var _isEmptyObj = _interopRequireDefault(require("./isEmptyObj"));

/* eslint-disable */
var isEmptyValue = function isEmptyValue(obj) {
  var newObj = (0, _common.default)(obj);
  if ((0, _isEmptyObj.default)(newObj)) return true;
  return false;
};

exports.isEmptyValue = isEmptyValue;
var _default = isEmptyValue;
exports.default = _default;