import React, {PropTypes} from 'react';
import ReactSlider from 'react-slider';
// https://github.com/mpowaga/react-slider

import styles from './Slider.css';

export default class Slider {
  render() {
    return (
      <ReactSlider withBars
                   className={styles.slider}
                   barClassName={styles.bar}
                   handleClassName={styles.handle}
                   handleActiveClassName={styles.activeHandle}
                   {...this.props}/>
    );
  }
}

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number
};
