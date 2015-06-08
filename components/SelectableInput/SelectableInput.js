import React, {Component, PropTypes} from 'react';

import css from './SelectableInput.css';

export default class SelectableInput extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setDimensions = this.setDimensions.bind(this);
    this.state = {
      width: null,
      height: null
    };
  }

  componentDidMount() {
    this.setDimensions();

    if (this.props.onAction) {
      React
        .findDOMNode(this.refs.selectable)
        .addEventListener('copy', this.props.onAction);
    }
  }

  componentWillRecieveProps() {
    this.setDimensions();
  }

  componentWillUnmount() {
    if (this.props.onAction) {
      React
        .findDOMNode(this.refs.selectable)
        .removeEventListener('copy', this.props.onAction);
    }
  }

  setDimensions() {
    const dimensions = React.findDOMNode(this.refs.fake).getBoundingClientRect();
    this.setState({
      width: dimensions.width,
      height: dimensions.height
    });
  }

  handleClick() {
    React.findDOMNode(this.refs.selectable).setSelectionRange(0, 9999);
  }

  render() {

    const styles = {
      width: this.state.width,
      height: this.state.height,
      opacity: this.state.width ? 1 : 0
    };

    return (
      <div className={css.root}>
        <textarea
          ref="selectable"
          className={css.input}
          style={styles}
          readOnly
          onClick={this.handleClick}
          value={this.props.value}
        />
        <div ref="fake" className={[css.input, css.fake].join(' ')}>
          {this.props.value}
        </div>
      </div>
    );
  }
}

SelectableInput.propTypes = {
  value: PropTypes.string.isRequired,
  onAction: PropTypes.func
};
