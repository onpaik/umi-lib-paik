"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.delInvalidProperty = void 0;

var delInvalidProperty = function delInvalidProperty(obj) {
  var newObj = obj;
  Object.keys(obj).map(function (k) {
    // if (isString(newObj[k])) newObj[k] = newObj[k].replace(/(^\s*)|(\s*$)/g, '');
    if (!newObj[k] && newObj[k] !== 0 && newObj[k] !== false) delete newObj[k];
    return k;
  });
  return newObj;
};

exports.delInvalidProperty = delInvalidProperty;
var _default = delInvalidProperty;
exports.default = _default;