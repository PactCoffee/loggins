import React, {Component, PropTypes} from 'react';

import styles from './Panel.css';


const types = {
  info: styles.info,
  success: styles.success,
  error: styles.error
};

export default class Panel extends Component {
  render() {
    const classNames = [
      styles.root,
      types[this.props.type]
    ].join(' ');

    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    );
  }
}

Panel.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string
};
