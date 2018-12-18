(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./withIntl"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./withIntl"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.withIntl);
    global.index = mod.exports;
  }
})(this, function (_exports, _withIntl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "withIntl", {
    enumerable: true,
    get: function get() {
      return _withIntl.default;
    }
  });
  _exports.default = void 0;
  _withIntl = _interopRequireDefault(_withIntl);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = {
    withIntl: _withIntl.default
  };
  _exports.default = _default;
});