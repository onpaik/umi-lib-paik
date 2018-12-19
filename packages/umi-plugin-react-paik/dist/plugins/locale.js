(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "umi-plugin-locale-paik"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("umi-plugin-locale-paik"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.umiPluginLocalePaik);
    global.locale = mod.exports;
  }
})(this, function (_exports, _umiPluginLocalePaik) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _umiPluginLocalePaik.default;
    }
  });
  _umiPluginLocalePaik = _interopRequireDefault(_umiPluginLocalePaik);
});