import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './routes';

ReactDOM.render(
  <Router
    history={hashHistory}
    children={routes}
  />,
  document.getElementById('outlet'));
