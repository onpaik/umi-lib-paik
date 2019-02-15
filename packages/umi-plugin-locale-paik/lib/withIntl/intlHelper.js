"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIntlContext = createIntlContext;
exports._setIntlObject = _setIntlObject;
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

  var _intlProvider$getChil = intlProvider.getChildContext(),
      _intl = _intlProvider$getChil.intl;

  intl = _intl;
  return intl;
}

function _setIntlObject(theIntl) {
  intl = theIntl;
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
  formatMessage: formatMessage,
  _setIntlObject: _setIntlObject
};
exports.default = _default;