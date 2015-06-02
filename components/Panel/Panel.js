import React, {Component, PropTypes} from 'react';

import styles from './Panel.css';

export default class Panel extends Component {
  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}

Panel.propTypes = {
  children: PropTypes.any
};
