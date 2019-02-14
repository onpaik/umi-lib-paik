define(["exports", "../../common"], function (_exports, _common) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isUndefined = void 0;

  var isUndefined = function isUndefined(obj) {
    return (0, _common.is)(obj) === 'Undefined';
  };

  _exports.isUndefined = isUndefined;
  var _default = isUndefined;
  _exports.default = _default;
});