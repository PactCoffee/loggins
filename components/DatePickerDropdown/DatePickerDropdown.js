import React, {findDOMNode, Component, cloneElement, PropTypes} from 'react';

import HoverCard from '../HoverCard/HoverCard';
import DatePicker from '../DatePicker/DatePicker';

export default class DatePickerDropdown extends Component {
  constructor(props) {
    super(props);

    this.hide = this.hide.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleCloseRequest = this.handleCloseRequest.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.state = {
      show: false
    };
  }

  hide() {
    this.setState({show: false});
  }

  toggleShow() {
    this.setState(state => ({show: !state.show}));
  }

  handleCloseRequest(e) {
    if (e.keyCode ||
        (e.target && !findDOMNode(this.refs.trigger).contains(e.target))) {
      this.hide();
    }
  }

  handleDateChange(ms) {
    this.props.onChange(ms);
    this.hide();
  }

  render() {
    const clonedTrigger = cloneElement(this.props.trigger, {
      onClick: this.toggleShow,
      ref: 'trigger'
    });

    return (
      <span>
        {this.state.show ?
          <HoverCard variant="datepicker"
                     anchor={this.refs.trigger}
                     anchorPadding={20}
                     placement="bottom"
                     ref="hovercard"
                     onRequestClose={this.handleCloseRequest}
                     escListen={true}
                     caret={true}>
            <DatePicker value={this.props.value}
                        onChange={this.handleDateChange}/>
          </HoverCard>
          : null
        }

        {clonedTrigger}
      </span>
    );
  }
}

DatePickerDropdown.propTypes = {
  trigger: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
