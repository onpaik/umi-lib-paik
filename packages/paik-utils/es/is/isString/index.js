define(["exports", "../../common/is"], function (_exports, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isString = void 0;
  _is = _interopRequireDefault(_is);

  /* eslint-disable */
  var isString = function isString(obj) {
    return (0, _is.default)(obj) === 'String';
  };

  _exports.isString = isString;
  var _default = isString;
  _exports.default = _default;
});