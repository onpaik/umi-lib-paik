"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(api, option) {
  api.onOptionChange(function (newOption) {
    option = newOption;
    api.rebuildHTML();
    api.refreshBrowser();
  });
  api.addHTMLScript(function () {
    return option;
  });
}