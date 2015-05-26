import styles from './Btn.css';

import React, { Component } from 'react';

export default class Btn extends Component {
  render() {
    return (
      <button className={styles.root}>{this.props.children}</button>
    );
  }
}

Btn.propTypes = {
  children: React.PropTypes.any
};
