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
    global.paramParse = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.paramParse = void 0;

  /* eslint-disable */
  var paramParse = function paramParse(str) {
    return Object.fromEntries(new URLSearchParams(str));
  };

  _exports.paramParse = paramParse;
  var _default = paramParse;
  _exports.default = _default;
});