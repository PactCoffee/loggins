import React, { Component, PropTypes } from 'react';

import Icon from '../Icon/Icon';
import s from './Checkbox.css';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.id = `check-${Math.random() * new Date().getTime()}`;
  }

  render() {
    const {
      className,
      onChange,
      checked,
      label,
    } = this.props;
    const checkboxClasses = [
      s.root,
      className,
      checked ? s.isChecked : null,
    ].join(' ');

    return (
      <span className={checkboxClasses}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id={this.id}
          className={s.input}
        />
        <label htmlFor={this.id} className={s.label}>{label}</label>
        <Icon className={s.tick} name="tick"/>
      </span>
    );
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
};
