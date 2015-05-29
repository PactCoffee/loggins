import React, {Component} from 'react';

import Section from './Section';
import SectionTitle from 'components/Text/SectionTitle';

export default class Type extends Component {
  render() {
    return (
      <Section name="Typography" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Type.js">
        <h1 className="heading heading--hero">Hero heading</h1>
        <h1 className="heading heading--primary">Primary heading</h1>
        <h1 className="heading heading--sub">Sub heading</h1>
        <h1 className="title">Title</h1>
        <SectionTitle>Section Title</SectionTitle>
        <SectionTitle>Really very long section title indeed</SectionTitle>
      </Section>
    );
  }
}
