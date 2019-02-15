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
    global.trimLR = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.trimLR = void 0;

  /**
   * 删除首尾空格
   * @param {*} str 字符串
   */
  var trimLR = function trimLR(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
  };

  _exports.trimLR = trimLR;
  var _default = trimLR;
  _exports.default = _default;
});