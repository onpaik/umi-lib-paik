"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./index"));

describe('isUndefined should work fine', function () {
  it('should return true', function () {
    var obj = undefined;
    expect((0, _index.default)(obj)).toBeTruthy();
  });
  it('should return false', function () {
    var obj = [];
    expect((0, _index.default)(obj)).toBeFalsy();
  });
});