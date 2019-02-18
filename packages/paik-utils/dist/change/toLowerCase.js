(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.toLowerCase = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.toLowerCase = void 0;

  /* eslint-disable */
  var toLowerCase = function toLowerCase(str) {
    return String.prototype.toLowerCase.call(str || '');
  };

  _exports.toLowerCase = toLowerCase;
  var _default = toLowerCase;
  _exports.default = _default;
});