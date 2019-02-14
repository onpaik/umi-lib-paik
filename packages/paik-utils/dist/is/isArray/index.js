(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../../common"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../../common"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.common);
    global.index = mod.exports;
  }
})(this, function (_exports, _common) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isArray = void 0;

  var isArray = function isArray(obj) {
    if (!Array.isArray) {
      return (0, _common.is)(obj) === 'Array';
    }

    return Array.isArray(obj);
  };

  _exports.isArray = isArray;
  var _default = isArray;
  _exports.default = _default;
});