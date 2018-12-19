define(["./isReactComponent"], function (_isReactComponent) {
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