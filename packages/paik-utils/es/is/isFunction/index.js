define(["exports", "../../common"], function (_exports, _common) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isFunction = void 0;

  var isFunction = function isFunction(obj) {
    return (0, _common.is)(obj) === 'Function';
  };

  _exports.isFunction = isFunction;
  var _default = isFunction;
  _exports.default = _default;
});