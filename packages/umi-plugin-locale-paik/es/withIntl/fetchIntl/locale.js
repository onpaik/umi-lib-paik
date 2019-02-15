define(["exports", "../importPolyfill"], function (_exports, _importPolyfill) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = fetchLocaleIntl;
  _importPolyfill = _interopRequireDefault(_importPolyfill);

  function fetchLocaleIntl() {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    var locale = arg[0],
        page = arg[1];

    try {
      Function('import("")');
      return import("lang/".concat(locale, "/").concat(page, ".json"));
    } catch (err) {
      return (0, _importPolyfill.default)("lang/".concat(locale, "/").concat(page, ".json"));
    }

    ;
  }
});