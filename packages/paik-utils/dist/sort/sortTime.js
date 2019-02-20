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
    global.sortTime = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.sortTime = void 0;

  /* eslint-disable */

  /**
  * @param key String 需要排序的key值,只能排序时间
  * @param type String asc:升序;desc:降序
  * @param data 需要排序的数组
  * @return new Array
  */
  var sortTime = function sortTime(key, data) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'desc';
    var typeMap = {
      desc: [1, -1],
      asc: [-1, 1]
    };

    var compare = function compare(obj1, obj2) {
      var val1 = new Date(obj1[key]).getTime();
      var val2 = new Date(obj2[key]).getTime();
      if (val1 === 'NaN' || val2 === 'NaN') return 0;
      if (val1 < val2) return typeMap[type][0];
      if (val1 > val2) return typeMap[type][1];
      return 0;
    };

    return data.sort(compare);
  };

  _exports.sortTime = sortTime;
  var _default = sortTime;
  _exports.default = _default;
});