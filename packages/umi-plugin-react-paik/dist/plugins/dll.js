(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "umi-plugin-dll"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("umi-plugin-dll"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.umiPluginDll);
    global.dll = mod.exports;
  }
})(this, function (_exports, _umiPluginDll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _umiPluginDll.default;
    }
  });
  _umiPluginDll = _interopRequireDefault(_umiPluginDll);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});