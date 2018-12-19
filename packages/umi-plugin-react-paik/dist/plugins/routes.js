(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "umi-plugin-routes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("umi-plugin-routes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.umiPluginRoutes);
    global.routes = mod.exports;
  }
})(this, function (_exports, _umiPluginRoutes) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _umiPluginRoutes.default;
    }
  });
  _umiPluginRoutes = _interopRequireDefault(_umiPluginRoutes);
});