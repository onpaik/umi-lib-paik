(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./getDisplayName"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./getDisplayName"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getDisplayName);
    global.index = mod.exports;
  }
})(this, function (_exports, _getDisplayName) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "getDisplayName", {
    enumerable: true,
    get: function get() {
      return _getDisplayName.default;
    }
  });
  _exports.default = void 0;
  _getDisplayName = _interopRequireDefault(_getDisplayName);

  /* eslint-disable */
  var _default = _getDisplayName.default;
  _exports.default = _default;
});