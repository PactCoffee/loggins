import React, {Component, PropTypes} from 'react';
import {uniqueId} from 'lodash';

import MaskedInput from 'react-maskedinput/src/index.jsx';

import css from '../FormInput/FormInput.css';

export default class MaskedFormInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      focus: false,
      id: uniqueId('forminput'),
    };
  }

  handleFocus() {
    const {onFocus} = this.props;
    this.setState({
      focus: true,
    }, () => onFocus && onFocus());
  }

  handleBlur() {
    const {onBlur} = this.props;
    this.setState({
      focus: false,
    }, () => onBlur && onBlur());
  }

  handleChange(e) {
    const {onChange} = this.props;
    const {value} = e.target;
    onChange(value);
  }

  render() {
    const {
      placeholder,
      borderless,
      error,
      value,
      label,
      type,
      pattern,
    } = this.props;
    const {focus, id} = this.state;

    const active = value && !!value.length;

    const outerCSS = [
      css.container,
      placeholder ? css.labelInside : css.labelOutside,
      error ? css.containerError : null,
      active ? css.containerActive : null,
      focus ? css.containerFocus : null,
      borderless ? css.borderless : null,
    ].join(' ');

    const messageCSS = [
      css.message,
      error ? css.messageError : null,
    ].join(' ');

    return (
      <div className={outerCSS}>
        <label htmlFor={id} className={css.label}>
          {label}
        </label>
        <MaskedInput
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className={css.input}
          onChange={this.handleChange}
          value={value}
          id={id}
          type={type}
          pattern={pattern}
          placeholder={placeholder}
        />
        <span className={messageCSS}>
          {this.props.error}
        </span>
      </div>
    );
  }
}

MaskedFormInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,

  placeholder: PropTypes.string,
  borderless: PropTypes.bool,

  // If set, will display underneath the input
  error: PropTypes.string,
};
