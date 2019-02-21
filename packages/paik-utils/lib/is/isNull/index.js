"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNull = void 0;

var _is = _interopRequireDefault(require("../../common/is"));

var isNull = function isNull(obj) {
  return (0, _is.default)(obj) === 'Null';
};

exports.isNull = isNull;
var _default = isNull;
exports.default = _default;