/* eslint react/no-multi-comp:0 */
import React, { Component, findDOMNode } from 'react';
import Section from '../components/Section';

import styles from '../styleguide.css';
import * as t from 'globals/typography.css';

class Swatch extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showInput: false,
    };
  }
  onBlur() {
    if (this.state.showInput) this.toggle();
  }
  onClick() {
    if (!this.state.showInput) {
      this.toggle(() =>
        findDOMNode(this.refs.val).setSelectionRange(0, 9999)
      );
    }
  }
  toggle(cb) {
    this.setState({
      showInput: !this.state.showInput,
    }, cb);
  }
  render() {
    const { colour } = this.props;
    const { showInput } = this.state;
    return (
      <button onBlur={this.onBlur} onClick={this.onClick} className={[styles.swatch, styles[colour], t.title].join(' ')}>
        {showInput ?
          <input ref="val" readOnly value={`var(--color-${colour})`}/>
          :
          <span>{colour}</span>
        }
      </button>
    );
  }
}
Swatch.propTypes = {
  colour: React.PropTypes.string.isRequired,
};

export default class Colours extends Component {
  render() {
    return (
      <Section name="Colours">
        <em>Click a swatch to show the variable name. You'll have to manually copy the text.</em>
        <h2>Primary palette</h2>
        {['primary',
          'secondary',
          'error',
          'alert',
          'text',
          'muted',
          ].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <h2>9 shades of grey</h2>
        {['white',
          'offwhite',
          'white-dark',
          'grey-lightest',
          'grey-lighter',
          'grey-light',
          'grey',
          'black',
          ].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <h2>Even moar colours</h2>
        {['green',
          'red',
          'orange',
          'brown',
          'brown-dark',
          ].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <h2>Various blues</h2>
        {['blue-muted',
          'blue-harsh',
          'blue',
          'blue-dark',
          'blue-darker',
          'steel',
          ].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <h2>Official™ Pact colour scheme</h2>
        {['teal',
          'maroon',
          'taupe',
          'yellow',
          'mauve',
          'copper',
          'pact',
          ].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <h2>Third parties</h2>
        {['twitter', 'facebook'].map((c, i) => <Swatch key={i} colour={c}/>)}
      </Section>
    );
  }
}
