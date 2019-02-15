"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.trimLR = void 0;

var trimLR = function trimLR(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
};

exports.trimLR = trimLR;
var _default = trimLR;
exports.default = _default;