(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/typeof", "./shams"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/typeof"), require("./shams"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.shams);
    global.hasSymbol = mod.exports;
  }
})(this, function (_exports, _typeof2, _shams) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = hasSymbol;
  _typeof2 = _interopRequireDefault(_typeof2);
  _shams = _interopRequireDefault(_shams);

  /* eslint-disable */
  var origSymbol = global.Symbol;

  function hasSymbol() {
    if (typeof origSymbol !== 'function') {
      return false;
    }

    if (typeof Symbol !== 'function') {
      return false;
    }

    if ((0, _typeof2.default)(origSymbol('foo')) !== 'symbol') {
      return false;
    }

    if ((0, _typeof2.default)(Symbol('bar')) !== 'symbol') {
      return false;
    }

    return (0, _shams.default)();
  }
});