define(["exports"], function (_exports) {
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
    api.addHTMLHeadScript(function () {
      return option;
    });
  }
});