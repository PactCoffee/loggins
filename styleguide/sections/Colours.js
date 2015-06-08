import React, {Component} from 'react';
import Section from './Section';

import styles from '../styleguide.css';
import * as t from 'globals/typography.css';

export default class ColourSection extends Component {
  render() {

    const colours = [
      'green',
      'red',
      'orange',
      'grey',
      'greyLight',
      'brown',
      'brownDark',
      'white',
      'whiteDark'
    ];

    return (
      <Section name="Colours">
        {
          colours.map((colour, i) =>
            <div key={i} className={[styles.swatch, styles[colour], t.title].join(' ')}>
              <span>{colour}</span>
            </div>
          )
        }
      </Section>
    );
  }
}
