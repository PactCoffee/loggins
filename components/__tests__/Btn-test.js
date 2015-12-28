import '../../test/setup-dom';
import { shallowRender, domRender } from '../../test/utils';

import {
  Simulate,
} from 'react-addons-test-utils';
import React from 'react';
import test from 'tape';

import Btn from '../Btn/Btn.js';
import classNames from '../Btn/Btn.css';

test('Btn', (T) => {
  T.test('Should render a button', t => {
    t.plan(1);
    const result = domRender(<Btn>btn</Btn>);
    t.equal(result.nodeName, 'BUTTON');
  });

  T.test('Should output an anchor when passed an href', t => {
    t.plan(1);
    const result = domRender(
      <Btn href="#">A link, really. Not a button at all.</Btn>
    );
    t.equal(result.nodeName, 'A');
  });

  T.test('Passes through the correct className', t => {
    t.plan(1);
    const CLASSNAME = 'TESTMCTESTERSON';
    const result = shallowRender(
      <Btn className={CLASSNAME}/>
    );
    t.ok(result.props.className.indexOf(CLASSNAME) > -1);
  });

  T.test(`Doesn't pass through all props it's given`, t => {
    t.plan(1);
    const result = shallowRender(
      <Btn randoAttribute/>
    );
    t.notOk(result.props.randoAttribute);
  });

  T.test('Correctly applies the className for the type', t => {
    const types = ['primary', 'secondary', 'danger', 'white'];
    t.plan(types.length);
    types.forEach(type => {
      const result = shallowRender(
        <Btn type={type}/>
      );
      t.ok(result.props.className.indexOf(type) > -1);
    });
  });

  T.test('Correctly applies the className for the variant', t => {
    t.plan(2);
    ['hollow', 'clean'].forEach(variant => {
      const result = shallowRender(
        <Btn variant={variant}/>
      );
      t.ok(result.props.className.indexOf(variant) > -1);
    });
  });

  T.test('Applies the correct CSS class when the fullWidth prop is passed', t => {
    t.plan(1);
    const result = shallowRender(
      <Btn fullWidth/>
    );
    t.ok(result.props.className.indexOf(classNames.fullWidth) > -1);
  });

  T.test('Can be disabled', t => {
    t.plan(1);
    const node = domRender(
      <Btn disabled/>
    );
    t.ok(node.disabled);
  });

  T.test('Is not disablable when it’s an anchor', t => {
    t.plan(1);
    const node = domRender(
      <Btn href="#" disabled/>
    );
    t.notOk(node.disabled);
  });

  T.test(`Calls the onClick function it's passed`, t => {
    t.plan(1);
    const node = domRender(
      <Btn onClick={t.ok}/>
    );
    Simulate.click(node);
  });
});
