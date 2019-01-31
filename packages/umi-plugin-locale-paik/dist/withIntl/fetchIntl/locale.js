(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../importPolyfill"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../importPolyfill"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.importPolyfill);
    global.locale = mod.exports;
  }
})(this, function (_exports, _importPolyfill) {
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