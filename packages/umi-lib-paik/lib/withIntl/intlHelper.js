"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIntlContext = createIntlContext;
exports.getIntlContext = getIntlContext;
exports.formatMessage = formatMessage;
exports.default = void 0;

var _reactIntl = require("react-intl");

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
exports.default = _default;