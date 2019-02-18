"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isInValid = void 0;

/* eslint-disable */
var isInValid = function isInValid(val) {
  return val === undefined || val === '' || val === null;
};

exports.isInValid = isInValid;
var _default = isInValid;
exports.default = _default;