define(["exports", "../../common"], function (_exports, _common) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isNull = void 0;

  var isNull = function isNull(obj) {
    return (0, _common.is)(obj) === 'Null';
  };

  _exports.isNull = isNull;
  var _default = isNull;
  _exports.default = _default;
});