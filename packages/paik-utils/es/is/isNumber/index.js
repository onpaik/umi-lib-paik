define(["exports", "../../common/is"], function (_exports, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isNumber = void 0;
  _is = _interopRequireDefault(_is);

  var isNumber = function isNumber(obj) {
    return (0, _is.default)(obj) === 'Number';
  };

  _exports.isNumber = isNumber;
  var _default = isNumber;
  _exports.default = _default;
});