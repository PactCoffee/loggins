import React, { findDOMNode } from 'react';
import { range, uniq } from 'lodash';
import {
  renderIntoDocument,
  Simulate,
  findRenderedDOMComponentWithClass,
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
  it('Should render an input, label, and icon within a wrapper', () => {
    const instance = renderIntoDocument(
      <Checkbox/>
    );
    assert.equal(findDOMNode(instance).nodeName, 'SPAN');
    assert.equal(getInputNode(instance).nodeName, 'INPUT');
    assert.equal(getLabelNode(instance).nodeName, 'LABEL');
    assert.equal(getIconNode(instance).nodeName, 'SPAN');
  });

  it('Calls onChange when changed', (done) => {
    const doneOp = () => done();
    const instance = renderIntoDocument(
      <Checkbox onChange={doneOp}/>
    );
    Simulate.change(getInputNode(instance));
  });

  it(`Has a label with a "for" attribute that matches the input's "id"`, () => {
    const instance = renderIntoDocument(
      <Checkbox/>
    );
    assert.equal(getInputNode(instance).id, getLabelNode(instance).getAttribute('for'));
  });

  it(`Has a unique id so there's no mismatching "for"s and "ids"`, () => {
    const ids = range(10).map(() => {
      const instance = renderIntoDocument(
        <Checkbox />
      );
      return getInputNode(instance).id;
    });
    assert.equal(uniq(ids).length, ids.length);
  });

  it('Is checked when the checked prop is true', () => {
    const node = findDOMNode(renderIntoDocument(
      <Checkbox checked={true}/>
    ));
    assert.ok(node.className.match(new RegExp(classNames.isChecked)));
  });

  it('Is not checked when the checked prop is false', () => {
    const node = findDOMNode(renderIntoDocument(
      <Checkbox checked={false}/>
    ));
    assert.notOk(node.className.match(new RegExp(classNames.isChecked)));
  });

  it('Accepts a name attribute and applies it to the input', () => {
    const instance = renderIntoDocument(<Checkbox name="herp"/>);
    assert.equal(getInputNode(instance).name, 'herp');
  });

  it('Passes through the className', () => {
    const instance = renderIntoDocument(
      <Checkbox className="TEEESTTT"/>
    );
    assert.ok(findDOMNode(instance).className.match(/TEEESTTT/));
  });
});
