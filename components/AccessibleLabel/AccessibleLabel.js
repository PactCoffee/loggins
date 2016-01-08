import React, { PropTypes } from 'react';

import css from './AccessibleLabel.css';

export default class AccessibleLabel {
  render() {
    return (
      <span className={css.root}>{this.props.children}</span>
    );
  }
}

AccessibleLabel.propTypes = {
  children: PropTypes.any.isRequired,
};
