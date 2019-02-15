/* eslint-disable */ 
 "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "regExp", {
  enumerable: true,
  get: function get() {
    return _regExp.default;
  }
});
Object.defineProperty(exports, "idCardValidate", {
  enumerable: true,
  get: function get() {
    return _idCardValidate.default;
  }
});
exports.default = void 0;

var _regExp = _interopRequireDefault(require("./regExp"));

var _idCardValidate = _interopRequireDefault(require("./idCardValidate"));

var _default = {
  regExp: _regExp.default,
  idCardValidate: _idCardValidate.default
};
exports.default = _default;