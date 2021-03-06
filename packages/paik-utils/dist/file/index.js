(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./getBase64", "./getExt"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./getBase64"), require("./getExt"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getBase64, global.getExt);
    global.index = mod.exports;
  }
})(this, function (_exports, _getBase, _getExt) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "getBase64", {
    enumerable: true,
    get: function get() {
      return _getBase.default;
    }
  });
  Object.defineProperty(_exports, "getExt", {
    enumerable: true,
    get: function get() {
      return _getExt.default;
    }
  });
  _exports.default = void 0;
  _getBase = _interopRequireDefault(_getBase);
  _getExt = _interopRequireDefault(_getExt);
  var _default = {
    getBase64: _getBase.default,
    getExt: _getExt.default
  };
  _exports.default = _default;
});