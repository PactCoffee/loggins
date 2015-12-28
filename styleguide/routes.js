import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Styleguide from './Styleguide';

import Home from './sections/Home';
import Type from './sections/Type';
import Icons from './sections/Icons';
import Grids from './sections/Grids';
import Forms from './sections/Forms';
import Panels from './sections/Panels';
import Blocks from './sections/Blocks';
import Colours from './sections/Colours';
import Buttons from './sections/Buttons';
import Overlays from './sections/Overlays';

export default (
  <Route ignoreScrollBehavior path="/" component={Styleguide}>
    <IndexRoute component={Home}/>
    <Route path="type" component={Type}/>
    <Route path="grids" component={Grids}/>
    <Route path="blocks" component={Blocks}/>
    <Route path="forms" component={Forms}/>
    <Route path="overlays" component={Overlays}/>
    <Route path="panels" component={Panels}/>
    <Route path="colours" component={Colours}/>
    <Route path="buttons" component={Buttons}/>
    <Route path="icons" component={Icons}/>
  </Route>
);
