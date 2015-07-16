import React, {findDOMNode, Component, cloneElement, PropTypes} from 'react';

import {mountable} from '../../lib/customPropTypes';
import HoverCard from '../HoverCard/HoverCard';
import s from '../HoverCard/HoverCard.css';
import keyCodes from '../../lib/keyCodes';

const ESC = keyCodes.esc;

export default class Dropdown extends Component {

  // TODO:
  // - Close on ESC
  // - Close when it's clicked away from

  constructor(props, context) {
    super(props, context);

    this.hide = this.hide.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.keyListener = this.keyListener.bind(this);
    this.clickListener = this.clickListener.bind(this);

    this.state = {
      show: false
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyListener);
    window.addEventListener('click', this.clickListener);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyListener);
    window.removeEventListener('click', this.clickListener);
  }

  clickListener(e) {
    if (!findDOMNode(this).contains(e.target)) {
      this.hide();
    }
  }

  keyListener(e) {
    if (e.keyCode && e.keyCode === ESC) {
      this.hide();
    }
  }

  hide() {
    this.setState({show: false});
  }

  toggleShow() {
    this.setState(state => ({show: !state.show}));
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
  container: mountable,
  placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  datepicker: PropTypes.bool
};

Dropdown.defaultProps = {
  placement: 'bottom',
  datepicker: false
};

