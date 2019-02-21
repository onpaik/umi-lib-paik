(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/typeof", "../../common/is", "./hasSymbol"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/typeof"), require("../../common/is"), require("./hasSymbol"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.is, global.hasSymbol);
    global.index = mod.exports;
  }
})(this, function (_exports, _typeof2, _is, _hasSymbol) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isSymbol = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _is = _interopRequireDefault(_is);
  _hasSymbol = _interopRequireDefault(_hasSymbol);

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

      if ((0, _is.default)(obj) !== 'Symbol') {
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

  _exports.isSymbol = isSymbol;
  var _default = isSymbol;
  _exports.default = _default;
});