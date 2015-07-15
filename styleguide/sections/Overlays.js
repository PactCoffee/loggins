import React, {Component} from 'react';

import Section from '../components/Section';

import TooltipToggle from 'components/TooltipToggle/TooltipToggle';
import DatePicker from 'components/DatePicker/DatePicker';
import Dropdown from 'components/Dropdown/Dropdown';
import Icon from 'components/Icon/Icon';
import Btn from 'components/Btn/Btn';

export default class Overlays extends Component {
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      date: new Date().getTime()
    };
  }

  handleDate(milliseconds) {
    this.setState({
      date: milliseconds
    });
  }

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
          Make sure the container has enough padding underneath, as the tooltip will move vertically to stay within the confines of the container.
        </p>

        <h3>Date picker</h3>
        <p>Used in combo with dropdown:</p>
        <Dropdown container={this} datepicker trigger={
          <Btn type="clear">Choose date <Icon name="triangle"/></Btn>
        }>
          <DatePicker value={this.state.date} onChange={this.handleDate}/>
        </Dropdown>

        <h3>Dropdown</h3>
        <p>
          Very similar to TooltipToggle, but the children prop is the content you want inside the dropdown, and you pass in a trigger to open and close the dropdown.
        </p>
        <div style={{textAlign: 'center'}}>
          <Dropdown container={this} trigger={
            <Btn>Toggle dropdown <Icon name="triangle"/></Btn>
          }>
            Some content inside the dropdown
          </Dropdown>
        </div>

      </Section>
    );
  }
}
