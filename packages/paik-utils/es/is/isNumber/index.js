define(["exports", "../../common"], function (_exports, _common) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isNumber = void 0;

  var isNumber = function isNumber(obj) {
    return (0, _common.is)(obj) === 'Number';
  };

  _exports.isNumber = isNumber;
  var _default = isNumber;
  _exports.default = _default;
});