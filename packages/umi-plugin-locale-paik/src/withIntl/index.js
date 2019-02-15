import React from 'react';
import { IntlProvider } from 'react-intl';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';
import withInjectIntl from './injectIntl';
import getDisplayName from './getDisplayName';
import { createIntlContext, getIntlContext } from './intlHelper';
import { _setIntlObject } form 'umi/locale';
import toClass from './toClass';
import compose from './compose';
import parseArguments from './parseArguments/';
import fetchLocaleIntl from './fetchIntl/locale';
import fetchRemoteIntl from './fetchIntl/remote';

function withIntl(
  locale,
  page,
  userOptions = {
    withRef: false,
  },
) {
  const options = {
    withRef: false,
    intlUrl: undefined,
    host: undefined,
    resHandler: res => res,
    requestOptions: {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    },
    ...userOptions,
  }
  const { withRef, intlUrl, host, resHandler, requestOptions } = options;
  return WrappedComponent => {
    const baseComponent = withInjectIntl(WrappedComponent, options);
    const Component = withRef ? toClass(baseComponent) : baseComponent;

    class WithIntl extends React.Component {
      static displayName = `withIntl(${getDisplayName(Component)})`;

      constructor(props) {
        super(props);

        const translations = null;
        this.state = {
          translations,
        };
      }

      async componentDidMount() {
        const localeData = await (async ()=>{
          if(host && intlUrl) {
            const responseData = await fetchRemoteIntl(host, intlUrl,requestOptions).then(res => res.json());
            return resHandler(responseData)
          }
          return await fetchLocaleIntl(locale, page);
        })()
        if (!localeData) {
          this.setState({
            translations: null,
          });
          /* eslint-disable-next-line */
          console.error(`there is no ${page}.json in floder lang/${locale}/`);
        } else {
          const translations = Object.assign(
            {},
            this.props.intl.messages,
            localeData,
          );
          createIntlContext({
            locale,
            messages: translations,
          });
          /* 覆盖window全局的intl fix #1*/
          _setIntlObject(getIntlContext());
          
          this.setState({
            translations,
          });
        }
      }

      // getWrappedInstance调用时候返回ref="wrappedInstance"
      getWrappedInstance() {
        invariant(
          withRef,
          '[React] To access the wrapped instance, ' +
            'the `{withRef: true}` option must be set when calling: ' +
            '`withIntl()`',
        );
        return this._wrappedInstance;
      }

      render() {
        const { translations } = this.state;
        if (!translations) {
          return null;
        }
        return (
          <IntlProvider locale={locale} messages={translations}>
            <Component
              {...this.props}
              ref={ref => {
                this._wrappedInstance = withRef ? ref : null;
              }}
            />
          </IntlProvider>
        );
      }
    }
    hoistNonReactStatics(WithIntl, Component);
    return withInjectIntl(WithIntl, options);
  };
}

export default withIntl;

export {
  withIntl,
  compose,
  parseArguments,
}