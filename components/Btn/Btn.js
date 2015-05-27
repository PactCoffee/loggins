import styles from './Btn.css';

import React, {Component} from 'react';

export default class Btn extends Component {
  render() {

    const classNames = [
      styles.root,
      this.props.primary ? styles.primary:null,
      this.props.secondary ? styles.secondary:null,
      this.props.warning ? styles.warning:null
    ].join(' ');

    return (
      <button className={classNames}>{this.props.children}</button>
    );
  }
}

Btn.propTypes = {
  children: React.PropTypes.any,
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  warning: React.PropTypes.bool
};
