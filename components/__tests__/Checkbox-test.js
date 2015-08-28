import React, {findDOMNode} from 'react';
import {
  renderIntoDocument,
  Simulate,
  findRenderedDOMComponentWithClass
} from 'react/lib/ReactTestUtils';

import Checkbox from '../Checkbox/Checkbox.js';
import classNames from '../Checkbox/Checkbox.css';

const getInputNode = (wrapper) => findDOMNode(
  findRenderedDOMComponentWithClass(wrapper, classNames.input)
);
const getLabelNode = (wrapper) => findDOMNode(
  findRenderedDOMComponentWithClass(wrapper, classNames.label)
);
const getIconNode = (wrapper) => findDOMNode(
  findRenderedDOMComponentWithClass(wrapper, classNames.tick)
);

describe('Checkbox', () => {

  it('Should output an input, label, and icon within a wrapper', () => {
    const instance = renderIntoDocument(
      <Checkbox/>
    );
    assert.equal(findDOMNode(instance).nodeName, 'SPAN');
    assert.equal(getInputNode(instance).nodeName, 'INPUT');
    assert.equal(getLabelNode(instance).nodeName, 'LABEL');
    assert.equal(getIconNode(instance).nodeName, 'SPAN');
  });

  it('Calls onChange when clicked');
  it('Is checked when the checked prop is true');
  it('Is not checked when the checked prop is false');
});
