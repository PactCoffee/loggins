import React, {findDOMNode} from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';

import Btn from '../Btn/Btn.js';
import classNames from '../Btn/Btn.css';

describe('Btn', () => {

  it('Should output a button', () => {
    const node = findDOMNode(ReactTestUtils.renderIntoDocument(<Btn>btn</Btn>));
    assert.equal(node.nodeName, 'BUTTON');
  });

  it('Should output an anchor when passed an href', () => {
    const node = findDOMNode(ReactTestUtils.renderIntoDocument(
      <Btn href="#">A link, really. Not a button at all.</Btn>
    ));
    assert.equal(node.nodeName, 'A');
  });

  it('Passes through the className to the actual DOM element', () => {
    const node = findDOMNode(ReactTestUtils.renderIntoDocument(
      <Btn className="TESTMCTESTERSON"/>
    ));
    assert.ok(node.className.match(/\bTESTMCTESTERSON\b/));
  });

  it(`Doesn't pass through all props it's given`, () => {
    const node = findDOMNode(ReactTestUtils.renderIntoDocument(
      <Btn data-someRandoAttribute="derp"/>
    ));
    assert.equal(node.getAttribute('data-someRandoAttribute'), null);
  });

  it('Corrently applies the className for the type', () => {
    ['primary', 'secondary', 'warning', 'clear', 'white'].forEach(type => {
      const node = findDOMNode(ReactTestUtils.renderIntoDocument(
        <Btn type={type}/>
      ));
      assert.ok(node.className.match(new RegExp(classNames[type])));
    });
  });

  it('Disables correctly as a button');
  it('Disables correctly as an anchor');
  it('Applies the correct CSS class when the fullWidth prop is passed');

});
