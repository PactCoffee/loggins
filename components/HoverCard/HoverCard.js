import React, {Component, PropTypes, findDOMNode} from 'react';

import {ownerDocument, calcOverlayPosition} from './positionUtils';
import {mountable} from '../../lib/customPropTypes';
import keyCodes from '../../lib/keyCodes';
import Portal from '../Portal/Portal';
import s from './HoverCard.css';

const ESC = keyCodes.esc;

export default class HoverCard extends Component {

  constructor(props, context) {
    super(props, context);

    this.clickListener = this.clickListener.bind(this);
    this.keyListener = this.keyListener.bind(this);

    this.state = {
      placement: this.props.placement,
      positionLeft: null,
      positionTop: null,
      arrowOffsetLeft: null,
      arrowOffsetTop: null,
    };
  }

  componentWillMount() {
    this._needsFlush = true;
  }

  componentDidMount() {
    this._maybeUpdatePosition();
    window.addEventListener('keydown', this.keyListener);
    window.addEventListener('click', this.clickListener);
    window.addEventListener('touchend', this.clickListener);
  }

  componentWillReceiveProps() {
    this._needsFlush = true;
  }

  componentDidUpdate() {
    this._maybeUpdatePosition();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyListener);
    window.removeEventListener('click', this.clickListener);
    window.removeEventListener('touchend', this.clickListener);
  }

  clickListener(e) {
    if (!findDOMNode(this.refs.self).contains(e.target)) {
      this.props.onRequestClose(e);
    }
  }

  keyListener(e) {
    if (e.keyCode && e.keyCode === ESC && this.props.escListen) {
      this.props.onRequestClose(e);
    }
  }

  _maybeUpdatePosition() {
    if (this._needsFlush) {
      this._needsFlush = false;
      this._updatePosition();
    }
  }

  _updatePosition() {
    if (this.props.anchor === null) {
      return;
    }

    const {placement} = this.props;
    const hoverCard = findDOMNode(this.refs.self);
    const target = findDOMNode(this.props.anchor);
    const container = findDOMNode(this.props.container) || ownerDocument(this).body;


    // Starting with props.placement, try out each placement to find one
    // where this component will fit on the page best
    let idealPosition;
    let idealPlacement;
    const placements = ['top', 'left', 'bottom', 'right']
      .sort(function sort(a, b) {
        if (b === placement) return 1;
        return 0;
      });

    for (let i = 0; i < placements.length; i++) {
      idealPlacement = placements[i];
      idealPosition = calcOverlayPosition(
          idealPlacement,
          hoverCard,
          target,
          container,
          this.props.anchorPadding
        );

      const {positionLeft, positionTop} = idealPosition;
      const positionBottom = positionTop + hoverCard.offsetHeight;
      const positionRight = positionLeft + hoverCard.offsetWidth;

      if (
          // Not too far left
          positionLeft > -1 &&

          // Not too far up
          positionTop > -1 &&

          // Not too far down
          positionBottom <= container.offsetHeight &&

          // Not too far right
          positionRight <= container.offsetWidth
          ) {
        break;
      }
    }

    this.setState({
      placement: idealPlacement,
      ...idealPosition,
    });
  }

  render() {
    const {
      placement,
      positionLeft,
      positionTop,
      arrowOffsetLeft,
      arrowOffsetTop
    } = this.state;

    const {
      variant,
      caret,
    } = this.props;

    const css = [
      s.root,
      s[variant],
      s[placement],
    ].join(' ');

    const outerStyle = {
      left: positionLeft,
      top: positionTop,
    };

    const caretStyle = {
      left: arrowOffsetLeft,
      top: arrowOffsetTop,
    };

    return (
      <Portal container={this.props.container}>
        <div ref="self" style={outerStyle} className={css}>
          {caret ?
            <div style={caretStyle} className={s.caret}/>
            : null
          }
          <div className={s.inner}>
            {this.props.children}
          </div>
        </div>
      </Portal>
    );
  }
}

HoverCard.propTypes = {

  // The Component the HoverCard will be offset from. If not passed, will use
  // the document body
  container: PropTypes.any,

  // React Component to position the HoverCard relative to
  anchor: mountable,

  // Distance from the anchor in pixels
  anchorPadding: PropTypes.number,

  // Where to be positioned relative to the anchor
  placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),

  // Variant that maps to a CSS classname
  variant: PropTypes.oneOf(['tooltip', 'dropdown', 'datepicker']).isRequired,

  // Show a caret or not
  caret: PropTypes.bool,

  // Callback to call when clicking outside of this HoverCard
  onRequestClose: PropTypes.func,

  // Call onRequestClose when the user hits escape
  escListen: PropTypes.bool,

  children: PropTypes.any.isRequired,

  className: PropTypes.string,
};

HoverCard.defaultProps = {
  anchorPadding: 10,
  onRequestClose: () => {},
  escListen: false,
  caret: true,
};
