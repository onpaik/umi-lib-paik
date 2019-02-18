/* eslint-disable */ 
 "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isFunction = void 0;

var _is = _interopRequireDefault(require("../../common/is"));

/* eslint-disable */
var isFunction = function isFunction(obj) {
  return (0, _is.default)(obj) === 'Function';
};

exports.isFunction = isFunction;
var _default = isFunction;
exports.default = _default;