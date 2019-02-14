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
    global.index = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isInValid = void 0;

  var isInValid = function isInValid(val) {
    return val === undefined || val === '' || val === null;
  };

  _exports.isInValid = isInValid;
  var _default = isInValid;
  _exports.default = _default;
});