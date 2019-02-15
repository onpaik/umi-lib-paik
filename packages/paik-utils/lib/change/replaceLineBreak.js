"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spliceLineBreak = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _common = require("../common");

var spliceLineBreak = function spliceLineBreak(obj) {
  var newObj = (0, _objectSpread2.default)({}, obj);
  Object.entries(newObj).map(function (kayVal) {
    var _kayVal = (0, _slicedToArray2.default)(kayVal, 2),
        key = _kayVal[0],
        value = _kayVal[1];

    if ((0, _common.is)(value) === 'String') newObj[key] = value.replace(/[\r\n]/g, '');
    return kayVal;
  });
  return newObj;
};

exports.spliceLineBreak = spliceLineBreak;