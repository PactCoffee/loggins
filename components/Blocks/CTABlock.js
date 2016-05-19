import React, { PropTypes, Component } from 'react';

import styles from './CTABlock.css';

export default class CTABlock extends Component {
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
