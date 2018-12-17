import { IntlProvider } from 'react-intl';

let intl = null;

export function createIntlContext({ locale = 'zh-CN', messages = {} }) {
  const intlProvider = new IntlProvider({ locale, messages });
  intl = intlProvider.getChildContext().intl;
  return intl;
}

export function getIntlContext() {
  return intl;
}

export function formatMessage(...args) {
  return intl.formatMessage.apply(intl, args);
}

export default {
  createIntlContext,
  getIntlContext,
  formatMessage,
};
