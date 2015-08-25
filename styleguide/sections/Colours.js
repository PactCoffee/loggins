/*eslint react/no-multi-comp:0*/
import React, {Component} from 'react';
import Section from '../components/Section';

import styles from '../styleguide.css';
import * as t from 'globals/typography.css';

class Swatch {
  render() {
    const {i, colour} = this.props;
    return (
      <div key={i} className={[styles.swatch, styles[colour], t.title].join(' ')}>
        <span>{colour}</span>
      </div>
    );
  }
}
Swatch.propTypes = {
  color: React.PropTypes.string.isRequired,
  i: React.PropTypes.number.isRequired
};

export default class ColourSection extends Component {
  render() {
    return (
      <Section name="Colours">
        <p>The main palette we use:</p>
        {['primary',
          'secondary',
          'error',
          'alert',
          'text',
          'muted'].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <p>9 shades of grey:</p>
        {['white',
          'offwhite',
          'white-dark',
          'grey-lightest',
          'grey-lighter',
          'grey-light',
          'grey',
          'black'].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <p>Even more colours</p>
        {['green',
          'red',
          'orange',
          'brown',
          'brown-dark'].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <p>Various blues:</p>

        {['blue-muted',
          'blue-harsh',
          'blue',
          'blue-dark',
          'blue-darker',
          'steel'].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <p>Official™ Pact colour scheme:</p>
        {['teal',
          'maroon',
          'taupe',
          'yellow',
          'mauve',
          'copper',
          'pact'].map((c, i) => <Swatch key={i} colour={c}/>)
        }

        <p>Third parties:</p>
        {['twitter', 'facebook'].map((c, i) => <Swatch key={i} colour={c}/>)}
      </Section>
    );
  }
}
