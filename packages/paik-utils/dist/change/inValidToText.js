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
    global.inValidToText = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.renderUndefined = void 0;

  // String.fromCharCode(8212) === '-'

  /**
   * @param {*} value 需要转换的值
   * @param {*} text 转换后的值
   * @param {*} transZero  Boolean 是否需要转换0,默认为false不转换，
   */
  var renderUndefined = function renderUndefined(value) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String.fromCharCode(8212);
    var transZero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (transZero && (value === 0 || value === '0')) return text;
    return !value && value !== 0 ? text : value;
  };

  _exports.renderUndefined = renderUndefined;
});