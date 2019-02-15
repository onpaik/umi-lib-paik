"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.strToNumber = void 0;

var strToNumber = function strToNumber(obj) {
  var newObj = obj;
  Object.keys(obj).map(function (k) {
    if (Number(newObj[k])) newObj[k] = Number(newObj[k]);
    return k;
  });
  return newObj;
};

exports.strToNumber = strToNumber;
var _default = strToNumber;
exports.default = _default;