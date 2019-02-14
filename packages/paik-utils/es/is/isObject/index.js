define(["exports", "../../common"], function (_exports, _common) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isObject = void 0;

  var isObject = function isObject(obj) {
    return (0, _common.is)(obj) === 'Object';
  };

  _exports.isObject = isObject;
  var _default = isObject;
  _exports.default = _default;
});