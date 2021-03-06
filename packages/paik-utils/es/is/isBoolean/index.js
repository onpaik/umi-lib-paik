define(["exports", "../../common/is"], function (_exports, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isBoolean = void 0;
  _is = _interopRequireDefault(_is);

  var isBoolean = function isBoolean(obj) {
    return (0, _is.default)(obj) === 'Boolean';
  };

  _exports.isBoolean = isBoolean;
  var _default = isBoolean;
  _exports.default = _default;
});