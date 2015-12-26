import React, { Component, PropTypes } from 'react';

import css from './Toggle.css';

export default class Toggle extends Component {
  render() {
    const { value, onChange, className } = this.props;
    return (
      <span className={[css.root, className].join(' ')}>
        <label className={[css.label, value ? css.isOn : null].join(' ')}>
          <input
            type="checkbox"
            checked={value}
            onChange={onChange}
            className={css.input}
          />
          <span className={css.circle}/>
        </label>
      </span>
    );
  }
}

Toggle.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
