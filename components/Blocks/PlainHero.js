import React, { PropTypes, Component } from 'react';

import styles from './PlainHero.css';

export default class PlainHero extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.root}>
        {children}
      </div>
    );
  }
}

PlainHero.propTypes = {
  children: PropTypes.any,
};
