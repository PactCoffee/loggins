import React, { PropTypes } from 'react';

import css from './BtnContainer.css';

export default class BtnContainer {
  render() {
    const { children, className, ...props } = this.props;

    return (
      <button {...props} className={[css.root, className].join(' ')}>
        {children}
      </button>
    );
  }
}

BtnContainer.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};
