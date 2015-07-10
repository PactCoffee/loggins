import React, {PropTypes} from 'react';

import s from './RadioGroup.css';

export default function radioFactory(name, selectedValue, onChange) {
  class Radio {
    render() {
      const isChecked = this.props.value === selectedValue;
      const css = [s.label, isChecked ? s.checked : null].join(' ');
      return (
        <span className={s.child}>
          <input {...this.props}
                 className={s.radio}
                 type="radio"
                 name={name}
                 checked={isChecked}
                 onChange={onChange.bind(null, this.props.value)}/>
          <label className={css}>
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
