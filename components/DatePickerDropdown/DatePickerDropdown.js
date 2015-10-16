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
      show: false,
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
      ref: 'trigger',
      active: this.state.show,
    });
    const {value, container} = this.props;
    return (
      <span>
        {this.state.show ?
          <HoverCard variant="datepicker"
                     anchor={this.refs.trigger}
                     container={container}
                     anchorPadding={0}
                     placement="bottom"
                     ref="hovercard"
                     onRequestClose={this.handleCloseRequest}
                     escListen
                     caret={false}>
            <DatePicker value={value}
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
  container: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
