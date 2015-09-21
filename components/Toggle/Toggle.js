import React, {Component, PropTypes} from 'react';

import s from './Toggle.css';

export default class Toggle extends Component {
  render() {
    const {value, onChange, className} = this.props;
    const isOn = value === true;
    return (
      <span className={[s.root, className].join(' ')}>
        <label className={[s.label, isOn ? s.isOn : null].join(' ')}>
          <input
            type="checkbox"
            checked={value}
            onChange={onChange}
            className={s.input}
          />
          <span className={s.circle}/>
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
