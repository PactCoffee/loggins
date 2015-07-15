import React, {Component, cloneElement, PropTypes} from 'react';

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
    this.toggleShow = this.toggleShow.bind(this);
    this.listener = this.listener.bind(this);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.listener);
  }
  componentWillUnmount() {
    window.addEventListener('keydown', this.listener);
  }

  listener(e) {
    if (e.keyCode && e.keyCode === ESC) {
      this.setState({show: false});
    }
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

        {this.state.show ?
          <div className={s.dropdownOverlay} onClick={this.toggleShow}/>
          : null
        }
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

