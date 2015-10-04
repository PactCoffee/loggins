import React from 'react';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes';

React.render(
  <Router
    history={createBrowserHistory()}
    children={routes}
  />,
  document.getElementById('outlet'));
