(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./sortTime"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./sortTime"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.sortTime);
    global.index = mod.exports;
  }
})(this, function (_exports, _sortTime) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "sortTime", {
    enumerable: true,
    get: function get() {
      return _sortTime.default;
    }
  });
  _exports.default = void 0;
  _sortTime = _interopRequireDefault(_sortTime);

  /* eslint-disable */
  var _default = _sortTime.default;
  _exports.default = _default;
});