"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sortTime = void 0;

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
    var val1 = new Date(obj1).getTime();
    var val2 = new Date(obj2).getTime();
    if (val1 === 'NaN' || val2 === 'NaN') return 0;
    if (val1 < val2) return typeMap[type][0];
    if (val1 > val2) return typeMap[type][1];
    return 0;
  };

  return data.sort(compare);
};

exports.sortTime = sortTime;
var _default = sortTime;
exports.default = _default;