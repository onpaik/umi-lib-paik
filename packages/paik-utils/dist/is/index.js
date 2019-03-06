(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./isArray", "./isBoolean", "./isFunction", "./isNull", "./isNumber", "./isObject", "./isString", "./isSymbol", "./isUndefined", "./isEmpty", "./isInValid", "./isClassComponent", "./isPromise", "./isMobile"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./isArray"), require("./isBoolean"), require("./isFunction"), require("./isNull"), require("./isNumber"), require("./isObject"), require("./isString"), require("./isSymbol"), require("./isUndefined"), require("./isEmpty"), require("./isInValid"), require("./isClassComponent"), require("./isPromise"), require("./isMobile"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isArray, global.isBoolean, global.isFunction, global.isNull, global.isNumber, global.isObject, global.isString, global.isSymbol, global.isUndefined, global.isEmpty, global.isInValid, global.isClassComponent, global.isPromise, global.isMobile);
    global.index = mod.exports;
  }
})(this, function (_exports, _isArray, _isBoolean, _isFunction, _isNull, _isNumber, _isObject, _isString, _isSymbol, _isUndefined, _isEmpty, _isInValid, _isClassComponent, _isPromise, _isMobile) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function get() {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isBoolean", {
    enumerable: true,
    get: function get() {
      return _isBoolean.default;
    }
  });
  Object.defineProperty(_exports, "isFunction", {
    enumerable: true,
    get: function get() {
      return _isFunction.default;
    }
  });
  Object.defineProperty(_exports, "isNull", {
    enumerable: true,
    get: function get() {
      return _isNull.default;
    }
  });
  Object.defineProperty(_exports, "isNumber", {
    enumerable: true,
    get: function get() {
      return _isNumber.default;
    }
  });
  Object.defineProperty(_exports, "isObject", {
    enumerable: true,
    get: function get() {
      return _isObject.default;
    }
  });
  Object.defineProperty(_exports, "isString", {
    enumerable: true,
    get: function get() {
      return _isString.default;
    }
  });
  Object.defineProperty(_exports, "isSymbol", {
    enumerable: true,
    get: function get() {
      return _isSymbol.default;
    }
  });
  Object.defineProperty(_exports, "isUndefined", {
    enumerable: true,
    get: function get() {
      return _isUndefined.default;
    }
  });
  Object.defineProperty(_exports, "isEmpty", {
    enumerable: true,
    get: function get() {
      return _isEmpty.default;
    }
  });
  Object.defineProperty(_exports, "isInValid", {
    enumerable: true,
    get: function get() {
      return _isInValid.default;
    }
  });
  Object.defineProperty(_exports, "isClassComponent", {
    enumerable: true,
    get: function get() {
      return _isClassComponent.default;
    }
  });
  Object.defineProperty(_exports, "isPromise", {
    enumerable: true,
    get: function get() {
      return _isPromise.default;
    }
  });
  Object.defineProperty(_exports, "isMobile", {
    enumerable: true,
    get: function get() {
      return _isMobile.default;
    }
  });
  _exports.default = void 0;
  _isArray = _interopRequireDefault(_isArray);
  _isBoolean = _interopRequireDefault(_isBoolean);
  _isFunction = _interopRequireDefault(_isFunction);
  _isNull = _interopRequireDefault(_isNull);
  _isNumber = _interopRequireDefault(_isNumber);
  _isObject = _interopRequireDefault(_isObject);
  _isString = _interopRequireDefault(_isString);
  _isSymbol = _interopRequireDefault(_isSymbol);
  _isUndefined = _interopRequireDefault(_isUndefined);
  _isEmpty = _interopRequireDefault(_isEmpty);
  _isInValid = _interopRequireDefault(_isInValid);
  _isClassComponent = _interopRequireDefault(_isClassComponent);
  _isPromise = _interopRequireDefault(_isPromise);
  _isMobile = _interopRequireDefault(_isMobile);
  var _default = {
    isArray: _isArray.default,
    isBoolean: _isBoolean.default,
    isFunction: _isFunction.default,
    isNull: _isNull.default,
    isNumber: _isNumber.default,
    isObject: _isObject.default,
    isString: _isString.default,
    isSymbol: _isSymbol.default,
    isUndefined: _isUndefined.default,
    isEmpty: _isEmpty.default,
    isInValid: _isInValid.default,
    isClassComponent: _isClassComponent.default,
    isPromise: _isPromise.default,
    isMobile: _isMobile.default
  };
  _exports.default = _default;
});