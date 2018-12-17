import React from 'react';
import { IntlProvider } from 'react-intl';
import fetch from 'isomorphic-fetch';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';
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
    withRef: false,
  }
) {
  const { withRef } = options;

  return WrappedComponent => {
    const Component = withInjectIntl(WrappedComponent, options);

    class WithIntl extends React.Component {
      static displayName = `withIntl(${getDisplayName(Component)})`;

      static fetchIntl() {
        return fetchIntl(locale, page, host);
      }

      constructor(props) {
        super(props);

        let translations = null;
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
          '[React] To access the wrapped instance, ' +
            'the `{withRef: true}` option must be set when calling: ' +
            '`withIntl()`'
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
