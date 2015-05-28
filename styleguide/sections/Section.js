import React, {Component, PropTypes} from 'react';

import styles from '../styleguide.css';

export default class Section extends Component {
  render() {
    return (
      <section className={styles.section}>
        <h1 id={this.props.name} className={styles.title}>
          {this.props.name}
          {this.props.href ?
            <a className={styles.sectionLink} target="_blank" href={this.props.href}>View source</a>
            :null
          }
        </h1>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};
