import React, { findDOMNode } from 'react';
import {
  renderIntoDocument,
  Simulate,
  findRenderedDOMComponentWithClass,
} from 'react/lib/ReactTestUtils';

import Toggle from '../Toggle/Toggle.js';
import classNames from '../Toggle/Toggle.css';

const getInputNode = (wrapper) => findDOMNode(
  findRenderedDOMComponentWithClass(wrapper, classNames.input)
);
const getLabelNode = (wrapper) => findDOMNode(
  findRenderedDOMComponentWithClass(wrapper, classNames.label)
);
const noOp = () => '';

describe('Toggle', () => {
  it('Should render an input inside a label inside a wrapper', () => {
    const instance = renderIntoDocument(
      <Toggle value={false} onChange={noOp}/>
    );
    assert.equal(findDOMNode(instance).nodeName, 'SPAN');
    assert.equal(getInputNode(instance).nodeName, 'INPUT');
    assert.equal(getLabelNode(instance).nodeName, 'LABEL');
  });

  it('Calls onChange when changed', (done) => {
    const doneOp = () => done();
    const instance = renderIntoDocument(
      <Toggle value={false} onChange={doneOp}/>
    );
    Simulate.change(getInputNode(instance));
  });

  it('Is on when the value is true', () => {
    const instance = renderIntoDocument(
      <Toggle value={true} onChange={noOp}/>
    );
    assert.ok(getLabelNode(instance).className.match(new RegExp(classNames.isOn)));
  });

  it('Is off when the value is false', () => {
    const instance = renderIntoDocument(
      <Toggle value={false} onChange={noOp}/>
    );
    assert.notOk(getLabelNode(instance).className.match(new RegExp(classNames.isOn)));
  });

  it('Passes through the className', () => {
    const instance = renderIntoDocument(
      <Toggle className="TEEESTTT" value={false} onChange={noOp}/>
    );
    assert.ok(findDOMNode(instance).className.match(/TEEESTTT/));
  });
});
