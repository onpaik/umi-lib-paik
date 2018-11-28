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
    global.links = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(api, option) {
    api.onOptionChange(function (newOption) {
      option = newOption;
      api.rebuildHTML();
      api.refreshBrowser();
    });
    api.addHTMLLink(function () {
      return option;
    });
  }
});