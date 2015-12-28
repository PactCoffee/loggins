import React, { Component } from 'react';
import invariant from 'invariant';

import styles from './Icon.css';
import icons from './icons';


export default class Icon extends Component {
  constructor(props) {
    super(props);
    invariant(
      icons[props.name],
      `Icon(): No icon exists for "${props.name}"`
    );
  }
  render() {
    const css = [
      styles.root,
      styles[this.props.name],
      this.props.className || '',
    ].join(' ');

    return (
      <span
        {...this.props}
        className={css}
        dangerouslySetInnerHTML={{ __html: icons[this.props.name] }}
      />
    );
  }
}

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};
