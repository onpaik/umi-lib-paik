"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectIsNoValue = void 0;

var _common = _interopRequireDefault(require("../../common"));

var _isEmptyObj = _interopRequireDefault(require("./isEmptyObj"));

var objectIsNoValue = function objectIsNoValue(obj) {
  var newObj = (0, _common.default)(obj);
  if ((0, _isEmptyObj.default)(newObj)) return true;
  return false;
};

exports.objectIsNoValue = objectIsNoValue;