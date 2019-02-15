define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.getExt = void 0;

  var getExt = function getExt(name) {
    return name.substring(name.lastIndexOf('.') + 1, name.length).toLowerCase();
  };

  _exports.getExt = getExt;
  var _default = getExt;
  _exports.default = _default;
});