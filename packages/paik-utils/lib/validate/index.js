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
Object.defineProperty(exports, "idCard", {
  enumerable: true,
  get: function get() {
    return _idCard.default;
  }
});
exports.default = void 0;

var _regExp = _interopRequireDefault(require("./regExp"));

var _idCard = _interopRequireDefault(require("./idCard"));

var _default = {
  regExp: _regExp.default,
  idCard: _idCard.default
};
exports.default = _default;