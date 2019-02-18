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
    global.strToDateFomat = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.strToDateFomat = void 0;

  /* eslint-disable */

  /**
  * 转为形如`YYYYMMDDHHmmss`日期字符串 为 YYYY/MM/DD HH:mm:ss
  * @param {*} str 时间字符串
  * @param {*} sperate 日期分隔符
  */
  var strToDateFomat = function strToDateFomat(str) {
    var sperate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
    return str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g, "$1/$2/$3 $4:$5:$6").replace(/\//, sperate);
  };

  _exports.strToDateFomat = strToDateFomat;
  var _default = strToDateFomat;
  _exports.default = _default;
});