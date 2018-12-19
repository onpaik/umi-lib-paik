"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isReactComponent = _interopRequireDefault(require("./isReactComponent"));

describe('isReactComponent', function () {
  test('normal', function () {
    expect((0, _isReactComponent.default)("() => {}")).toEqual(true);
    expect((0, _isReactComponent.default)("()  => {}")).toEqual(true);
    expect((0, _isReactComponent.default)("()=> {}")).toEqual(true);
    expect((0, _isReactComponent.default)("(props) => {}")).toEqual(true);
  });
});