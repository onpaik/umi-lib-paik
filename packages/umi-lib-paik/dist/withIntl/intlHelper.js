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

    var _intlProvider$getChil = intlProvider.getChildContext(),
        _intl = _intlProvider$getChil.intl;

    intl = _intl;
    return intl;
  }

  function getIntlContext() {
    return intl;
  }

  function formatMessage() {
    var _intl2;

    return (_intl2 = intl).formatMessage.apply(_intl2, arguments);
  }

  var _default = {
    createIntlContext: createIntlContext,
    getIntlContext: getIntlContext,
    formatMessage: formatMessage
  };
  _exports.default = _default;
});