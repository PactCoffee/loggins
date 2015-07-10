import React, {Component, PropTypes} from 'react';

import radioFactory from './radioFactory';
import s from './Radio.css';

export default class RadioGroup extends Component {
  shouldComponentUpdate() {
    // Stop react from ripping out the DOM in the radio children.
    // https://github.com/chenglou/react-radio-group/issues/12
    return false;
  }
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
