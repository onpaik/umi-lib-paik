"use strict";

var _isReactComponent = _interopRequireDefault(require("./isReactComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isReactComponent', function () {
  test('normal', function () {
    expect((0, _isReactComponent.default)("() => {}")).toEqual(true);
    expect((0, _isReactComponent.default)("()  => {}")).toEqual(true);
    expect((0, _isReactComponent.default)("()=> {}")).toEqual(true);
    expect((0, _isReactComponent.default)("(props) => {}")).toEqual(true);
  });
});