import React, {PropTypes} from 'react';

import radioFactory from './radioFactory';
import s from './RadioGroup.css';

export default class RadioGroup {
  render() {
    let {name, selectedValue, onChange, children} = this.props;
    return (
      <div className={s.group}>
        {children && children(radioFactory(name, selectedValue, onChange))}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};
