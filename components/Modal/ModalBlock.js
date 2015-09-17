import React from 'react';

// This component will be wrapped by ReactTransitionGroup, giving it extra
// lifecyle methods for controlling CSS classes
export default React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.any,
  },

  componentWillEnter(callback) {
    this.refs.block.getDOMNode().classList.add('modal-in');
    callback();
  },

  render() {
    return (
      <div ref="block" className={this.props.className}>
        {this.props.children}
      </div>
    );
  },
});
