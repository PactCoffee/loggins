import styles from './Btn.css';

import React, {Component, PropTypes} from 'react';
import invariant from 'react/lib/invariant';

const types = {
  primary: styles.primary,
  secondary: styles.secondary,
  warning: styles.warning
};

const variants = {
  cta: styles.cta
};

export default class Btn extends Component {
  constructor(props) {
    super(props);
    invariant(
      types[props.type],
      `Btn: No type exists for "${props.type}". Choose from: ${Object.keys(types).join(', ')}`
    );
    if (props.variant) {
      invariant(
        variants[props.variant],
        `Btn: No variant exists for "${props.variant}". Choose from: ${Object.keys(variants).join(', ')}`
      );
    }
  }

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
