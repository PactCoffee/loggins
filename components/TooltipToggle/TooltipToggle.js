import React, { Component, cloneElement, PropTypes } from 'react';
import { debounce } from 'lodash';

import { mountable } from '../../util/customPropTypes';
import HoverCard from '../HoverCard/HoverCard';

export default class TooltipToggle extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHover = debounce(this.handleHover.bind(this), 100);
    this.handleBlur = debounce(this.handleBlur.bind(this), 100);

    this.state = {
      show: false,
    };
  }

  handleHover() {
    this.setState({
      show: true,
    });
  }
  handleBlur() {
    this.setState({
      show: false,
    });
  }

  render() {
    const { container, content, placement, children } = this.props;
    const trigger = cloneElement(React.Children.only(children), {
      onMouseOver: this.handleHover,
      onFocus: this.handleHover,
      onMouseOut: this.handleBlur,
      onBlur: this.handleBlur,
      ref: 'anchor',
    });
    return (
      <span>
        {trigger}
        {this.state.show ?
          <HoverCard
            container={container}
            variant="tooltip"
            anchor={this.refs.anchor}
            anchorPading={10}
            placement={placement}
            caret
          >
            {content}
          </HoverCard>
          : null
        }
      </span>
    );
  }
}

TooltipToggle.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.element.isRequired,
  container: mountable,
  placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
};

TooltipToggle.defaultProps = {
  placement: 'top',
};
