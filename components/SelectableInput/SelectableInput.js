import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class SelectableInput extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const actionType = this.props.actionType || 'copy';

    if (this.props.onAction) {
      ReactDOM
        .findDOMNode(this.refs.selectable)
        .addEventListener(actionType, this.props.onAction);
    }
  }

  componentWillUnmount() {
    const actionType = this.props.actionType || 'copy';

    if (this.props.onAction) {
      ReactDOM
        .findDOMNode(this.refs.selectable)
        .removeEventListener(actionType, this.props.onAction);
    }
  }

  handleClick() {
    ReactDOM.findDOMNode(this.refs.selectable).setSelectionRange(0, 9999);
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
  actionType: PropTypes.string,
};
