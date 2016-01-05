import React, { PropTypes } from 'react';

import css from './Form.css';

export default class Field {
  render() {
    const { children, className } = this.props;
    return (
      <div className={[css.field, className].join(' ')}>
        {children}
      </div>
    );
  }
}

Field.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
