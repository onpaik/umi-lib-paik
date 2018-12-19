(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/defineProperty", "react", "react-intl", "hoist-non-react-statics", "invariant", "./injectIntl", "./getDisplayName", "./intlHelper"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/defineProperty"), require("react"), require("react-intl"), require("hoist-non-react-statics"), require("invariant"), require("./injectIntl"), require("./getDisplayName"), require("./intlHelper"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.regenerator, global.asyncToGenerator, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.defineProperty, global.react, global.reactIntl, global.hoistNonReactStatics, global.invariant, global.injectIntl, global.getDisplayName, global.intlHelper);
    global.index = mod.exports;
  }
})(this, function (_exports, _extends2, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _defineProperty2, _react, _reactIntl, _hoistNonReactStatics, _invariant, _injectIntl, _getDisplayName, _intlHelper) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.withIntl = withIntl;
  _exports.default = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireDefault(_react);
  _hoistNonReactStatics = _interopRequireDefault(_hoistNonReactStatics);
  _invariant = _interopRequireDefault(_invariant);
  _injectIntl = _interopRequireDefault(_injectIntl);
  _getDisplayName = _interopRequireDefault(_getDisplayName);

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
  _exports.default = _default;
});