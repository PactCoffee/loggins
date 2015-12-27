import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createHashHistory } from 'history';

import routes from './routes';

render(
  <Router
    history={createHashHistory()}
    children={routes}
  />,
  document.getElementById('outlet')
);
