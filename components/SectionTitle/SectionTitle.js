import React, { Component, PropTypes } from 'react';

import styles from './SectionTitle.css';
import * as t from '../../globals/typography.css';

export default class SectionTitle extends Component {
  render() {
    const Tag = this.props.component || 'h1';
    return (
      <Tag className={[styles.root, t.title].join(' ')}>
        <span className={styles.inner}>{this.props.children}</span>
      </Tag>
    );
  }
}

SectionTitle.propTypes = {
  children: PropTypes.any,
  component: PropTypes.string,
};
