import React from 'react/addons';
import expect from 'expect';
import sinon from 'sinon';
const Utils = React.addons.TestUtils;

import Modal from '../Modal';

describe('Modal', () => {

  const CHILDREN = 'hello';

  let node;
  let App;

  beforeEach(() => {
    node = document.createElement('div');
    App = React.createClass({
      render() {
        return React.DOM.div({}, React.createElement(Modal, {
          isOpen: false
        }, CHILDREN));
      }
    });
    React.render(React.createElement(App), node);
  });

  afterEach(() => {
    React.unmountComponentAtNode(node);
  });

  it('renders into the body via a portal, not in context', () => {
    const parent = document.body.querySelector('.modal-container').parentNode;
    expect(parent.parentNode).toEqual(document.body);
  });

  it('renders children correctly', () => {
    const container = document.querySelector('.modal-container');
    expect(container.textContent).toEqual(CHILDREN);
  });

  it('removes the portal on unmount', function() {
    const myNode = document.createElement('div');
    App = React.createClass({
      render() {
        return React.DOM.div({}, React.createElement(Modal, {
          isOpen: false,
          className: 'portalUnmountTest'
        }, CHILDREN));
      }
    });
    React.render(React.createElement(App), myNode);
    expect(document.querySelector('.portalUnmountTest')).toExist();
    React.unmountComponentAtNode(myNode);
    expect(document.querySelector('.portalUnmountTest')).toNotExist();
  });

  describe('close button', () => {

    it('renders when `onRequestClose` callback is passed in', () => {

      expect(document.querySelector('.close-modal')).toNotExist();

      const handleRequestClose = sinon.spy();
      node = document.createElement('div');
      App = React.createClass({
        render() {
          return React.DOM.div({}, React.createElement(Modal, {
            isOpen: false,
            onRequestClose: handleRequestClose
          }, CHILDREN));
        }
      });
      React.render(React.createElement(App), node);

      expect(document.querySelector('.close-modal')).toExist();
    });

    it('calls the `onRequestClose` callback when clicked', function() {
      const handleRequestClose = sinon.spy();
      node = document.createElement('div');
      App = React.createClass({
        render() {
          return React.DOM.div({}, React.createElement(Modal, {
            className: 'clickTest',
            isOpen: false,
            onRequestClose: handleRequestClose
          }, CHILDREN));
        }
      });
      React.render(React.createElement(App), node);

      document.querySelector('.clickTest .close-modal').click();
      expect(handleRequestClose.called).toEqual(true);
    });

  });

});
