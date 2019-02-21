define(["exports", "../../common/is"], function (_exports, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isObject = void 0;
  _is = _interopRequireDefault(_is);

  var isObject = function isObject(obj) {
    return (0, _is.default)(obj) === 'Object';
  };

  _exports.isObject = isObject;
  var _default = isObject;
  _exports.default = _default;
});