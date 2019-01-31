"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchLocaleIntl;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _importPolyfill = _interopRequireDefault(require("../importPolyfill"));

function fetchLocaleIntl(arg) {
  var _arg = (0, _slicedToArray2.default)(arg, 2),
      locale = _arg[0],
      page = _arg[1];

  var url = "lang/".concat(locale, "/").concat(page, ".json");

  try {
    Function('import("")');
    return import(url);
  } catch (err) {
    return (0, _importPolyfill.default)(url);
  }

  ;
}