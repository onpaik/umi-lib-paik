/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.paramParse = void 0;

/* eslint-disable */
var paramParse = function paramParse(str) {
  return Object.fromEntries(new URLSearchParams(str));
};

exports.paramParse = paramParse;
var _default = paramParse;
exports.default = _default;