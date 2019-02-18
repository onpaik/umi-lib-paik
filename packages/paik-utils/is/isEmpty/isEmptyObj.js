/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isEmptyObj = void 0;

/* eslint-disable */
var isEmptyObj = function isEmptyObj(target) {
  if (Object.keys(target).length === 0) return true;
  return false;
};

exports.isEmptyObj = isEmptyObj;
var _default = isEmptyObj;
exports.default = _default;