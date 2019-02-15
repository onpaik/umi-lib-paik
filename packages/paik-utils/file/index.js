/* eslint-disable */ 
 "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getBase64", {
  enumerable: true,
  get: function get() {
    return _getBase.default;
  }
});
Object.defineProperty(exports, "getExt", {
  enumerable: true,
  get: function get() {
    return _getExt.default;
  }
});
exports.default = void 0;

var _getBase = _interopRequireDefault(require("./getBase64"));

var _getExt = _interopRequireDefault(require("./getExt"));

var _default = {
  getBase64: _getBase.default,
  getExt: _getExt.default
};
exports.default = _default;