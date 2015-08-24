import styles from './Btn.css';

import React, {Component, PropTypes} from 'react';

export default class Btn extends Component {
  render() {
    const {type, variant, fullWidth, className} = this.props;
    const classNames = [
      styles.root,
      styles[type],
      styles[variant],
      variant ? styles[variant] : null,
      fullWidth ? styles.fullWidth : null,
      className
    ].join(' ');

    return (
      <button {...this.props} className={classNames}>
        {this.props.isLoading ?
          {this.props.isLoading}
          :
          this.props.children
        }
      </button>
    );
  }
}

Btn.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'warning', 'clear', 'white']),
  variant: PropTypes.oneOf(['cta', 'hollow']),

  children: PropTypes.any,
  isLoading: PropTypes.string,
  fullWidth: PropTypes.bool,
  className: PropTypes.string
};
