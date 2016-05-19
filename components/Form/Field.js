import React, { PropTypes, Component } from 'react';

import css from './Form.css';

export default class Field extends Component {
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
