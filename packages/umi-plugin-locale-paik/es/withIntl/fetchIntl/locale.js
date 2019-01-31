define(["exports", "@babel/runtime/helpers/slicedToArray", "../importPolyfill"], function (_exports, _slicedToArray2, _importPolyfill) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = fetchLocaleIntl;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _importPolyfill = _interopRequireDefault(_importPolyfill);

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
});