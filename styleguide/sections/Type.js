import React, {Component} from 'react';

import Section from './Section';

export default class Type extends Component {
  render() {
    return (
      <Section name="Typography">
        <h1 className="heading heading--hero">Hero heading</h1>
        <h1 className="heading heading--primary">Primary heading</h1>
        <h1 className="heading heading--sub">Sub heading</h1>
        <h1 className="title">Title</h1>
      </Section>
    );
  }
}
