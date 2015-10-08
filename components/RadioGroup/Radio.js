import React, {PropTypes} from 'react';
import {uniqueId} from 'lodash';

import * as m from '../../globals/modifiers.css';
import Icon from '../Icon/Icon';
import s from './Radio.css';

export default class Radio {
  constructor() {
    this.renderValue = this.renderValue.bind(this);
    this.state = {
      id: uniqueId('radio'),
    };
  }
  renderValue() {
    const {giant, icon, children, value} = this.props;
    if (giant) {
      return (
        <span className={s.iconOuter}>
          <span className={s.iconInner}>
            <Icon className={s.icon} name={icon || 'tick'}/>
          </span>
          <span className={m.db}>{value}</span>
        </span>
      );
    }
    if (children) {
      return children;
    }
    return value;
  }
  render() {
    const {
      name,
      value,
      onChange,
      className,
      selectedValue,
    } = this.props;
    const {id} = this.state;
    const isChecked = value === selectedValue;
    return (
      <span className={[s.child, className].join(' ')}>
        <input id={id}
               type="radio"
               className={s.radio}
               checked={isChecked}
               name={name}
               value={value}
               onChange={() => onChange(this.props.value)} />
        <label htmlFor={id}
               className={s.radioLabel}>
          {this.renderValue()}
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

  giant: PropTypes.bool,
  icon: PropTypes.string,
};
