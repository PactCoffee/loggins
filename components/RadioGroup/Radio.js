import React, {PropTypes} from 'react';
import {uniqueId} from 'lodash';

import Icon from '../Icon/Icon';
import s from './Radio.css';

export default class Radio {
  constructor(props) {
    this.id = uniqueId('radio');
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
               name={this.props.name}
               onChange={() => this.props.onChange(this.props.value)} />
        <label htmlFor={this.id}
               className={tabbed ? s.tabLabel : s.radioLabel}>
          {tabbed ?
            <span>
              <Icon className={s.tabIcon} name={tabIcon}/>
              {value}
            </span>
            :
            value
          }
        </label>
      </span>
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  children: PropTypes.any,
  tabbed: PropTypes.bool,
};
