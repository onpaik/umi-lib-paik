/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isFunction = void 0;

var _common = require("../../common");

var isFunction = function isFunction(obj) {
  return (0, _common.is)(obj) === 'Function';
};

exports.isFunction = isFunction;
var _default = isFunction;
exports.default = _default;