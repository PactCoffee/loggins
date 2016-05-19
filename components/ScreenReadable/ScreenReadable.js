import React, { PropTypes, Component } from 'react';

import css from './ScreenReadable.css';

export default class ScreenReadable extends Component {
  render() {
    return (
      <span className={css.root}>{this.props.children}</span>
    );
  }
}

ScreenReadable.propTypes = {
  children: PropTypes.any.isRequired,
};
