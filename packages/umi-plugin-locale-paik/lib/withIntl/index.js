"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withIntl = withIntl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _invariant = _interopRequireDefault(require("invariant"));

var _injectIntl = _interopRequireDefault(require("./injectIntl"));

var _getDisplayName = _interopRequireDefault(require("./getDisplayName"));

var _intlHelper = require("./intlHelper");

var fetchIntl = function fetchIntl(locale, page) {
  return import("lang/".concat(locale, "/").concat(page, ".json"));
};

function withIntl(locale, page) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    withRef: false
  };
  var withRef = options.withRef;
  return function (WrappedComponent) {
    var Component = (0, _injectIntl.default)(WrappedComponent, options);

    var WithIntl =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithIntl, _React$Component);

      function WithIntl(props) {
        var _this;

        (0, _classCallCheck2.default)(this, WithIntl);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithIntl).call(this, props));
        var translations = null;
        _this.state = {
          translations: translations
        };
        return _this;
      }

      (0, _createClass2.default)(WithIntl, [{
        key: "componentDidMount",
        value: function () {
          var _componentDidMount = (0, _asyncToGenerator2.default)(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee() {
            var localeData, translations;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetchIntl(locale, page);

                  case 2:
                    localeData = _context.sent;

                    if (!localeData) {
                      this.setState({
                        translations: null
                      });
                      /* eslint-disable-next-line */

                      console.error("there is no ".concat(page, ".json in floder lang/").concat(locale, "/"));
                    } else {
                      translations = Object.assign({}, this.props.intl.messages, localeData);
                      (0, _intlHelper.createIntlContext)({
                        locale: locale,
                        messages: translations
                      });
                      this.setState({
                        translations: translations
                      });
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function componentDidMount() {
            return _componentDidMount.apply(this, arguments);
          };
        }() // getWrappedInstance调用时候返回我们的ref="wrappedInstance"

      }, {
        key: "getWrappedInstance",
        value: function getWrappedInstance() {
          (0, _invariant.default)(withRef, '[React] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`withIntl()`');
          return this._wrappedInstance;
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var translations = this.state.translations;

          if (!translations) {
            return null;
          }

          return _react.default.createElement(_reactIntl.IntlProvider, {
            locale: locale,
            messages: translations
          }, _react.default.createElement(Component, (0, _extends2.default)({}, this.props, {
            ref: function ref(_ref) {
              _this2._wrappedInstance = withRef ? _ref : null;
            }
          })));
        }
      }]);
      return WithIntl;
    }(_react.default.Component);

    (0, _defineProperty2.default)(WithIntl, "displayName", "withIntl(".concat((0, _getDisplayName.default)(Component), ")"));
    (0, _hoistNonReactStatics.default)(WithIntl, Component);
    return (0, _injectIntl.default)(WithIntl, options);
  };
}

var _default = withIntl;
exports.default = _default;