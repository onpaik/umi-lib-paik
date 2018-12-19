(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./isReactComponent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./isReactComponent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.isReactComponent);
    global.isReactComponentTest = mod.exports;
  }
})(this, function (_isReactComponent) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  _isReactComponent = _interopRequireDefault(_isReactComponent);
  describe('isReactComponent', function () {
    test('normal', function () {
      expect((0, _isReactComponent.default)("() => {}")).toEqual(true);
      expect((0, _isReactComponent.default)("()  => {}")).toEqual(true);
      expect((0, _isReactComponent.default)("()=> {}")).toEqual(true);
      expect((0, _isReactComponent.default)("(props) => {}")).toEqual(true);
    });
  });
});