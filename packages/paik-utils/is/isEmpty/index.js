/* eslint-disable */ 
 "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isEmptyObj", {
  enumerable: true,
  get: function get() {
    return _isEmptyObj.default;
  }
});
Object.defineProperty(exports, "isNoValue", {
  enumerable: true,
  get: function get() {
    return _isNoValue.default;
  }
});
exports.default = void 0;

var _isEmptyObj = _interopRequireDefault(require("./isEmptyObj"));

var _isNoValue = _interopRequireDefault(require("./isNoValue"));

/* eslint-disable */
var _default = {
  isEmptyObj: _isEmptyObj.default,
  isNoValue: _isNoValue.default
};
exports.default = _default;