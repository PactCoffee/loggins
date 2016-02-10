import React, { findDOMNode } from 'react';
import { renderIntoDocument, Simulate } from 'react/lib/ReactTestUtils';

import Btn from '../Btn/Btn.js';
import classNames from '../Btn/Btn.css';

describe('Btn', () => {
  it('Should render a button', () => {
    const node = findDOMNode(renderIntoDocument(<Btn>btn</Btn>));
    assert.equal(node.nodeName, 'BUTTON');
  });

  it('Passes through the className to the actual DOM element', () => {
    const node = findDOMNode(renderIntoDocument(
      <Btn className="TESTMCTESTERSON"/>
    ));
    assert.ok(node.className.match(/\bTESTMCTESTERSON\b/));
  });

  it('Correctly applies the className for the context', () => {
    ['primary', 'danger', 'whiteOut', 'subtle'].forEach(context => {
      const node = findDOMNode(renderIntoDocument(
        <Btn context={context}/>
      ));
      assert.ok(node.className.match(new RegExp(classNames[context])));
    });
  });

  it('Correctly applies the className for the variant', () => {
    ['condensed', 'cta', 'hollow', 'text', 'tiny'].forEach(variant => {
      const node = findDOMNode(renderIntoDocument(
        <Btn variant={variant}/>
      ));
      assert.ok(node.className.match(new RegExp(classNames[variant])));
    });
  });

  it('Applies the correct CSS class when the fullWidth prop is passed', () => {
    const node = findDOMNode(renderIntoDocument(
      <Btn fullWidth/>
    ));
    assert.ok(node.className.match(new RegExp(classNames.fullWidth)));
  });

  it('Disables correctly as a button', () => {
    const node = findDOMNode(renderIntoDocument(
      <Btn disabled/>
    ));
    assert.ok(node.disabled);
  });

  it(`Calls the onClick function it's passed`, (done) => {
    const doneOp = () => done();
    const node = findDOMNode(renderIntoDocument(
      <Btn onClick={doneOp}/>
    ));
    Simulate.click(node);
  });
});
