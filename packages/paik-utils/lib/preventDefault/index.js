"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.preventDefault = void 0;

var preventDefault = function preventDefault(e) {
  var _e = e || window.event;

  _e.preventDefault ? _e.preventDefault() : _e.returnValue = false;
  _e.stopPropagation ? _e.stopPropagation() : _e.cancelBubble = true;
};

exports.preventDefault = preventDefault;
var _default = preventDefault;
exports.default = _default;