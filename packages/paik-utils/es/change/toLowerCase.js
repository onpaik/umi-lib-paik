define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.toLowerCase = void 0;

  var toLowerCase = function toLowerCase(str) {
    return String.prototype.toLowerCase.call(str || '');
  };

  _exports.toLowerCase = toLowerCase;
  var _default = toLowerCase;
  _exports.default = _default;
});