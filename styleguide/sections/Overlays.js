import React, {Component} from 'react';

import Section from '../components/Section';
import * as m from 'globals/modifiers.css';

import HoverCard from 'components/HoverCard/HoverCard';

export default class Overlays extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      showCard: false
    };
  }

  componentDidMount() {
    this.handleHover();
  }

  handleHover() {
    this.setState({
      showCard: true
    });
  }
  handleBlur() {
    this.setState({
      // showCard: false
    });
  }

  render() {
    return (
      <Section name="Overlays" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Overlays.js">

        <h3>HoverCard</h3>
        <div className={m.alignc}>
          <strong ref="anchor"
             onMouseOver={this.handleHover}
             onMouseLeave={this.handleBlur}
             variant="tooltip">
            Hover for tooltip!
          </strong>
        </div>
        {this.state.showCard ?
          <HoverCard container={this}
                     anchor={this.refs.anchor}
                     placement="bottom"
                     variant="tooltip">
            Some stuff inside hovercard!
          </HoverCard>
          : null
        }

      </Section>
    );
  }
}
