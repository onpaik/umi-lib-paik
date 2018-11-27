(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "umi-plugin-polyfills"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("umi-plugin-polyfills"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.umiPluginPolyfills);
    global.polyfills = mod.exports;
  }
})(this, function (_exports, _umiPluginPolyfills) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _umiPluginPolyfills.default;
    }
  });
  _umiPluginPolyfills = _interopRequireDefault(_umiPluginPolyfills);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});