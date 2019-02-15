define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.delInvisibleStr = void 0;

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