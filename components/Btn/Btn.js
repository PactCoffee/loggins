import styles from './Btn.css';

import React, {Component, PropTypes} from 'react';

export default class Btn extends Component {
  render() {
    const {
      href,
      type,
      variant,
      fullWidth,
      className,
      disabled,
      children
    } = this.props;

    const classNames = [
      styles.root,
      styles[type],
      styles[variant],
      variant ? styles[variant] : null,
      fullWidth ? styles.fullWidth : null,
      className
    ].join(' ');

    return (
      href ?
      <a disabled={disabled} href={href} className={classNames}>{children}</a>
      :
      <button disabled={disabled} className={classNames}>
        {children}
      </button>
    );
  }
}

Btn.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'warning', 'clear', 'white']),
  variant: PropTypes.oneOf(['cta', 'hollow']),

  href: PropTypes.string,
  disabled: PropTypes.bool,

  children: PropTypes.any,
  fullWidth: PropTypes.bool,
  className: PropTypes.string
};
