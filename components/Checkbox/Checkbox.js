import React, { Component, PropTypes } from 'react';

import Icon from '../Icon/Icon';
import s from './Checkbox.css';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.id = `check-${Math.random() * new Date().getTime()}`;
    this.toggleChecked = this.toggleChecked.bind(this);
    this.state = {
      checked: props.checked || false,
    };
  }

  toggleChecked() {
    this.setState(state => (
      { checked: !state.checked }
    ), () => this.props.onChange(this.state.checked));
  }

  render() {
    const checkboxClasses = [
      s.root,
      this.props.className,
      this.state.checked ? s.isChecked : null,
    ].join(' ');

    return (
      <span className={checkboxClasses}>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.toggleChecked}
          name={this.props.name}
          id={this.id}
          className={s.input}
        />
        <label htmlFor={this.id} className={s.label}>{this.props.label}</label>
        <Icon className={s.tick} name="tick"/>
      </span>
    );
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};
