define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.toDecimal = void 0;

  /* eslint-disable */

  /**
  * 长小数保留小数位
  * @param {*} num 数字
  * @param {*} n 保留小数位
  */
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