import React, { PropTypes } from 'react';

import Panel from '../Panel/Panel';
import css from './Form.css';

export default class FieldGroup {
  render() {
    const { title, children, className } = this.props;
    return (
      <fieldset className={[css.fieldset, className].join(' ')}>
        <legend className={css.legend}>{title}</legend>
        <Panel squared zeroPadding className={css.panel}>
          {children}
        </Panel>
      </fieldset>
    );
  }
}

FieldGroup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
