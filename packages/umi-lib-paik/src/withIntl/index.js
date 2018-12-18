import React from 'react';
import { IntlProvider } from 'react-intl';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';
import withInjectIntl from './injectIntl';
import getDisplayName from './getDisplayName';
import { createIntlContext } from './intlHelper';

const fetchIntl = (locale, page) => import(`lang/${locale}/${page}.json`);

export default function withIntl(
  locale,
  page,
  options = {
    withRef: false,
  },
) {
  const { withRef } = options;

  return WrappedComponent => {
    const Component = withInjectIntl(WrappedComponent, options);

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
        const localeData = await fetchIntl(locale, page);
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

          this.setState({
            translations,
          });
        }
      }

      // getWrappedInstance调用时候返回我们的ref="wrappedInstance"
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
