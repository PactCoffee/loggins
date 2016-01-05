import React, { PropTypes } from 'react';

import styles from './CTABlock.css';

export default class CTABlock {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.root}>
        {children}
      </div>
    );
  }
}

CTABlock.propTypes = {
  children: PropTypes.any,
};
