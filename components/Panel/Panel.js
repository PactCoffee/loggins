import React, { Component, PropTypes } from 'react';

import styles from './Panel.css';

const types = {
  info: styles.info,
  success: styles.success,
  error: styles.error,
};

export default class Panel extends Component {
  render() {
    const { squared, zeroPadding, type, style, children, className } = this.props;
    const classNames = [
      styles.root,
      squared ? styles.squared : null,
      zeroPadding ? styles.zeroPadding : null,
      types[type],
      className,
    ].join(' ');

    return (
      <div style={style} className={classNames}>
        {children}
      </div>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  squared: PropTypes.bool,
  zeroPadding: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.any,
};
