import React, {Component, PropTypes} from 'react';

import styles from './CoffeeInfo.css';
import * as t from 'globals/typography.css';
import * as m from 'globals/modifiers.css';

export default class CoffeeInfo extends Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={[styles.row, styles.grid].join(' ')}>
          <div className={styles.half}>
            <p className={[t.title, m.small].join(' ')}>Origin</p>
            <p className={m.italic}>Columbia</p>
          </div>
          <div className={[styles.half, styles.quadrant].join(' ')}>
            <p className={[t.title, m.small, m.alignr].join(' ')}>Farm</p>
            <p className={[m.italic, m.alignr].join(' ')}>Eduardo de Leon Mazariegos</p>
          </div>
        </div>
        <div className={[styles.row, styles.grid].join(' ')}>
          <div className={styles.half}>
            <p className={[t.title, m.small].join(' ')}>Varietal</p>
            <p className={m.italic}>Bourbon</p>
          </div>
          <div className={styles.half}>
            <p className={[t.title, m.small, m.alignr].join(' ')}>Process</p>
            <p className={[m.italic, m.alignr].join(' ')}>Washed</p>
          </div>
        </div>

        <div className={styles.coffee}>
          <img className="image" src="https://lh5.googleusercontent.com/i5cHrkGFcf-zi3YVMNjlba9kn8fQIVASSayyuHpdGXOPQq7YwcOaySzos-ybnsyO6d-LedDoulsAAGQ=w2438-h1190" />
        </div>

      </div>
    );
  }
}

CoffeeInfo.propTypes = {
  // min: PropTypes.number.isRequired,
  // max: PropTypes.number.isRequired,
  // value: PropTypes.number.isRequied,
  // hueChange: PropTypes.bool
};

