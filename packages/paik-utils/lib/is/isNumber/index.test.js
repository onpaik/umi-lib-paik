"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./index"));

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