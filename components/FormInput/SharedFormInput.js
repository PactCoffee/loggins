import React, { Component, PropTypes, findDOMNode } from 'react';
import { uniqueId } from 'lodash/utility';

import MaskedInput from 'react-maskedinput/src/index.jsx';

import css from './FormInput.css';

export default class SharedFormInput extends Component {
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

  focus() {
    return findDOMNode(this.refs.focusable).focus();
  }
  blur() {
    return findDOMNode(this.refs.focusable).blur();
  }


  handleFocus() {
    const { onFocus } = this.props;
    this.setState({
      focus: true,
    }, () => onFocus && onFocus());
  }

  handleBlur() {
    const { onBlur } = this.props;
    this.setState({
      focus: false,
    }, () => onBlur && onBlur());
  }

  handleChange(e) {
    const { onChange, transform } = this.props;
    let { value } = e.target;
    if (transform) {
      value = transform(value);
    }
    onChange(value);
  }

  render() {
    const {
      placeholder,
      borderless,
      required,
      pattern,
      masked,
      error,
      value,
      label,
      type,
    } = this.props;
    const { focus, id } = this.state;

    const active = value && !!value.length;
    const isInsideVariant = !!placeholder;

    const outerCSS = [
      css.container,
      required ? css.required : null,
      isInsideVariant ? css.labelInside : css.labelOutside,
      error ? css.error : null,
      active ? css.active : null,
      focus ? css.focus : null,
      borderless ? css.borderless : null,
    ].join(' ');

    const messageCSS = [
      css.message,
      error ? css.messageError : null,
    ].join(' ');

    return (
      <div className={outerCSS}>
        <label htmlFor={id} className={css.label}>
          {label}{required ? '*' : null}
        </label>
        {masked ?
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
            ref="focusable"
          />
          :
          <input
            placeholder={placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            className={css.input}
            onChange={this.handleChange}
            value={value}
            id={id}
            type={type}
            ref="focusable"
          />

        }
        <span className={messageCSS}>
          {this.props.error}
        </span>
      </div>
    );
  }
}

SharedFormInput.propTypes = {
  // Render a MaskedInput or not
  masked: PropTypes.bool.isRequired,

  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  placeholder: PropTypes.string,

  transform: PropTypes.func,
  borderless: PropTypes.bool,
  required: PropTypes.bool,

  // If set, will display underneath the input
  error: PropTypes.string,
};
