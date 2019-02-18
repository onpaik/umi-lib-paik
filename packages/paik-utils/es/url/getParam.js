define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.getParam = void 0;

  /* eslint-disable */

  /**
  * 获取url 问号后的值
  * @param {*} name 需要获取的key
  * @return 字符串，没有则返回 null
  */
  var getParam = function getParam(name) {
    var href = window.location.href;

    if (href.indexOf('?') !== -1) {
      var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"));
      var param = decodeURIComponent(href).split(/\?/gi)[1];
      var r = param.match(reg);
      if (r) return r[2];
      return null;
    }

    return null;
  };

  _exports.getParam = getParam;
  var _default = getParam;
  _exports.default = _default;
});