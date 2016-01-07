import React from 'react';
import { Router } from 'react-router';
import { createHashHistory } from 'history';

import routes from './routes';

React.render(
  <Router
    history={createHashHistory()}
    children={routes}
  />,
  document.getElementById('outlet'));
