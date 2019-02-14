"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./index"));

describe('isArray should work fine', function () {
  it('should return true', function () {
    var obj = [];
    expect((0, _index.default)(obj)).toBeTruthy();
  });
  it('should return false', function () {
    var obj = {};
    expect((0, _index.default)(obj)).toBeFalsy();
  });
});