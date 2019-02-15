(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./isEmptyObj", "./isNoValue"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./isEmptyObj"), require("./isNoValue"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isEmptyObj, global.isNoValue);
    global.index = mod.exports;
  }
})(this, function (_exports, _isEmptyObj, _isNoValue) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "isEmptyObj", {
    enumerable: true,
    get: function get() {
      return _isEmptyObj.default;
    }
  });
  Object.defineProperty(_exports, "isNoValue", {
    enumerable: true,
    get: function get() {
      return _isNoValue.default;
    }
  });
  _exports.default = void 0;
  _isEmptyObj = _interopRequireDefault(_isEmptyObj);
  _isNoValue = _interopRequireDefault(_isNoValue);
  var _default = {
    isEmptyObj: _isEmptyObj.default,
    isNoValue: _isNoValue.default
  };
  _exports.default = _default;
});