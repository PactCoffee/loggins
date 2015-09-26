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
    const {
      value,
      className,
      onChange,
      children,
      giant,
      name,
    } = this.props;
    return (
      <div className={[giant ? s.giant : s.group, className].join(' ')}>
        {children && children(props =>
          <Radio name={name}
                 selectedValue={value}
                 giant={giant}
                 onChange={onChange} {...props} />
        )}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  giant: PropTypes.bool,
};
