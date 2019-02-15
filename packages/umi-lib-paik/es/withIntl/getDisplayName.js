define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = getDisplayName;

  function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
  }
});