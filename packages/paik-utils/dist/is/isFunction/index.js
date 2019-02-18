(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../../common/is"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../../common/is"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.is);
    global.index = mod.exports;
  }
})(this, function (_exports, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isFunction = void 0;
  _is = _interopRequireDefault(_is);

  /* eslint-disable */
  var isFunction = function isFunction(obj) {
    return (0, _is.default)(obj) === 'Function';
  };

  _exports.isFunction = isFunction;
  var _default = isFunction;
  _exports.default = _default;
});