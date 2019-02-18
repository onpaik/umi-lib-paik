define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.toUpperCase = void 0;

  /* eslint-disable */
  var toUpperCase = function toUpperCase(str) {
    return String.prototype.toUpperCase.call(str || '');
  };

  _exports.toUpperCase = toUpperCase;
  var _default = toUpperCase;
  _exports.default = _default;
});