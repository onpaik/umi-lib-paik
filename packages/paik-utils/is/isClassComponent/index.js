/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isClassComponent = void 0;

var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');
};

exports.isClassComponent = isClassComponent;
var _default = isClassComponent;
exports.default = _default;