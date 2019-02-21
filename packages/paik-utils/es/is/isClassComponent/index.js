define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.isClassComponent = void 0;

  var isClassComponent = function isClassComponent(Component) {
    return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');
  };

  _exports.isClassComponent = isClassComponent;
  var _default = isClassComponent;
  _exports.default = _default;
});