define(["exports", "./isEmptyObj", "./isEmptyValue"], function (_exports, _isEmptyObj, _isEmptyValue) {
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
  Object.defineProperty(_exports, "isEmptyValue", {
    enumerable: true,
    get: function get() {
      return _isEmptyValue.default;
    }
  });
  _exports.default = void 0;
  _isEmptyObj = _interopRequireDefault(_isEmptyObj);
  _isEmptyValue = _interopRequireDefault(_isEmptyValue);
  var _default = {
    isEmptyObj: _isEmptyObj.default,
    isEmptyValue: _isEmptyValue.default
  };
  _exports.default = _default;
});