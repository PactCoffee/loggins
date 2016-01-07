import React, { Component, PropTypes } from 'react';

import css from './Btn.css';

export default class Btn extends Component {
  render() {
    const {
      active,
      children,
      className,
      fullWidth,
      context,
      variant,
      onClick,
      ...remainingProps,
    } = this.props;

    const classNames = [
      css.root,
      variant ? css[variant] : null,
      context ? css[context] : null,
      fullWidth ? css.fullWidth : null,
      active ? css.active : null,
      className,
    ].join(' ');

    return (
      <button
        className={classNames}
        onClick={onClick}
        {...remainingProps}
      >
        {children}
      </button>
    );
  }
}

Btn.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  context: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'whiteOut',
  ]),
  variant: PropTypes.oneOf([
    'hollow',
    'text',
  ]),
  onClick: PropTypes.func,
};
