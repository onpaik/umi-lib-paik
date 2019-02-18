define(["exports", "../../common/is"], function (_exports, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isArray = void 0;
  _is = _interopRequireDefault(_is);

  /* eslint-disable */
  var isArray = function isArray(obj) {
    if (!Array.isArray) {
      return (0, _is.default)(obj) === 'Array';
    }

    return Array.isArray(obj);
  };

  _exports.isArray = isArray;
  var _default = isArray;
  _exports.default = _default;
});