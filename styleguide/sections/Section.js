import React, {Component, PropTypes} from 'react';

import styles from '../styleguide.css';

export default class Section extends Component {
  render() {
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>{this.props.name}</h1>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};
