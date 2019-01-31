(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/defineProperty", "react", "./getDisplayName", "./isClassComponent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/defineProperty"), require("react"), require("./getDisplayName"), require("./isClassComponent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.defineProperty, global.react, global.getDisplayName, global.isClassComponent);
    global.toClass = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _defineProperty2, _react, _getDisplayName, _isClassComponent) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireWildcard(_react);
  _getDisplayName = _interopRequireDefault(_getDisplayName);
  _isClassComponent = _interopRequireDefault(_isClassComponent);

  var toClass = function toClass(baseComponent) {
    var _class, _temp;

    return (0, _isClassComponent.default)(baseComponent) ? baseComponent : (_temp = _class =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(ToClass, _Component);

      function ToClass() {
        (0, _classCallCheck2.default)(this, ToClass);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ToClass).apply(this, arguments));
      }

      (0, _createClass2.default)(ToClass, [{
        key: "render",
        value: function render() {
          if (typeof baseComponent === 'string') {
            return _react.default.createElement(baseComponent, this.props);
          }

          return baseComponent(this.props, this.context);
        }
      }]);
      return ToClass;
    }(_react.Component), (0, _defineProperty2.default)(_class, "displayName", (0, _getDisplayName.default)(baseComponent)), (0, _defineProperty2.default)(_class, "propTypes", baseComponent.propTypes), (0, _defineProperty2.default)(_class, "contextTypes", baseComponent.contextTypes), (0, _defineProperty2.default)(_class, "defaultProps", baseComponent.defaultProps), _temp);
  };

  var _default = toClass;
  _exports.default = _default;
});