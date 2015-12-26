import React, { Component } from 'react';

import styles from './Wrapper.css';

export default class Wrap extends Component {
  render() {
    return (
      <div className={[styles.root, this.props.className].join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

Wrap.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
};
