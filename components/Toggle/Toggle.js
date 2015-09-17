import React, {Component, PropTypes} from 'react';

import s from './Toggle.css';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.onChange(!this.props.value);
  }
  render() {
    const isOn = this.props.value === true;
    return (
      <span className={[s.root, this.props.className].join(' ')}>
        <label className={[s.label, isOn ? s.isOn : null].join(' ')}>
          <input
            type="checkbox"
            checked={this.props.value}
            onChange={this.handleChange}
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
