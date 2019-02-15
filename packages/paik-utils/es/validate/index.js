define(["exports", "./regExp", "./idCardValidate"], function (_exports, _regExp, _idCardValidate) {
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
  Object.defineProperty(_exports, "idCardValidate", {
    enumerable: true,
    get: function get() {
      return _idCardValidate.default;
    }
  });
  _exports.default = void 0;
  _regExp = _interopRequireDefault(_regExp);
  _idCardValidate = _interopRequireDefault(_idCardValidate);
  var _default = {
    regExp: _regExp.default,
    idCardValidate: _idCardValidate.default
  };
  _exports.default = _default;
});