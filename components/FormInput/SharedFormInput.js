import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { uniqueId } from 'lodash/utility';

// import MaskedInput from 'react-maskedinput/src/index.jsx';
import MaskedInput from 'react-maskedinput';

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
    return ReactDOM.findDOMNode(this.refs.focusable).focus();
  }
  blur() {
    return ReactDOM.findDOMNode(this.refs.focusable).blur();
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
      type,
      placeholder,
      borderless,
      required,
      pattern,
      masked,
      error,
      value,
      label,
      labelOutside,
      ...remainingProps,
    } = this.props;

    const { focus, id } = this.state;

    const hasValue = value && value.length > 0;
    const isOutsideVariant = labelOutside || !placeholder;
    const labelIsOutside = labelOutside || (hasValue && !placeholder);

    const outerCSS = [
      css.container,
      isOutsideVariant
        ? css.labelOutside
        : css.labelInside,
      labelIsOutside
        ? css.active
        : null,
      required
        ? css.required
        : null,
      error
        ? css.error
        : null,
      focus
        ? css.focus
        : null,
      borderless
        ? css.borderless
        : null,
    ].join(' ');

    const messageCSS = [
      css.message,
      error ? css.messageError : null,
    ].join(' ');

    return (
      <div className={outerCSS}>
        <div className={css.wrapper}>
          <label htmlFor={id} className={css.label}>
            {label}{required ? '*' : null}
          </label>
          {masked ?
            <MaskedInput
              {...remainingProps}
              type={type}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              className={css.input}
              onChange={this.handleChange}
              value={value}
              id={id}
              mask={pattern}
              placeholder={placeholder}
              ref="focusable"
            />
            :
              type === 'textarea' ?
                <textarea
                  {...remainingProps}
                  type={type}
                  placeholder={placeholder}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  className={css.input}
                  onChange={this.handleChange}
                  value={value}
                  id={id}
                  ref="focusable"
                />
              :
              <input
                {...remainingProps}
                type={type}
                placeholder={placeholder}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                className={css.input}
                onChange={this.handleChange}
                value={value}
                id={id}
                ref="focusable"
              />
          }
        </div>
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
  // Only required for masked
  pattern: PropTypes.string,

  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string,

  transform: PropTypes.func,
  borderless: PropTypes.bool,
  required: PropTypes.bool,
  labelOutside: PropTypes.bool,

  // If set, will display underneath the input
  error: PropTypes.string,
};

SharedFormInput.defaultProps = {
  labelOutside: false,
  masked: false,
};
