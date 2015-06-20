import React, {Component, PropTypes} from 'react';

import styles from './Slider.css';

export default class Slider extends Component {


  render() {
    return (
      // <p>hello world</p>
      <input
        className={styles.root}
        type="range"
        min = { this.props.min }
        max = { this.props.max }
        step = { this.props.step } /> // needs onInput
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};
