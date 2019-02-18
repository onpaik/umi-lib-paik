(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/typeof", "../../common/is"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/typeof"), require("../../common/is"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.is);
    global.shams = mod.exports;
  }
})(this, function (_exports, _typeof2, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = hasSymbols;
  _typeof2 = _interopRequireDefault(_typeof2);
  _is = _interopRequireDefault(_is);

  /* eslint-disable */
  function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
      return false;
    }

    if ((0, _typeof2.default)(Symbol.iterator) === 'symbol') {
      return true;
    }

    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);

    if (typeof sym === 'string') {
      return false;
    }

    if ((0, _is.default)(sym) !== 'Symbol') {
      return false;
    }

    if ((0, _is.default)(symObj) !== 'Symbol') {
      return false;
    } // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }


    var symVal = 42;
    obj[sym] = symVal;
    /* eslint-disable-next-line */

    for (sym in obj) {
      return false;
    } // eslint-disable-line no-restricted-syntax


    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
      return false;
    }

    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }

    var syms = Object.getOwnPropertySymbols(obj);

    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }

    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }

    if (typeof Object.getOwnPropertyDescriptor === 'function') {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);

      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }

    return true;
  }
});