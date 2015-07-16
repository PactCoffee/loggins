import React, {Component, PropTypes, findDOMNode} from 'react';

import {ownerDocument, calcOverlayPosition} from './positionUtils';
import {mountable} from '../../lib/customPropTypes';
import Portal from '../Portal/Portal';
import s from './HoverCard.css';

export default class HoverCard extends Component {

  // TODO
  // - Detect if it's outside the viewport

  constructor(props, context) {
    super(props, context);

    this.state = {
      placement: this.props.placement,
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

    const {placement} = this.props;
    let target = findDOMNode(this.props.anchor);
    let container = findDOMNode(this.props.container) || ownerDocument(this).body;


    // Starting with the props.placement, try out each placement to find one
    // where the
    let idealPosition;
    let idealPlacement;
    let placements = ['top', 'left', 'bottom', 'right']
      .sort(function(a, b) {
        if (b === placement) return 1;
        return 0;
      });

    for (let i = 0; i < placements.length; i++) {
      idealPlacement = placements[i];
      idealPosition = calcOverlayPosition(
          idealPlacement,
          findDOMNode(this.refs.self),
          target,
          container,
          this.props.anchorPadding
        );
      if (idealPosition.positionLeft > -1 && idealPosition.positionTop > -1) {
        break;
      }
    }

    this.setState({
      placement: idealPlacement,
      ...idealPosition
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
      caret
    } = this.props;

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

  // The Component the HoverCard will be offset from
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

  // Make the card change it's `placement` to fit inside the window
  // reposition: PropTypes.bool,

  children: PropTypes.any.isRequired
};

HoverCard.defaultProps = {
  anchorPadding: 10,
  caret: true
};
