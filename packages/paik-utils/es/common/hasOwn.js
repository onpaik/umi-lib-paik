define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.hasOwn = void 0;

  var hasOwn = function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };

  _exports.hasOwn = hasOwn;
  var _default = hasOwn;
  _exports.default = _default;
});