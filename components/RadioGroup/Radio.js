import React, {PropTypes} from 'react';

import s from './Radio.css';

export default class Radio {
  constructor(props) {
    this.id = `radioChild.${props.value.replace(' ', '-')}`;
  }
  render() {
    const isChecked = this.props.value === this.props.selectedValue;
    const css = [s.label, isChecked ? s.checked : null].join(' ');
    return (
      <span className={s.child}>
        <input {...this.props}
               id={this.id}
               type="radio"
               className={s.radio}
               checked={isChecked}
               name={this.props.name}
               onChange={() => this.props.onChange(this.props.value)} />
        <label htmlFor={this.id} className={css}>
          {this.props.value}
        </label>
      </span>
    );
  }
}

Radio.propTypes = {
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
