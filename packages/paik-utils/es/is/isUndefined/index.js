define(["exports", "../../common/is"], function (_exports, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isUndefined = void 0;
  _is = _interopRequireDefault(_is);

  /* eslint-disable */
  var isUndefined = function isUndefined(obj) {
    return (0, _is.default)(obj) === 'Undefined';
  };

  _exports.isUndefined = isUndefined;
  var _default = isUndefined;
  _exports.default = _default;
});