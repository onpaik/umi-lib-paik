define(["exports", "../../common/is"], function (_exports, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isNull = void 0;
  _is = _interopRequireDefault(_is);

  var isNull = function isNull(obj) {
    return (0, _is.default)(obj) === 'Null';
  };

  _exports.isNull = isNull;
  var _default = isNull;
  _exports.default = _default;
});