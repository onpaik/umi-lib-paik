(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../../common", "./isEmptyObj"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../../common"), require("./isEmptyObj"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.common, global.isEmptyObj);
    global.isEmptyValue = mod.exports;
  }
})(this, function (_exports, _common, _isEmptyObj) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isEmptyValue = void 0;
  _common = _interopRequireDefault(_common);
  _isEmptyObj = _interopRequireDefault(_isEmptyObj);

  /* eslint-disable */
  var isEmptyValue = function isEmptyValue(obj) {
    var newObj = (0, _common.default)(obj);
    if ((0, _isEmptyObj.default)(newObj)) return true;
    return false;
  };

  _exports.isEmptyValue = isEmptyValue;
  var _default = isEmptyValue;
  _exports.default = _default;
});