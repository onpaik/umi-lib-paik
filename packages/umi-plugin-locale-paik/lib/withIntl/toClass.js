"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = _interopRequireDefault(require("./getDisplayName"));

var _isClassComponent = _interopRequireDefault(require("./isClassComponent"));

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
exports.default = _default;