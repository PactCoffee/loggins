import '../../test/setup-dom';
import { shallowRender, domRender } from '../../test/utils';

import { range, uniq } from 'lodash';
import {
  Simulate,
} from 'react-addons-test-utils';
import React from 'react';
import test from 'tape';

import Checkbox from '../Checkbox/Checkbox.js';
// import classNames from '../Checkbox/Checkbox.css';

test('Checkbox', (T) => {
  T.test('Should render an input, label, and icon within a wrapper', () => {
    const result = shallowRender(
      <Checkbox/>
    );
    console.log(result.props.children);
  });
//
//   it('Calls onChange when changed', (done) => {
//     const doneOp = () => done();
//     const instance = renderIntoDocument(
//       <Checkbox onChange={doneOp}/>
//     );
//     Simulate.change(getInputNode(instance));
//   });
//
//   it(`Has a label with a "for" attribute that matches the input's "id"`, () => {
//     const instance = renderIntoDocument(
//       <Checkbox/>
//     );
//     assert.equal(getInputNode(instance).id, getLabelNode(instance).getAttribute('for'));
//   });
//
//   it(`Has a unique id so there's no mismatching "for"s and "ids"`, () => {
//     const ids = range(10).map(() => {
//       const instance = renderIntoDocument(
//         <Checkbox />
//       );
//       return getInputNode(instance).id;
//     });
//     assert.equal(uniq(ids).length, ids.length);
//   });
//
//   it('Is checked when the checked prop is true', () => {
//     const node = findDOMNode(renderIntoDocument(
//       <Checkbox checked={true}/>
//     ));
//     assert.ok(node.className.match(new RegExp(classNames.isChecked)));
//   });
//
//   it('Is not checked when the checked prop is false', () => {
//     const node = findDOMNode(renderIntoDocument(
//       <Checkbox checked={false}/>
//     ));
//     assert.notOk(node.className.match(new RegExp(classNames.isChecked)));
//   });
//
//   it('Accepts a name attribute and applies it to the input', () => {
//     const instance = renderIntoDocument(<Checkbox name="herp"/>);
//     assert.equal(getInputNode(instance).name, 'herp');
//   });
//
//   it('Passes through the className', () => {
//     const instance = renderIntoDocument(
//       <Checkbox className="TEEESTTT"/>
//     );
//     assert.ok(findDOMNode(instance).className.match(/TEEESTTT/));
//   });
});
