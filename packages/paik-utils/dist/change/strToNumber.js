(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.strToNumber = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.strToNumber = void 0;

  /**
   * 转换对象中属性值中的字符串为数字
   * @param {*} obj 对象
   */
  var strToNumber = function strToNumber(obj) {
    var newObj = obj;
    Object.keys(obj).map(function (k) {
      if (Number(newObj[k])) newObj[k] = Number(newObj[k]);
      return k;
    });
    return newObj;
  };

  _exports.strToNumber = strToNumber;
  var _default = strToNumber;
  _exports.default = _default;
});