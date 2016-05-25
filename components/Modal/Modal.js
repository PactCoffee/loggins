import React from 'react';
import ReactDOM from 'react-dom';

import ModalPortal from './ModalPortal';

export default React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    isOpen: React.PropTypes.bool.isRequired,
    onRequestClose: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      isOpen: false,
      className: '',
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

  node: null,
  portal: null,

  renderPortal(props) {
    if (this.portal) {
      this.portal.setProps(props);
    } else {
      this.portal = ReactDOM.render(
        <ModalPortal {...props} />,
        this.node
      );
    }
  },

  render() {
    return null;
  },
});
