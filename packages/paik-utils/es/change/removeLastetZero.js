define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.removeLastetZero = void 0;

  /* eslint-disable */
  var regexp = /(?:\.0*|(\.\d+?)0+)$/;
  /**
   * 取消小数后面多余的0
   * @param {*} num 数字
   */

  var removeLastetZero = function removeLastetZero(num) {
    return String(num).replace(regexp, '$1');
  };

  _exports.removeLastetZero = removeLastetZero;
  var _default = removeLastetZero;
  _exports.default = _default;
});