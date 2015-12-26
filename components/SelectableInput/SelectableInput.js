import React, { Component, PropTypes } from 'react';

export default class SelectableInput extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.onAction) {
      React
        .findDOMNode(this.refs.selectable)
        .addEventListener('copy', this.props.onAction);
    }
  }

  componentWillUnmount() {
    if (this.props.onAction) {
      React
        .findDOMNode(this.refs.selectable)
        .removeEventListener('copy', this.props.onAction);
    }
  }

  handleClick() {
    React.findDOMNode(this.refs.selectable).setSelectionRange(0, 9999);
  }

  render() {
    const { className } = this.props;
    return (
      <input
        ref="selectable"
        className={className}
        readOnly
        onClick={this.handleClick}
        value={this.props.value}
      />
    );
  }
}

SelectableInput.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onAction: PropTypes.func,
};
