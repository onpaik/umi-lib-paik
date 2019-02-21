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
    global.isEmptyObj = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isEmptyObj = void 0;

  var isEmptyObj = function isEmptyObj(target) {
    if (Object.keys(target).length === 0) return true;
    return false;
  };

  _exports.isEmptyObj = isEmptyObj;
  var _default = isEmptyObj;
  _exports.default = _default;
});