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
    global.getDisplayName = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getDisplayName = getDisplayName;
  _exports.default = void 0;

  function getDisplayName(Component) {
    if (typeof Component === 'string') {
      return Component;
    }

    if (!Component) {
      return undefined;
    }

    return Component.displayName || Component.name || 'Component';
  }

  var _default = getDisplayName;
  _exports.default = _default;
});