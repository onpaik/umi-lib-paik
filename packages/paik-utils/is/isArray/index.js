/* eslint-disable */ 
 "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isArray = void 0;

var _is = _interopRequireDefault(require("../../common/is"));

/* eslint-disable */
var isArray = function isArray(obj) {
  if (!Array.isArray) {
    return (0, _is.default)(obj) === 'Array';
  }

  return Array.isArray(obj);
};

exports.isArray = isArray;
var _default = isArray;
exports.default = _default;