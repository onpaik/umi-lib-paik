define(["exports", "../../common"], function (_exports, _common) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isString = void 0;

  var isString = function isString(obj) {
    return (0, _common.is)(obj) === 'String';
  };

  _exports.isString = isString;
  var _default = isString;
  _exports.default = _default;
});