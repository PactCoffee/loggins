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
      isLoading,
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
      <a {...this.props} className={classNames}>{children}</a>
      :
      <button {...this.props} className={classNames}>
        {isLoading ?
          'Saving...'
          :
          children
        }
      </button>
    );
  }
}

Btn.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'warning', 'clear', 'white']),
  variant: PropTypes.oneOf(['cta', 'hollow']),

  href: PropTypes.string,

  children: PropTypes.any,
  isLoading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string
};
