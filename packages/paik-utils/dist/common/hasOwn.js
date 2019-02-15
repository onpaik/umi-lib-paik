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
    global.hasOwn = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.hasOwn = void 0;

  /**
   * hasOwnProperty
   * @param {*} obj 对象
   * @param {*} key key
   */
  var hasOwn = function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };

  _exports.hasOwn = hasOwn;
  var _default = hasOwn;
  _exports.default = _default;
});