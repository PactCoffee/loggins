import React, {PropTypes} from 'react';
import invariant from 'react/lib/invariant';

import styles from './Logo.css';

export default class Logo {
  constructor(props) {
    invariant(
      props.size === 'large' ||
      props.size === 'medium' ||
      props.size === 'small',
      `Logo(...): You must supply a valid size: large/medium/small`
    );
    invariant(
      props.type === 'horizontal' ||
      props.type === 'vertical',
      `Logo(...): You must supply a valid type: horizontal/vertical`
    );
  }

  render() {
    const {type, size} = this.props;
    const cssClasses = [
      styles.logo,
      styles[size],
      styles[type]
    ];

    return (
      <div className={[styles.root, this.props.className].join(' ')}>
        <span className={cssClasses.join(' ')}/>
      </div>
    );
  }
}

Logo.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string
};
