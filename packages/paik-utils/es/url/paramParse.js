define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.paramParse = void 0;

  /* eslint-disable */
  var paramParse = function paramParse(str) {
    return Object.fromEntries(new URLSearchParams(str));
  };

  _exports.paramParse = paramParse;
  var _default = paramParse;
  _exports.default = _default;
});