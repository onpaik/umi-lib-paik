
import { addLocaleData, IntlProvider, injectIntl } from 'react-intl';
import { _setIntlObject } from 'umi/locale';

const InjectedWrapper = injectIntl(function ComponentWrapper(props) {
  _setIntlObject(props.intl);
  return props.children;
})

import 'moment/locale/en-nz';
import 'moment/locale/zh-cn';
import 'moment/locale/zh-cn';
import 'moment/locale/en-nz';

const baseNavigator = true;
const useLocalStorage = true;

import { LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
const defaultAntd = require('antd/lib/locale-provider/');

const localeInfo = {
  'en-US': {
    messages: {
      ...require('/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/locale/en-US.js').default,...require('/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/page/temp/locale/en-US.js').default,
    },
    locale: 'en-US',
    antd: require('antd/lib/locale-provider/en_US'),
    data: require('react-intl/locale-data/en'),
    momentLocale: 'en-nz',
  },
  'zh-CN': {
    messages: {
      ...require('/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/locale/zh-CN.js').default,...require('/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/page/temp/locale/zh-CN.js').default,
    },
    locale: 'zh-CN',
    antd: require('antd/lib/locale-provider/zh_CN'),
    data: require('react-intl/locale-data/zh'),
    momentLocale: 'zh-cn',
  },
  'zh': {
    messages: {
      ...require('/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/locale/zh-CN.js').default,...require('/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/page/temp/locale/zh-CN.js').default,
    },
    locale: 'zh',
    antd: require('antd/lib/locale-provider/zh_CN'),
    data: require('react-intl/locale-data/zh'),
    momentLocale: 'zh-cn',
  },
  'en': {
    messages: {
      ...require('/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/locale/en-US.js').default,...require('/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/page/temp/locale/en-US.js').default,
    },
    locale: 'en',
    antd: require('antd/lib/locale-provider/en_US'),
    data: require('react-intl/locale-data/en'),
    momentLocale: 'en-nz',
  },
};

let appLocale = {
  locale: 'zh',
  messages: {},
  data: require('react-intl/locale-data/zh'),
  momentLocale: 'zh-cn',
};
if (useLocalStorage && localStorage.getItem('umi_locale') && localeInfo[localStorage.getItem('umi_locale')]) {
  appLocale = localeInfo[localStorage.getItem('umi_locale')];
} else if (localeInfo[navigator.language] && baseNavigator){
  appLocale = localeInfo[navigator.language];
} else {
  appLocale = localeInfo['zh'] || appLocale;
}
window.g_lang = appLocale.locale;
appLocale.data && addLocaleData(appLocale.data);

export default function LocaleWrapper(props) {
  let ret = props.children;
  ret = (<IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
    <InjectedWrapper>{ret}</InjectedWrapper>
  </IntlProvider>)
  ret = (<LocaleProvider locale={appLocale.antd || defaultAntd}>
    {ret}
  </LocaleProvider>);
  return ret;
}
