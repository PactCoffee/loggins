import React, {Component} from 'react';

import Section from './Section';
import SectionTitle from 'components/Text/SectionTitle';

import * as t from 'globals/typography.css';

export default class Type extends Component {
  render() {
    return (
      <Section name="Typography" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Type.js">
        <h1 className={t.hero}>Hero heading</h1>
        <h1 className={t.primary}>Primary heading</h1>
        <h1 className={t.sub}>Sub heading</h1>
        <h1 className={t.title}>Title</h1>
        <SectionTitle>Section Title</SectionTitle>
        <SectionTitle>Really very long section title indeed</SectionTitle>
      </Section>
    );
  }
}
