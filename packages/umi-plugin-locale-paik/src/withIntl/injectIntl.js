import { injectIntl } from 'react-intl';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default function withInjectIntl(WrappedComponent, options) {
  const Component = injectIntl(WrappedComponent, options);
  hoistNonReactStatics(Component, WrappedComponent);
  return Component;
}
