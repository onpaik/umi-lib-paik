define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.strToNumber = void 0;

  /* eslint-disable */

  /**
  * 转换对象中属性值中的字符串为数字
  * @param {*} obj 对象
  */
  var strToNumber = function strToNumber(obj) {
    var newObj = obj;
    Object.keys(obj).map(function (k) {
      if (Number(newObj[k])) newObj[k] = Number(newObj[k]);
      return k;
    });
    return newObj;
  };

  _exports.strToNumber = strToNumber;
  var _default = strToNumber;
  _exports.default = _default;
});