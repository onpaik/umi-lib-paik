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
  _exports.default = _exports.preventDefault = void 0;

  /* eslint-disable */
  var preventDefault = function preventDefault(e) {
    var _e = e || window.event;

    _e.preventDefault ? _e.preventDefault() : _e.returnValue = false;
    _e.stopPropagation ? _e.stopPropagation() : _e.cancelBubble = true;
  };

  _exports.preventDefault = preventDefault;
  var _default = preventDefault;
  _exports.default = _default;
});