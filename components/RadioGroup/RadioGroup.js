import React, {PropTypes} from 'react';

import Radio from './Radio';
import s from './Radio.css';

/*
 * Example usage:
 * <RadioGroup name="example"
 *             onChange={this.handleRadio}
 *             selectedValue={this.state.radioVal}>
 *   {radio => (
 *     <span>
 *       {radio({value: 'Apple'})}
 *       <br/>
 *       {radio({value: 'Orange'})}
 *       <br/>
 *       {radio({value: 'Banana'})}
 *     </span>
 *   )}
 * </RadioGroup>
 */

export default class RadioGroup {
  render() {
    let {name, selectedValue, onChange, children} = this.props;
    return (
      <div className={s.group}>
        {children && children(props => <Radio {...{name, selectedValue, onChange}} {...props} />
        )}
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
