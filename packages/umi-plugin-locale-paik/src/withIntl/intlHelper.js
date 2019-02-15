import { IntlProvider } from 'react-intl';

let intl = null;

export function createIntlContext({ locale = 'zh-CN', messages = {} }) {
  const intlProvider = new IntlProvider({ locale, messages });
  const { intl: _intl } = intlProvider.getChildContext();
  intl = _intl;
  return intl;
}

export function _setIntlObject(theIntl) {
  intl = theIntl;
}
export function getIntlContext() {
  return intl;
}

export function formatMessage(...args) {
  return intl.formatMessage(...args);
}

export default {
  createIntlContext,
  getIntlContext,
  formatMessage,
  _setIntlObject,
};
