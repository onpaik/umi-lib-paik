"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.spliceLineBreak = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _is = _interopRequireDefault(require("../common/is"));

var _delLineBreak = _interopRequireDefault(require("../common/delLineBreak"));

/* eslint-disable */

/**
 * 删除对象属性值中的换行符
 * @param {*} obj 对象
 */
var spliceLineBreak = function spliceLineBreak(obj) {
  var newObj = (0, _objectSpread2.default)({}, obj);
  Object.entries(newObj).map(function (kayVal) {
    var _kayVal = (0, _slicedToArray2.default)(kayVal, 2),
        key = _kayVal[0],
        value = _kayVal[1];

    if ((0, _is.default)(value) === 'String') newObj[key] = (0, _delLineBreak.default)(value);
    return kayVal;
  });
  return newObj;
};

exports.spliceLineBreak = spliceLineBreak;
var _default = spliceLineBreak;
exports.default = _default;