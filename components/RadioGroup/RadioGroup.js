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
      tabIcon,
      tabbed,
      name,
    } = this.props;
    return (
      <div className={[tabbed ? s.tabs : s.group, className].join(' ')}>
        {children && children(props =>
          <Radio name={name}
                 tabbed={tabbed}
                 tabIcon={tabIcon}
                 selectedValue={value}
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
  tabbed: PropTypes.bool,
  tabIcon: PropTypes.string,
};
