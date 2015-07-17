import React, {findDOMNode, Component, cloneElement, PropTypes} from 'react';

import HoverCard from '../HoverCard/HoverCard';

export default class Dropdown extends Component {

  // TODO:
  // - Close on ESC
  // - Close when it's clicked away from

  constructor(props, context) {
    super(props, context);

    this.hide = this.hide.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleCloseRequest = this.handleCloseRequest.bind(this);

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

  render() {
    const {container, placement, children, trigger, datepicker} = this.props;
    const clonedTrigger = cloneElement(trigger, {
      onClick: this.toggleShow,
      ref: 'trigger'
    });

    return (
      <span>
        {this.state.show ?
          <HoverCard container={container}
                     variant={datepicker ? 'datepicker' : 'dropdown'}
                     anchor={this.refs.trigger}
                     anchorPadding={20}
                     placement={placement}
                     ref="hovercard"
                     onRequestClose={this.handleCloseRequest}
                     escListen={true}
                     caret={true}>
            {children}
          </HoverCard>
          : null
        }

        {clonedTrigger}
      </span>
    );
  }
}

Dropdown.propTypes = {
  trigger: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
  container: PropTypes.any,
  placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  datepicker: PropTypes.bool
};

Dropdown.defaultProps = {
  placement: 'bottom',
  datepicker: false
};

