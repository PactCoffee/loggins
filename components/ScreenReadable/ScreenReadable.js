import React, { PropTypes } from 'react';

import css from './ScreenReadable.css';

export default class ScreenReadable {
  render() {
    return (
      <span className={css.root}>{this.props.children}</span>
    );
  }
}

ScreenReadable.propTypes = {
  children: PropTypes.any.isRequired,
};
