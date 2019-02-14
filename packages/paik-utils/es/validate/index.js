define(["exports", "./regExp", "./idCard"], function (_exports, _regExp, _idCard) {
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