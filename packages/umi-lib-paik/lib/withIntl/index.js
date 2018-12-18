"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withIntl;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _invariant = _interopRequireDefault(require("invariant"));

var _withInjectIntl = _interopRequireDefault(require("./withInjectIntl"));

var _getDisplayName = _interopRequireDefault(require("./getDisplayName"));

var _intlHelper = require("./intlHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _fetchIntl = function fetchIntl(locale, page, host) {
  return (0, _isomorphicFetch.default)("".concat(host, "lang/").concat(locale, "/").concat(page, ".json?_timestamp=").concat(Date.now()), {
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  });
};

function withIntl(locale, page, host) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    withRef: false
  };
  var withRef = options.withRef;
  return function (WrappedComponent) {
    var Component = (0, _withInjectIntl.default)(WrappedComponent, options);

    var WithIntl =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WithIntl, _React$Component);

      _createClass(WithIntl, null, [{
        key: "fetchIntl",
        value: function fetchIntl() {
          return _fetchIntl(locale, page, host);
        }
      }]);

      function WithIntl(props) {
        var _this;

        _classCallCheck(this, WithIntl);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithIntl).call(this, props));
        var translations = null;
        _this.state = {
          translations: translations
        };
        return _this;
      }

      _createClass(WithIntl, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          _fetchIntl(locale, page, host).then(function (localeData) {
            var translations = Object.assign({}, _this2.props.intl.messages, localeData);
            (0, _intlHelper.createIntlContext)({
              locale: locale,
              messages: translations
            });

            _this2.setState({
              translations: translations
            });
          }).catch(function (err) {
            return console.error(err);
          });
        } // getWrappedInstance调用时候返回我们的ref="wrappedInstance"

      }, {
        key: "getWrappedInstance",
        value: function getWrappedInstance() {
          (0, _invariant.default)(withRef, '[React] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`withIntl()`');
          return this._wrappedInstance;
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          var translations = this.state.translations;

          if (!translations) {
            return null;
          }

          return _react.default.createElement(_reactIntl.IntlProvider, {
            locale: locale,
            messages: translations
          }, _react.default.createElement(Component, _extends({}, this.props, {
            ref: function ref(_ref) {
              _this3._wrappedInstance = withRef ? _ref : null;
            }
          })));
        }
      }]);

      return WithIntl;
    }(_react.default.Component);

    _defineProperty(WithIntl, "displayName", "withIntl(".concat((0, _getDisplayName.default)(Component), ")"));

    (0, _hoistNonReactStatics.default)(WithIntl, Component);
    return (0, _withInjectIntl.default)(WithIntl, options);
  };
}