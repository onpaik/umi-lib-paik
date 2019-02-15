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
    global.toDecimal = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.toDecimal = void 0;

  var toDecimal = function toDecimal(num, n) {
    var f = parseFloat(num);
    var arr = Array.from(new Array(n).keys());
    /* eslint-disable-next-line */

    if (isNaN(f)) {
      return false;
    }

    var w = 1;
    arr.map(function (i) {
      w += '0';
      return i;
    });
    w -= 0;
    f = Math.round(num * w) / w;
    var s = f.toString();
    var rs = s.indexOf('.');

    if (rs < 0) {
      rs = s.length;
      s += '.';
    }

    while (s.length <= rs + 1) {
      s += '0';
    }

    return s;
  };

  _exports.toDecimal = toDecimal;
  var _default = toDecimal;
  _exports.default = _default;
});