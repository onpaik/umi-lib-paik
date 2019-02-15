define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.is = void 0;

  var is = function is(obj) {
    return Object.prototype.toString.call(obj).replace(/^\[object ([a-zA-Z0-9]+)\]$/, '$1');
  };

  _exports.is = is;
  var _default = is;
  _exports.default = _default;
});