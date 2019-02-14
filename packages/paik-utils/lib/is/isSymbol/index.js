"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isSymbol = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _common = require("../../common");

var _hasSymbol = _interopRequireDefault(require("./hasSymbol"));

var isSymbol = function isSymbol(obj) {
  if ((0, _hasSymbol.default)()) {
    var symToStr = Symbol.prototype.toString;
    var symStringRegex = /^Symbol\(.*\)$/;

    var isSymbolObject = function isRealSymbolObject(value) {
      if ((0, _typeof2.default)(value.valueOf()) !== 'symbol') {
        return false;
      }

      return symStringRegex.test(symToStr.call(value));
    };

    if ((0, _typeof2.default)(obj) === 'symbol') {
      return true;
    }

    if ((0, _common.is)(obj) !== 'Symbol') {
      return false;
    }

    try {
      return isSymbolObject(obj);
    } catch (e) {
      return false;
    }
  }

  return false && obj;
};

exports.isSymbol = isSymbol;
var _default = isSymbol;
exports.default = _default;