define(["exports", "react", "react-intl", "hoist-non-react-statics", "invariant", "./injectIntl", "./getDisplayName", "./intlHelper"], function (_exports, _react, _reactIntl, _hoistNonReactStatics, _invariant, _injectIntl, _getDisplayName, _intlHelper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.withIntl = withIntl;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _hoistNonReactStatics = _interopRequireDefault(_hoistNonReactStatics);
  _invariant = _interopRequireDefault(_invariant);
  _injectIntl = _interopRequireDefault(_injectIntl);
  _getDisplayName = _interopRequireDefault(_getDisplayName);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        _inherits(WithIntl, _React$Component);

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
          value: function () {
            var _componentDidMount = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var localeData, translations;
              return regeneratorRuntime.wrap(function _callee$(_context) {
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
            }, _react.default.createElement(Component, _extends({}, this.props, {
              ref: function ref(_ref) {
                _this2._wrappedInstance = withRef ? _ref : null;
              }
            })));
          }
        }]);

        return WithIntl;
      }(_react.default.Component);

      _defineProperty(WithIntl, "displayName", "withIntl(".concat((0, _getDisplayName.default)(Component), ")"));

      (0, _hoistNonReactStatics.default)(WithIntl, Component);
      return (0, _injectIntl.default)(WithIntl, options);
    };
  }

  var _default = withIntl;
  _exports.default = _default;
});