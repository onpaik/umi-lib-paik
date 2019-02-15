define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.trimLR = void 0;

  var trimLR = function trimLR(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
  };

  _exports.trimLR = trimLR;
  var _default = trimLR;
  _exports.default = _default;
});