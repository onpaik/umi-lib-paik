/* eslint-disable */ 
 "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getParam", {
  enumerable: true,
  get: function get() {
    return _getParam.default;
  }
});
Object.defineProperty(exports, "getParams", {
  enumerable: true,
  get: function get() {
    return _getParams.default;
  }
});
Object.defineProperty(exports, "paramParse", {
  enumerable: true,
  get: function get() {
    return _paramParse.default;
  }
});
exports.default = void 0;

var _getParam = _interopRequireDefault(require("./getParam"));

var _getParams = _interopRequireDefault(require("./getParams"));

var _paramParse = _interopRequireDefault(require("./paramParse"));

var _default = {
  getParam: _getParam.default,
  getParams: _getParams.default,
  paramParse: _paramParse.default
};
exports.default = _default;