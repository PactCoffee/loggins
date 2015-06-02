import React, {Component, PropTypes} from 'react';

import styles from './List.css';

export default class List extends Component {
  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}

List.propTypes = {
  children: PropTypes.any
};
