(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "umi-plugin-hd"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("umi-plugin-hd"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.umiPluginHd);
    global.hd = mod.exports;
  }
})(this, function (_exports, _umiPluginHd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _umiPluginHd.default;
    }
  });
  _umiPluginHd = _interopRequireDefault(_umiPluginHd);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});