import React, { PropTypes } from 'react';

import { title } from './Type.css';

export default class Title {
  render() {
    return (
      <h2 className={title}>{this.props.children}</h2>
    );
  }
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
};
