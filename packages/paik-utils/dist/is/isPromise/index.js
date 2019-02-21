(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/typeof"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/typeof"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof);
    global.index = mod.exports;
  }
})(this, function (_exports, _typeof2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isPromise = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);

  var isPromise = function isPromise(value) {
    if (value !== null && (0, _typeof2.default)(value) === 'object') {
      return value && typeof value.then === 'function';
    }

    return false;
  };

  _exports.isPromise = isPromise;
  var _default = isPromise;
  _exports.default = _default;
});