define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.delInvalidProperty = void 0;

  /* eslint-disable */

  /**
  * 删除对象里的无效属性，不包括 0， false,
  * @param {*} obj 对象
  */
  var delInvalidProperty = function delInvalidProperty(obj) {
    var newObj = obj;
    Object.keys(obj).map(function (k) {
      // if (isString(newObj[k])) newObj[k] = newObj[k].replace(/(^\s*)|(\s*$)/g, '');
      if (!newObj[k] && newObj[k] !== 0 && newObj[k] !== false) delete newObj[k];
      return k;
    });
    return newObj;
  };

  _exports.delInvalidProperty = delInvalidProperty;
  var _default = delInvalidProperty;
  _exports.default = _default;
});