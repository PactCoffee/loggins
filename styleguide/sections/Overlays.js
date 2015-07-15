import React, {Component} from 'react';

import Section from '../components/Section';

import TooltipToggle from 'components/TooltipToggle/TooltipToggle';

export default class Overlays extends Component {
  render() {

    const tooltip = <TooltipToggle container={this} content="Hello from inside a tooltip!"><strong>these words</strong></TooltipToggle>;

    return (
      <Section name="Overlays" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Overlays.js">

        <h3>TooltipToggle</h3>
        <p>
          Try hovering over {tooltip}. The child passed into TooltipToggle must be a react element. For this example, a strong is passed in.
        </p>

      </Section>
    );
  }
}
