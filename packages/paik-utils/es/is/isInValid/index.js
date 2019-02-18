define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isInValid = void 0;

  /* eslint-disable */
  var isInValid = function isInValid(val) {
    return val === undefined || val === '' || val === null;
  };

  _exports.isInValid = isInValid;
  var _default = isInValid;
  _exports.default = _default;
});