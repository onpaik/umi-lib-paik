(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./timeInterval"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./timeInterval"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.timeInterval);
    global.index = mod.exports;
  }
})(this, function (_exports, _timeInterval) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "timeInterval", {
    enumerable: true,
    get: function get() {
      return _timeInterval.default;
    }
  });
  _exports.default = void 0;
  _timeInterval = _interopRequireDefault(_timeInterval);
  var _default = {
    timeInterval: _timeInterval.default
  };
  _exports.default = _default;
});