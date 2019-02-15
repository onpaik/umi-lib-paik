/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isBoolean = void 0;

var _common = require("../../common");

var isBoolean = function isBoolean(obj) {
  return (0, _common.is)(obj) === 'Boolean';
};

exports.isBoolean = isBoolean;
var _default = isBoolean;
exports.default = _default;