import React, { Component } from 'react';

import Section from '../components/Section';

import TooltipToggle from 'components/TooltipToggle/TooltipToggle';
import Dropdown from 'components/Dropdown/Dropdown';
import * as m from 'globals/modifiers.css';
import Icon from 'components/Icon/Icon';
import Btn from 'components/Btn/Btn';

export default class Overlays extends Component {
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      date: new Date().getTime(),
    };
  }

  handleDate(milliseconds) {
    this.setState({
      date: milliseconds,
    });
  }

  render() {
    const tooltip = <TooltipToggle container={this} content="Hello from inside a tooltip!"><strong>these words</strong></TooltipToggle>;

    return (
      <Section name="Overlays" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Overlays.js">
        <h3>TooltipToggle</h3>
        <p>
          Try hovering over {tooltip}. The child passed into TooltipToggle must be a react element (i.e. can't just be a string).
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
          Remember though, that touch-screen devices can't hover (and tooltips are a terrible pattern for mobile), so use them sparingly.
        </p>

        <p>
          Make sure the container has enough padding underneath, as the tooltip will move vertically to stay within the confines of the container.
        </p>

        <h3>Dropdown</h3>
        <p>
          Very similar to TooltipToggle, but the children prop is the content you want inside the dropdown, and you pass in a trigger to open and close the dropdown.
        </p>
        <div style={{ textAlign: 'center' }}>
          <Dropdown
            trigger={
              <Btn className={m.mbs}>Toggle dropdown <Icon name="triangle"/></Btn>
            }
          >
            Some content inside the dropdown
          </Dropdown>

          <br/>

          <Dropdown
            placement="left"
            container={this}
            trigger={
              <Btn className={m.mbs}>Toggle left <Icon className={m.rotate90} name="triangle"/></Btn>
            }
          >
            Left!
          </Dropdown>

          <br/>

          <Dropdown
            placement="right"
            container={this}
            trigger={
              <Btn className={m.mbs}>Toggle right <Icon className={m.rotate270} name="triangle"/></Btn>
            }
          >
            Right!
          </Dropdown>

          <br/>

          <Dropdown
            placement="top"
            container={this}
            trigger={
              <Btn className={m.mbs}>Toggle top <Icon className={m.rotate180} name="triangle"/></Btn>
            }
          >
            Top!
          </Dropdown>
        </div>

        <p>
          All of the above components will render via a portal to the document body by default. An optional <code>container</code> can be passed in, which is a node to mount the component into.
        </p>

      </Section>
    );
  }
}
