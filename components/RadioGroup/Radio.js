import React, {PropTypes} from 'react';
import {uniqueId} from 'lodash';

import Icon from '../Icon/Icon';
import s from './Radio.css';

export default class Radio {
  constructor(props) {
    this.id = uniqueId('radio');
    this.renderValue = this.renderValue.bind(this);
  }
  renderValue() {
    const {children, value} = this.props;
    if (children) {
      return children;
    }
    return value
  }
  render() {
    const {
      name,
      value,
      tabbed,
      tabIcon,
      onChange,
      className,
      selectedValue,
    } = this.props;
    const isChecked = value === selectedValue;
    return (
      <span className={[s.child, className].join(' ')}>
        <input id={this.id}
               type="radio"
               className={tabbed ? s.tab : s.radio}
               checked={isChecked}
               name={name}
               value={value}
               onChange={() => this.props.onChange(this.props.value)} />
        <label htmlFor={this.id}
               className={tabbed ? s.tabLabel : s.radioLabel}>
          {tabbed ?
            <span>
              <Icon className={s.tabIcon} name={tabIcon}/>
              {value}
            </span>
            :
            this.renderValue()
          }
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
  tabbed: PropTypes.bool,
};
