import React from 'react';
import { IntlProvider } from 'react-intl';
import fetch from 'isomorphic-fetch';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';
import BaseComponent from './BaseComponent';
import withInjectIntl from './withInjectIntl';
import getDisplayName from './getDisplayName';
import { createIntlContext } from './intlHelper';

const fetchIntl = (locale, page, host) =>
  fetch(`${host}lang/${locale}/${page}.json?_timestamp=${Date.now()}`, {
    credentials: 'include',
  }).then(res => res.json());

export default function withIntl(
  locale,
  page,
  host,
  options = {
    // 为WrappedComponent添加一个ref属性
    withRef: false,
  }
) {
  const { withRef } = options;

  return WrappedComponent => {
    const isServer = isServerSide();

    // 为WrappedComponent包裹injectIntl
    // 可在WrappedComponent中使用this.props.intl
    const Component = withInjectIntl(WrappedComponent, options);

    class WithIntl extends BaseComponent {
      static displayName = `withIntl(${getDisplayName(Component)})`;

      static fetchIntl() {
        return fetchIntl(locale, page, host);
      }

      constructor(props) {
        super(props);

        let translations = null;

        if (isServer) {
          translations = Object.assign(
            {},
            props.intl.messages,
            // props.staticContext是从服务端渲染传过来的
            props.staticContext.localeData
          );

          createIntlContext({
            locale,
            messages: translations,
          });
        }

        this.state = {
          translations,
        };
      }

      componentDidMount() {
        fetchIntl(locale, page, host)
          .then(localeData => {
            const translations = Object.assign(
              {},
              this.props.intl.messages,
              localeData
            );

            createIntlContext({
              locale,
              messages: translations,
            });

            this.setState({
              translations,
            });
          })
          .catch(err => console.error(err));
      }

      // getWrappedInstance调用时候返回我们的ref="wrappedInstance"
      getWrappedInstance() {
        invariant(
          withRef,
          '[React kryfe-lib] To access the wrapped instance, ' +
            'the `{withRef: true}` option must be set when calling: ' +
            '`withIntl()`'
        );

        return this._wrappedInstance;
      }

      render() {
        const { translations } = this.state;

        // 如果没获取到当前page的语言包，劫持当前渲染
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

    // 为WithIntl再包裹一次injectIntl
    // 为了在当前高阶组件中使用this.props.intl获取顶层IntlProvider传递的intl
    return withInjectIntl(WithIntl, options);
  };
}
