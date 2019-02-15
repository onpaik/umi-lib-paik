/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isUndefined = void 0;

var _common = require("../../common");

var isUndefined = function isUndefined(obj) {
  return (0, _common.is)(obj) === 'Undefined';
};

exports.isUndefined = isUndefined;
var _default = isUndefined;
exports.default = _default;