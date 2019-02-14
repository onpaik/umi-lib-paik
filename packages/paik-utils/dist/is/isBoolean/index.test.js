(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.indexTest = mod.exports;
  }
})(this, function (_index) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  _index = _interopRequireDefault(_index);
  describe('isBoolean should work fine', function () {
    it('should return true', function () {
      var obj = true;
      expect((0, _index.default)(obj)).toBeTruthy();
    });
    it('should return false', function () {
      var obj = {};
      expect((0, _index.default)(obj)).toBeFalsy();
    });
  });
});