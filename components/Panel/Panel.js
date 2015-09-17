import React, {Component, PropTypes} from 'react';

import styles from './Panel.css';

const types = {
  info: styles.info,
  success: styles.success,
  error: styles.error,
};

export default class Panel extends Component {
  render() {
    const classNames = [
      styles.root,
      this.props.squared ? styles.squared : null,
      types[this.props.type],
      this.props.className,
    ].join(' ');

    return (
      <div style={this.props.style} className={classNames}>
        {this.props.children}
      </div>
    );
  }
}

Panel.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  type: PropTypes.string,
  squared: PropTypes.bool,
  className: PropTypes.string,
};
