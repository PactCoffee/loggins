import React, {Component, PropTypes} from 'react';

import styles from './Slider.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className={styles.root}
        type = "range"
        min = {this.props.min}
        max = {this.props.max}
        step = {this.props.step}
        onInput={this.props.onInput} />
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onInput: PropTypes.func
};
