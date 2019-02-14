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
  describe('isNumber should work fine', function () {
    it('should return true', function () {
      var obj1 = 2323;
      var obj2 = 2323.23;
      expect((0, _index.default)(obj1)).toBeTruthy();
      expect((0, _index.default)(obj2)).toBeTruthy();
    });
    it('should return false', function () {
      var obj = {};
      expect((0, _index.default)(obj)).toBeFalsy();
    });
  });
});