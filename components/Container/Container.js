import React, {Component} from 'react';

import styles from './Container.css';

export default class Container extends Component {
  render() {
    return (
      <div className={[styles.root, this.props.className].join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string
};
