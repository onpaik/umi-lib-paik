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
    global.getExt = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.getExt = void 0;

  /* eslint-disable */

  /**
  * 获取文件拓展名
  * @param {*} name 符合路径规则的字符串
  * @returns 文件拓展名 小写
  */
  var getExt = function getExt(name) {
    return name.substring(name.lastIndexOf('.') + 1, name.length).toLowerCase();
  };

  _exports.getExt = getExt;
  var _default = getExt;
  _exports.default = _default;
});