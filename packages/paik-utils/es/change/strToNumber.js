define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.strToNumber = void 0;

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