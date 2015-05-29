import React, {Component, PropTypes} from 'react';

import styles from './SectionTitle.css';

export default class SectionTitle extends Component {
  render() {
    const Tag = this.props.component || 'h1';
    return (
      <Tag className={styles.root + ' title'}>
        <span className={styles.inner}>{this.props.children}</span>
      </Tag>
    );
  }
}

SectionTitle.propTypes = {
  children: PropTypes.any,
  component: PropTypes.string
};
