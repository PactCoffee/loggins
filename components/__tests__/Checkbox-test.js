import '../../test/setup-dom';
import { shallowRender, domRender } from '../../test/utils';

import { range, uniq } from 'lodash';
import {
  Simulate,
} from 'react-addons-test-utils';
import React from 'react';
import test from 'tape';

import Checkbox from '../Checkbox/Checkbox.js';
import classNames from '../Checkbox/Checkbox.css';

test('Checkbox', (T) => {
  T.test('Should render an input, label, and icon within a wrapper', t => {
    const result = shallowRender(
      <Checkbox/>
    );
    t.plan(1);
    t.equal(result.props.children.length, 3);
  });

  T.test('Calls onChange when changed', t => {
    t.plan(1);
    const input = domRender(
      <Checkbox onChange={t.ok}/>
    ).children[0];
    Simulate.change(input);
  });

  T.test(`Has a label with a "for" attribute that matches the input's "id"`, t => {
    const [input, label] = shallowRender(
      <Checkbox/>
    ).props.children;
    t.plan(1);
    t.equal(input.props.id, label.props.htmlFor);
  });

  T.test(`Has a unique id so there's no mismatching "for"s and "ids"`, t => {
    const ids = range(10).map(() => domRender(<Checkbox />).children[0].id);
    t.plan(2);
    t.ok(ids[0]);
    t.equal(uniq(ids).length, ids.length);
  });

  T.test('Is checked when the checked prop is true', t => {
    const result = shallowRender(
      <Checkbox checked/>
    );
    t.plan(1);
    t.ok(result.props.className.indexOf(classNames.isChecked) > -1);
  });

  T.test('Is not checked when the checked prop is false', t => {
    const result = shallowRender(
      <Checkbox checked={false}/>
    );
    t.plan(1);
    t.ok(result.props.className.indexOf(classNames.isChecked) === -1);
  });

  T.test('Accepts a name attribute and applies it to the input', t => {
    const result = domRender(<Checkbox name="foo"/>);
    t.plan(1);
    t.equal(result.children[0].name, 'foo');
  });

  T.test('Passes through the className', t => {
    const result = shallowRender(
      <Checkbox className="foo"/>
    );
    t.plan(1);
    t.ok(result.props.className.indexOf('foo') > -1);
  });
});
