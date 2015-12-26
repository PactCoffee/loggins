import React, { PropTypes } from 'react';

import styles from './PhotoHero.css';

export default class PhotoHero {
  render() {
    const { src, children } = this.props;
    return (
      <div
        className={styles.root}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className={styles.cover}/>
        {children}
      </div>
    );
  }
}

PhotoHero.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.any,
};
