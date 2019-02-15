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
    global.removeLastetZero = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.removeLastetZero = void 0;
  var regexp = /(?:\.0*|(\.\d+?)0+)$/; // 取消小数后面多余的0

  var removeLastetZero = function removeLastetZero(num) {
    return String(num).replace(regexp, '$1');
  };

  _exports.removeLastetZero = removeLastetZero;
  var _default = removeLastetZero;
  _exports.default = _default;
});