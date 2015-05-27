import React from 'react';
import ModalPortal from './ModalPortal';

export default React.createClass({

  portal: null,
  node: null,

  propTypes: {
    className: React.PropTypes.string,
    isOpen: React.PropTypes.bool.isRequired,
    onRequestClose: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      isOpen: false,
      className: ''
    };
  },

  componentDidMount() {
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
    this.renderPortal(this.props);
  },

  componentWillReceiveProps(newProps) {
    this.renderPortal(newProps);
  },

  componentWillUnmount() {
    if (this.portal) {
      document.body.removeChild(this.node);
    }
  },

  renderPortal(props) {
    if (this.portal) {
      this.portal.setProps(props);
    } else {
      this.portal = React.render(
        <ModalPortal {...props}/>,
        this.node
      );
    }
  },

  render() {
    return null;
  }
});
