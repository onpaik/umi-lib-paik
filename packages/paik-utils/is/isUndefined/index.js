/* eslint-disable */ 
 "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isUndefined = void 0;

var _is = _interopRequireDefault(require("../../common/is"));

/* eslint-disable */
var isUndefined = function isUndefined(obj) {
  return (0, _is.default)(obj) === 'Undefined';
};

exports.isUndefined = isUndefined;
var _default = isUndefined;
exports.default = _default;