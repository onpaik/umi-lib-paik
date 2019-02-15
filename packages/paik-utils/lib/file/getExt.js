"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getExt = void 0;

var getExt = function getExt(name) {
  return name.substring(name.lastIndexOf('.') + 1, name.length).toLowerCase();
};

exports.getExt = getExt;
var _default = getExt;
exports.default = _default;