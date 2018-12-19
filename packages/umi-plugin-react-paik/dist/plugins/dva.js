(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "umi-plugin-dva"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("umi-plugin-dva"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.umiPluginDva);
    global.dva = mod.exports;
  }
})(this, function (_exports, _umiPluginDva) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _umiPluginDva.default;
    }
  });
  _umiPluginDva = _interopRequireDefault(_umiPluginDva);
});