import React from 'react/addons';
import expect from 'expect';
import sinon from 'sinon';
const TestUtils = React.addons.TestUtils;

import EmailMultiInput from '../EmailMultiInput';

let mockFn;
let placeholder = 'placeholder';
let instance;
let tree;

beforeEach(() => {
  mockFn = sinon.spy();
});

describe('EmailMultiInput', () => {

  describe('displays a list of emails as tags', () => {

    it('accepts an empty array', () => {
      instance = TestUtils.renderIntoDocument(
        <EmailMultiInput
          emails={[]}
          onChange={mockFn}
          placeholder={placeholder}
        />
      );
      tree = TestUtils.scryRenderedDOMComponentsWithClass(
        instance, 'react-tagsinput-tag'
      );
      expect(tree.length).toEqual(0);
    });

    it('accepts an unsparse array', () => {
      instance = TestUtils.renderIntoDocument(
        <EmailMultiInput
          emails={['one', 'two']}
          onChange={mockFn}
          placeholder={placeholder}
        />
      );
      tree = TestUtils.scryRenderedDOMComponentsWithClass(
        instance, 'react-tagsinput-tag'
      );
      expect(tree.length).toEqual(2);
    });
  });

  // TODO: complete these tests
  // iest got stuck for about 2 hours trying to get the onChange handler to be
  // called correctly :(
  it('calls onChange correctly');
  it('does not call onChange if the tag already exists in the emails prop');
  it('accepts an input of multiple values at once (copy pasted)');
  it('filters out duplicates when multiple values are inputted');
});
