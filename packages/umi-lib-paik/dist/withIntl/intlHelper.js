(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-intl"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-intl"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactIntl);
    global.intlHelper = mod.exports;
  }
})(this, function (_exports, _reactIntl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createIntlContext = createIntlContext;
  _exports.getIntlContext = getIntlContext;
  _exports.formatMessage = formatMessage;
  _exports.default = void 0;
  var intl = null;

  function createIntlContext(_ref) {
    var _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? 'zh-CN' : _ref$locale,
        _ref$messages = _ref.messages,
        messages = _ref$messages === void 0 ? {} : _ref$messages;
    var intlProvider = new _reactIntl.IntlProvider({
      locale: locale,
      messages: messages
    });
    intl = intlProvider.getChildContext().intl;
    return intl;
  }

  function getIntlContext() {
    return intl;
  }

  function formatMessage() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return intl.formatMessage.apply(intl, args);
  }

  var _default = {
    createIntlContext: createIntlContext,
    getIntlContext: getIntlContext,
    formatMessage: formatMessage
  };
  _exports.default = _default;
});