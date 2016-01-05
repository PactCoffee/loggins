import React, { findDOMNode, Component, cloneElement, PropTypes } from 'react';

import HoverCard from '../HoverCard/HoverCard';

export default class Dropdown extends Component {
  constructor(props, context) {
    super(props, context);

    this.hide = this.hide.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleCloseRequest = this.handleCloseRequest.bind(this);

    this.state = {
      show: false,
    };
  }

  hide() {
    this.setState({ show: false });
  }

  toggleShow() {
    this.setState(state => ({ show: !state.show }));
  }

  handleCloseRequest(e) {
    if (e.keyCode ||
        (e.target && !findDOMNode(this.refs.trigger).contains(e.target))) {
      this.hide();
    }
  }

  render() {
    const { container, placement, children, trigger } = this.props;
    const clonedTrigger = cloneElement(trigger, {
      onClick: this.toggleShow,
      ref: 'trigger',
    });

    return (
      <span>
        {this.state.show ?
          <HoverCard
            container={container}
            variant={'dropdown'}
            anchor={this.refs.trigger}
            anchorPadding={20}
            placement={placement}
            ref="hovercard"
            onRequestClose={this.handleCloseRequest}
            escListen
            caret
          >
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

  // The component to attach the toggle onClick to
  trigger: PropTypes.element.isRequired,

  // A container to render the inner HoverCard into (will use body if not passed)
  container: PropTypes.any,

  // Which side of the trigger we want the dropdown to render. The HoverCard
  // within will attempt alternative placements if the one designated doesnt fit
  placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),

  children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
  placement: 'bottom',
};
