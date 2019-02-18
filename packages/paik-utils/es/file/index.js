define(["exports", "./getBase64", "./getExt"], function (_exports, _getBase, _getExt) {
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

  /* eslint-disable */
  var _default = {
    getBase64: _getBase.default,
    getExt: _getExt.default
  };
  _exports.default = _default;
});