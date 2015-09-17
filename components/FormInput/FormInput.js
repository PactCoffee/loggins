import React, {Component, PropTypes} from 'react';

import css from './FormInput.css';

export default class FormInput extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      active: !!props.value,
      focus: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.focus) {
      this.setState({
        active: nextProps.value.length,
      });
    }
  }

  handleFocus() {
    this.setState({
      focus: true,
      active: true,
    });
  }
  handleBlur() {
    this.setState({
      focus: false,
      active: !!this.props.value,
    });
  }

  render() {
    const outerCSS = [
      css.container,
      this.props.error ? css.containerError : null,
      this.state.active ? css.containerActive : null,
      this.state.focus ? css.containerFocus : null,
    ].join(' ');

    const messageCSS = [
      css.message,
      this.props.error ? css.messageError : null,
    ].join(' ');

    return (
      <div className={outerCSS}>
        <label className={css.label}>
          {this.props.label}
        </label>
        <input
          className={css.input}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.props.onChange}
          value={this.props.value}
          type={this.props.type}
        />
        <span className={messageCSS}>
          {this.props.error}
        </span>
      </div>
    );
  }
}

FormInput.propTypes = {

  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

  // If set, will display underneath the input
  error: PropTypes.string,
};
