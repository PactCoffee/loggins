import React, { PropTypes } from 'react';

import styles from './Logo.css';

export default class Logo {
  render() {
    const { type, size } = this.props;
    const cssClasses = [
      styles.logo,
      styles[size],
      styles[type],
    ];

    return (
      <div className={[styles.root, this.props.className].join(' ')}>
        <span className={cssClasses.join(' ')}/>
      </div>
    );
  }
}

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  type: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  className: PropTypes.string,
};
