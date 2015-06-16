import React, {Component, PropTypes} from 'react';

import styles from './Progress.css';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles(width) {
    if (!this.props.hueChange) {
      return null;
    }

    let type;
    switch (true) {
      case width > (100 / 3) * 2:
        type = styles.isSuccess;
        break;
      case width > 100 / 3:
        type = styles.isWarning;
        break;
      case width > 0:
        type = styles.isError;
        break;
      default:
        type = null;
    }
    return type;
  }

  render() {
    const width = (this.props.value / (this.props.max - this.props.min)) * 100;

    return (
      <div className={styles.root}>
        <div
          className={[styles.bar, this.getStyles(width)].join(' ')}
          style={{width: `${width}%`}}
          />
      </div>
    );
  }
}

Progress.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequied,
  hueChange: PropTypes.bool
};

