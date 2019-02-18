/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.toLowerCase = void 0;

/* eslint-disable */
var toLowerCase = function toLowerCase(str) {
  return String.prototype.toLowerCase.call(str || '');
};

exports.toLowerCase = toLowerCase;
var _default = toLowerCase;
exports.default = _default;