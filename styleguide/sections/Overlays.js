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
        <p>
          A TooltipToggle has four possible placements:&nbsp;
          <TooltipToggle container={this} content="the human">
            <strong>top (default)</strong>
          </TooltipToggle>,&nbsp;
          <TooltipToggle container={this} placement="left" content="torch was">
            <strong>left</strong>
          </TooltipToggle>,&nbsp;
          <TooltipToggle container={this} placement="bottom" content="denied a">
            <strong>bottom</strong>
          </TooltipToggle>,&nbsp; and&nbsp;
          <TooltipToggle container={this} placement="right" content="bank loan">
            <strong>right</strong>
          </TooltipToggle>.
        </p>

        <p>
          You need to be careful with the containers passed-in as well. If they're too short the tooltip will clip.
        </p>

      </Section>
    );
  }
}
