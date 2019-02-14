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
  _exports.default = _exports.isBoolean = void 0;

  var isBoolean = function isBoolean(obj) {
    return (0, _common.is)(obj) === 'Boolean';
  };

  _exports.isBoolean = isBoolean;
  var _default = isBoolean;
  _exports.default = _default;
});