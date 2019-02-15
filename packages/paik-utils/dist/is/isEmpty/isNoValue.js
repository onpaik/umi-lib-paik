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
    global.isNoValue = mod.exports;
  }
})(this, function (_exports, _common, _isEmptyObj) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.objectIsNoValue = void 0;
  _common = _interopRequireDefault(_common);
  _isEmptyObj = _interopRequireDefault(_isEmptyObj);

  var objectIsNoValue = function objectIsNoValue(obj) {
    var newObj = (0, _common.default)(obj);
    if ((0, _isEmptyObj.default)(newObj)) return true;
    return false;
  };

  _exports.objectIsNoValue = objectIsNoValue;
});