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
    global.delInvisibleStr = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.delInvisibleStr = void 0;

  /* eslint-disable */

  /**
  * 删除不可见字符
  * @param {*} str 字符串
  */
  var delInvisibleStr = function delInvisibleStr(str) {
    return str.toString().replace(/\s*/g, '');
  };

  _exports.delInvisibleStr = delInvisibleStr;
  var _default = delInvisibleStr;
  _exports.default = _default;
});