import React, { Component, PropTypes } from 'react';

import SharedFormInput from './SharedFormInput';

export default class FormInput extends Component {
  focus() {
    return this.refs.focusable.focus();
  }
  blur() {
    return this.refs.focusable.blur();
  }
  render() {
    return (
      <SharedFormInput ref="focusable" {...this.props} />
    );
  }
}

FormInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,

  // A function called with the last character inputted. Whatever's returned is
  // then added to the input value
  transform: PropTypes.func,

  // If set, will display underneath the input
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),

  // If this input's value is required by the form
  required: PropTypes.bool,

  borderless: PropTypes.bool,
};
