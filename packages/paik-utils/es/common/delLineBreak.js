define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.delLineBreak = void 0;

  /**
   * 删除字符串中的换行符
   * @param {*} val 字符串
   */
  var delLineBreak = function delLineBreak(val) {
    return val.replace(/[\r\n]/g, '');
  };

  _exports.delLineBreak = delLineBreak;
  var _default = delLineBreak;
  _exports.default = _default;
});