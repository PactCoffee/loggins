import React, {Component, PropTypes} from 'react';
import {uniqueId} from 'lodash';

import css from './FormInput.css';

export default class FormInput extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      active: !!props.value,
      focus: false,
      id: uniqueId('forminput'),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.focus) {
      this.setState({
        active: nextProps.value && nextProps.value.length,
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
    const {error,
      onChange,
      value,
      type,
      label,
      placeholder,
      borderless
    } = this.props;
    const {active, focus, id} = this.state;
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
        <input
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className={css.input}
          onChange={onChange}
          value={value}
          id={id}
          type={type}
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

  placeholder: PropTypes.string,
  borderless: PropTypes.bool,

  // If set, will display underneath the input
  error: PropTypes.string,

};
