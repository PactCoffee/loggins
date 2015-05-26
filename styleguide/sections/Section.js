import React, {Component, PropTypes} from 'react';

export default class Section extends Component {
  render() {
    return (
      <section>
        <h1>{this.props.name}</h1>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};
