"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withIntl = withIntl;
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function get() {
    return _compose.default;
  }
});
Object.defineProperty(exports, "parseArguments", {
  enumerable: true,
  get: function get() {
    return _parseArguments.default;
  }
});
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

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _invariant = _interopRequireDefault(require("invariant"));

var _injectIntl = _interopRequireDefault(require("./injectIntl"));

var _getDisplayName = _interopRequireDefault(require("./getDisplayName"));

var _intlHelper = require("./intlHelper");

var _toClass = _interopRequireDefault(require("./toClass"));

var _compose = _interopRequireDefault(require("./compose"));

var _parseArguments = _interopRequireDefault(require("./parseArguments/"));

var _locale = _interopRequireDefault(require("./fetchIntl/locale"));

var _remote = _interopRequireDefault(require("./fetchIntl/remote"));

function withIntl(locale, page) {
  var userOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    withRef: false
  };
  var options = (0, _objectSpread2.default)({
    withRef: false,
    intlUrl: undefined,
    host: undefined,
    resHandler: function resHandler(res) {
      return res;
    },
    requestOptions: {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    }
  }, userOptions);
  var withRef = options.withRef,
      intlUrl = options.intlUrl,
      host = options.host,
      resHandler = options.resHandler,
      requestOptions = options.requestOptions;
  return function (WrappedComponent) {
    var baseComponent = (0, _injectIntl.default)(WrappedComponent, options);
    var Component = withRef ? (0, _toClass.default)(baseComponent) : baseComponent;

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
          _regenerator.default.mark(function _callee2() {
            var localeData, translations;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee() {
                      var responseData;
                      return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (!(host && intlUrl)) {
                                _context.next = 5;
                                break;
                              }

                              _context.next = 3;
                              return (0, _remote.default)(host, intlUrl, requestOptions).then(function (res) {
                                return res.json();
                              });

                            case 3:
                              responseData = _context.sent;
                              return _context.abrupt("return", resHandler(responseData));

                            case 5:
                              _context.next = 7;
                              return (0, _locale.default)(locale, page);

                            case 7:
                              return _context.abrupt("return", _context.sent);

                            case 8:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }))();

                  case 2:
                    localeData = _context2.sent;

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
                      /* 覆盖window全局的intl fix #1*/

                      (0, _intlHelper._setIntlObject)((0, _intlHelper.getIntlContext)());
                      this.setState({
                        translations: translations
                      });
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function componentDidMount() {
            return _componentDidMount.apply(this, arguments);
          };
        }() // getWrappedInstance调用时候返回ref="wrappedInstance"

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
            ref: function ref(_ref2) {
              _this2._wrappedInstance = withRef ? _ref2 : null;
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