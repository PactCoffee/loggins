import React, {Component, PropTypes, findDOMNode} from 'react';

import {ownerDocument, calcOverlayPosition} from './positionUtils';
import s from './HoverCard.css';

export default class HoverCard extends Component {

  // TODO
  // - Listen for ESC
  // - Listen for clicks/taps outside of itself
  // - Detect if it's outside the viewport

  constructor(props, context) {
    super(props, context);

    this.state = {
      positionLeft: null,
      positionTop: null,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };
  }

  componentWillMount() {
    this._needsFlush = true;
  }

  componentWillReceiveProps() {
    this._needsFlush = true;
  }

  componentDidMount() {
    this._maybeUpdatePosition();
  }
  componentDidUpdate() {
    this._maybeUpdatePosition();
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

    let target = findDOMNode(this.props.anchor);
    let container = findDOMNode(this.props.container) || ownerDocument(this).body;

    // Store the val of calcOverlayPosition
    // Perform logic to make sure the HoverCard is contained within the window
    // If not, try alternative placements until it fits

    this.setState(
      calcOverlayPosition(
        this.props.placement,
        findDOMNode(this),
        target,
        container,
        this.props.anchorPadding
      )
    );
  }

  render() {
    const {
      positionLeft,
      positionTop,
      arrowOffsetLeft,
      arrowOffsetTop
    } = this.state;

    const {variant, placement, caret} = this.props;
    const css = [
      s.root,
      s[variant],
      s[placement]
    ].join(' ');

    const outerStyle = {
      left: positionLeft,
      top: positionTop
    };

    const caretStyle = {
      left: arrowOffsetLeft,
      top: arrowOffsetTop
    };

    return (
      <div style={outerStyle} className={css}>
        {caret ?
          <div style={caretStyle} className={s.caret}/>
          : null
        }
        <div className={s.inner}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mountable(props, propName, componentName) {
  if (typeof props[propName] !== 'object' ||
    typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
    return new Error(
      `Invalid prop of "${propName}" of value '${props[propName]}' supplied to '${componentName}. Expected a DOM element or an object that has a 'render' method`
    );
  }
}

HoverCard.propTypes = {

  // The Component the HoverCard will be offset from
  container: mountable,

  // React Component to position the HoverCard relative to
  anchor: mountable,

  // Distance from the anchor in pixels
  anchorPadding: PropTypes.number,

  // Where to be positioned relative to the anchor
  placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),

  // Variant that maps to a CSS classname
  variant: PropTypes.oneOf(['tooltip', 'dropdown']).isRequired,

  // Show a caret or not
  caret: PropTypes.bool,

  // Make the card change it's `placement` to fit inside the window
  // reposition: PropTypes.bool,

  children: PropTypes.any.isRequired
};

HoverCard.defaultProps = {
  anchorPadding: 10,
  caret: true
};
