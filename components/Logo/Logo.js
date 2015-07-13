import React, {PropTypes} from 'react';
import invariant from 'react/lib/invariant';

import styles from './Logo.css';
import vertical from './VerticalLogo.svg';
import horizontal from './HorizontalLogo.svg';

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

    const svg = type === 'vertical' ? vertical : horizontal;
    const cssClasses = [
      styles.root,
      styles[size],
      styles[type],
      this.props.className
    ];

    return (
      <span className={cssClasses.join(' ')}
        dangerouslySetInnerHTML={{__html: svg}}
      />
    );
  }
}

Logo.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string
};
