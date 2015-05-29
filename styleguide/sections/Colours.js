import React, {Component} from 'react';
import Section from './Section';
import styles from '../styleguide.css';

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
          colours.map(colour =>
            <div className={styles.swatch + ' title ' + styles[colour]}>
              <span>{colour}</span>
            </div>
          )
        }
      </Section>
    );
  }
}
