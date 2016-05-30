import React, { PropTypes, Component, Children } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ownerDocument } from '../HoverCard/positionUtils';

/*
 * A portal through to a div appended to the document body.
 */
export default class Portal extends Component {

  constructor(props) {
    super(props);

    this.portal = null;
    this.node = null;
  }

  componentDidMount() {
    this.node = document.createElement('div');
    this.getContainerDOMNode().appendChild(this.node);
    this.renderPortal(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.renderPortal(newProps);
  }

  componentWillUnmount() {
    if (this.portal) {
      this.getContainerDOMNode().removeChild(this.node);
    }
  }

  getContainerDOMNode() {
    return ReactDOM.findDOMNode(this.props.container) || ownerDocument(this).body;
  }

  renderPortal(props) {
    this.portal = ReactDOM.render(
      <Provider store={this.context.store}>
        {Children.only(props.children)}
      </Provider>,
      this.node
    );
  }

  render() {
    return null;
  }
}

Portal.propTypes = {
  container: PropTypes.any,
};

Portal.contextTypes = {
  store: PropTypes.object,
};
