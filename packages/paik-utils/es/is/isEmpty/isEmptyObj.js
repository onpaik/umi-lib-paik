define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isEmptyObj = void 0;

  /* eslint-disable */
  var isEmptyObj = function isEmptyObj(target) {
    if (Object.keys(target).length === 0) return true;
    return false;
  };

  _exports.isEmptyObj = isEmptyObj;
  var _default = isEmptyObj;
  _exports.default = _default;
});