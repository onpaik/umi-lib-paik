import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/jedi/workshop/an-github/umi-lib-paik/packages/umi-plugin-locale-paik/examples/base/src/page/.umi/LocaleWrapper.jsx'

let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../index.js').default
  },
  {
    "path": "/temp/message",
    "exact": true,
    "component": require('../temp/message/index.js').default
  },
  {
    "component": () => React.createElement(require('/Users/jedi/.config/yarn/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
