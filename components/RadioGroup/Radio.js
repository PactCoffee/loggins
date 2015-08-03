import React, {PropTypes} from 'react';

import s from './Radio.css';

export default class Radio {
  constructor(props) {
    this.id = `radioChild.${props.value.replace(' ', '-')}.${new Date().getTime()}`;
  }
  render() {
    const {tabbed} = this.props;
    const isChecked = this.props.value === this.props.selectedValue;
    return (
      <span className={s.child}>
        <input id={this.id}
               type="radio"
               className={tabbed ? s.tab : s.radio}
               checked={isChecked}
               name={this.props.name}
               onChange={() => this.props.onChange(this.props.value)} />
        <label htmlFor={this.id}
               className={tabbed ? s.tabLabel : s.radioLabel}>
          {tabbed ?
            this.props.children
            :
            this.props.value
          }
        </label>
      </span>
    );
  }
}

Radio.propTypes = {
  tabbed: PropTypes.bool,
  children: PropTypes.any,
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
