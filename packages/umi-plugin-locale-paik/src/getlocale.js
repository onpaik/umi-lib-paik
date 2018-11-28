import cookie from 'js-cookie';

const getLanguage = () => {
  const language = window.navigator.language;
  if (/^en/i.test(language)) {
    return 'en';
  }
  return language.replace('_', '-');
};

export function getLocale({
  defaultLocale = 'zh-CN',
  supportLocale = ['zh-CN', 'en'],
} = {}) {
  const locale = getLanguage();
  if (!locale || !supportLocale.includes(locale)) {
    return defaultLocale;
  }

  return locale;
}