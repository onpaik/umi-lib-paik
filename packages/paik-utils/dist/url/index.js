(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./getParam"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./getParam"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getParam);
    global.index = mod.exports;
  }
})(this, function (_exports, _getParam) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "getParam", {
    enumerable: true,
    get: function get() {
      return _getParam.getParam;
    }
  });
  Object.defineProperty(_exports, "getParams", {
    enumerable: true,
    get: function get() {
      return _getParam.getParams;
    }
  });
});