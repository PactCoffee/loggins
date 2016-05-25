import React, { Component, PropTypes } from 'react';

import SharedFormInput from '../FormInput/SharedFormInput';

export default class MaskedFormInput extends Component {
  focus() {
    return this.refs.focusable.focus();
  }
  blur() {
    return this.refs.focusable.blur();
  }
  render() {
    return (
      <SharedFormInput ref="focusable" masked {...this.props} />
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
  placeholder: PropTypes.string,

  transform: PropTypes.func,
  borderless: PropTypes.bool,

  // If set, will display underneath the input
  error: PropTypes.string,
  required: PropTypes.bool,
};
