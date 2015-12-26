import React, { PropTypes } from 'react';
import ReactSlider from 'react-slider';
// https://github.com/mpowaga/react-slider

import styles from './Slider.css';

const BAR_CLASS_NAME = 'SliderBar';

export default class Slider {
  constructor() {
    this.generateTicks = this.generateTicks.bind(this);
  }
  generateTicks() {
    const { ticks, min, max } = this.props;
    const tickStep = (max - min) / ticks;
    const allTicks = Array
      .apply(null, { length: ticks + 1 })
      .map((u, i) => Math.floor(min + (tickStep * i)));
    return allTicks;
  }
  render() {
    const { ticks } = this.props;
    return (
      <div>
        {ticks ?
          <div className={styles.tickContainer}>
            <span className={styles.ticks}>
              {this.generateTicks().map((tick, i, arr) =>
                <span
                  key={i}
                  className={styles.tick}
                  style={{ left: `${(100 / (arr.length - 1)) * i}%` }}
                >
                  {tick}
                </span>
              )}
            </span>
          </div>
          : null
        }
        <ReactSlider
          withBars
          className={styles.slider}
          barClassName={BAR_CLASS_NAME}
          handleClassName={styles.handle}
          handleActiveClassName={styles.activeHandle}
          {...this.props}
        />
      </div>
    );
  }
}

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  ticks: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
};
