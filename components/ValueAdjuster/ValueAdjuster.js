import React, { PropTypes, Component } from 'react';

import Icon from '../Icon/Icon';
import ScreenReadable from '../ScreenReadable/ScreenReadable';

import css from './ValueAdjuster.css';

export default class ValueAdjuster extends Component {
  constructor(props) {
    super(props);
    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
  }

  getDisplayValue() {
    const {
      value,
      transformValue,
    } = this.props;

    if (transformValue && typeof transformValue === 'function') {
      return transformValue(value);
    }

    return value;
  }

  incrementValue(e) {
    e.preventDefault();

    const {
      value,
      changeAmount,
      max,
      onChange,
    } = this.props;
    const newValue = value + changeAmount;

    if (value < max) onChange(newValue);
  }

  decrementValue(e) {
    e.preventDefault();

    const {
      value,
      changeAmount,
      min,
      onChange,
    } = this.props;
    const newValue = value - changeAmount;

    if (value > min) onChange(newValue);
  }

  render() {
    const {
      changeAmount,
      value,
      min,
      max,
      className,
      btnClassName,
      disabled,
    } = this.props;

    return (
      <div className={[css.root, className].join(' ')}>
        <button type="button" className={[css.btn, btnClassName].join(' ')} onClick={this.decrementValue} disabled={disabled || value <= min}>
          <Icon name="minus" />
          <ScreenReadable>Decrease value by {changeAmount}</ScreenReadable>
        </button>
        <span className={css.value}>{this.getDisplayValue()}</span>
        <button type="button" className={[css.btn, btnClassName].join(' ')} onClick={this.incrementValue} disabled={disabled || value >= max}>
          <Icon name="plus" />
          <ScreenReadable>Increase value by {changeAmount}</ScreenReadable>
        </button>
      </div>
    );
  }
}

ValueAdjuster.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,

  min: PropTypes.number,
  max: PropTypes.number,
  transformValue: PropTypes.func,
  changeAmount: PropTypes.number,
  className: PropTypes.string,
  btnClassName: PropTypes.string,
  disabled: PropTypes.bool,
};

ValueAdjuster.defaultProps = {
  changeAmount: 1,
};
