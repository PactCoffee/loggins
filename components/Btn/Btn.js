import styles from './Btn.css';

import React, {Component, PropTypes} from 'react';

const types = {
  primary: styles.primary,
  secondary: styles.secondary,
  warning: styles.warning
};

const variants = {
  cta: styles.cta
};

export default class Btn extends Component {
  render() {
    const classNames = [
      styles.root,
      types[this.props.type],
      this.props.variant ? variants[this.props.variant]:null
    ].join(' ');

    return (
      <button className={classNames}>{this.props.children}</button>
    );
  }
}

Btn.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string
};
