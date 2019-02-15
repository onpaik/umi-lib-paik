(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./regExp", "./idCard"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./regExp"), require("./idCard"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.regExp, global.idCard);
    global.index = mod.exports;
  }
})(this, function (_exports, _regExp, _idCard) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "regExp", {
    enumerable: true,
    get: function get() {
      return _regExp.default;
    }
  });
  Object.defineProperty(_exports, "idCard", {
    enumerable: true,
    get: function get() {
      return _idCard.default;
    }
  });
  _exports.default = void 0;
  _regExp = _interopRequireDefault(_regExp);
  _idCard = _interopRequireDefault(_idCard);
  var _default = {
    regExp: _regExp.default,
    idCard: _idCard.default
  };
  _exports.default = _default;
});