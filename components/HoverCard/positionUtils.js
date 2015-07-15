/* Pretty much ripped from react-bootstrap */
import React from 'react';

function ownerDocument(componentOrElement) {
  let elem = React.findDOMNode(componentOrElement);
  return (elem && elem.ownerDocument) || document;
}

function getComputedStyles(elem) {
  return ownerDocument(elem).defaultView.getComputedStyle(elem, null);
}

function getOffset(DOMNode) {
  let docElem = ownerDocument(DOMNode).documentElement;
  let box = {
    top: 0,
    left: 0
  };

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if (typeof DOMNode.getBoundingClientRect !== 'undefined') {
    box = DOMNode.getBoundingClientRect();
  }

  return {
    top: box.top + window.pageYOffset - docElem.clientTop,
    left: box.left + window.pageXOffset - docElem.clientLeft
  };
}

function offsetParentFunc(elem) {
  let docElem = ownerDocument(elem).documentElement;
  let offsetParent = elem.offsetParent || docElem;

  while (offsetParent && (offsetParent.nodeName !== 'HTML' &&
      getComputedStyles(offsetParent).position === 'static')) {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || docElem;
}

function getRelativePosition(elem, offsetParent) {
  let offset;
  let parentOffset = {
    top: 0,
    left: 0
  };

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
  if (getComputedStyles(elem).position === 'fixed') {
    // We assume that getBoundingClientRect is available when computed position is fixed
    offset = elem.getBoundingClientRect();

  } else {
    if (!offsetParent) {
      // Get *real* offsetParent
      offsetParent = offsetParentFunc(elem); // eslint-disable-line no-param-reassign
    }

    // Get correct offsets
    offset = getOffset(elem);
    if (offsetParent.nodeName !== 'HTML') {
      parentOffset = getOffset(offsetParent);
    }

    // Add offsetParent borders
    parentOffset.top += parseInt(getComputedStyles(offsetParent).borderTopWidth, 10);
    parentOffset.left += parseInt(getComputedStyles(offsetParent).borderLeftWidth, 10);
  }

  // Subtract parent offsets and element margins
  return {
    top: offset.top - parentOffset.top - parseInt(getComputedStyles(elem).marginTop, 10),
    left: offset.left - parentOffset.left - parseInt(getComputedStyles(elem).marginLeft, 10)
  };
}

export function getContainerDimensions(containerNode) {
  const width = containerNode.offsetWidth;
  const height = containerNode.offsetHeight;
  const scroll = containerNode.scrollTop;

  return {
    width, height, scroll
  };
}

function getTopDelta(top, overlayHeight, container, padding) {
  const containerDimensions = getContainerDimensions(container);
  const containerScroll = containerDimensions.scroll;
  const containerHeight = containerDimensions.height;

  const topEdgeOffset = top - padding - containerScroll;
  const bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  let topDelta;
  if (topEdgeOffset < 0) {
    topDelta = -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    topDelta = containerHeight - bottomEdgeOffset;
  } else {
    topDelta = 0;
  }

  return topDelta;
}

function getLeftDelta(left, overlayWidth, container, padding) {
  const containerDimensions = getContainerDimensions(container);
  const containerWidth = containerDimensions.width;

  const leftEdgeOffset = left - padding;
  const rightEdgeOffset = left + padding + overlayWidth;

  let leftDelta;
  if (leftEdgeOffset < 0) {
    leftDelta = -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    leftDelta = containerWidth - rightEdgeOffset;
  } else {
    leftDelta = 0;
  }
  return leftDelta;
}


export function getPosition(target, container) {
  const offset = container.tagName === 'BODY' ?
    getOffset(target) : getRelativePosition(target, container);

  return {
    ...offset, // eslint-disable-line object-shorthand
    height: target.offsetHeight,
    width: target.offsetWidth
  };
}

export function calcOverlayPosition(placement, overlayNode, target, container, padding) { // eslint-disable-line max-params
  const childOffset = getPosition(target, container);

  const overlayHeight = overlayNode.offsetHeight;
  const overlayWidth = overlayNode.offsetWidth;

  let positionLeft;
  let positionTop;
  let arrowOffsetLeft;
  let arrowOffsetTop;

  if (placement === 'left' || placement === 'right') {
    positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

    if (placement === 'left') {
      positionLeft = childOffset.left - overlayWidth;
    } else {
      positionLeft = childOffset.left + childOffset.width;
    }

    const topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

    positionTop += topDelta;
    arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
    arrowOffsetLeft = null;

  } else if (placement === 'top' || placement === 'bottom') {
    positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

    if (placement === 'top') {
      positionTop = childOffset.top - overlayHeight;
    } else {
      positionTop = childOffset.top + childOffset.height;
    }

    const leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
    positionLeft += leftDelta;
    arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
    arrowOffsetTop = null;
  } else {
    throw new Error(
      `calcOverlayPosition(): No such placement of "${placement }" found.`
    );
  }

  return {
    positionLeft, positionTop, arrowOffsetLeft, arrowOffsetTop
  };
}
