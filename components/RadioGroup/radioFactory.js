import React, {PropTypes} from 'react';

import s from './Radio.css';

export default function radioFactory(name, selectedValue, onChange) {
  class Radio {
    constructor() {
      this.id = `radioChild.${new Date().getTime()}`;
    }
    render() {
      const isChecked = this.props.value === selectedValue;
      const css = [s.label, isChecked ? s.checked : null].join(' ');
      return (
        <span className={s.child}>
          <input {...this.props}
                 className={s.radio}
                 type="radio"
                 name={name}
                 id={this.id}
                 defaultChecked={isChecked}
                 onChange={onChange.bind(null, this.props.value)}/>
          <label htmlFor={this.id} className={css}>
            {this.props.value}
          </label>
        </span>
      );
    }
  }
  Radio.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  return Radio;
}
