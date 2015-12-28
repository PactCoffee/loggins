import React, { PropTypes } from 'react';
import { uniqueId } from 'lodash/utility';

import css from './Radio.css';

export default class Radio {
  constructor() {
    this.state = {
      id: uniqueId('radio'),
    };
  }

  render() {
    const {
      name,
      value,
      onChange,
      className,
      selectedValue,
      children,
    } = this.props;
    const { id } = this.state;
    const isChecked = value === selectedValue;
    return (
      <span className={[css.radio, className].join(' ')}>
        <input
          id={id}
          type="radio"
          checked={isChecked}
          name={name}
          value={value}
          onChange={() => onChange(this.props.value)}
        />
        <label htmlFor={id}>
          {children ? children : value}
        </label>
      </span>
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  // The value of the parent group
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  // The value of this radio
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  className: PropTypes.string,
  children: PropTypes.any,
};
