import React, { Component } from 'react';

import Section from '../components/Section';
import SectionTitle from 'components/SectionTitle/SectionTitle';

import * as t from 'globals/typography.css';

export default class Type extends Component {
  render() {
    return (
      <Section name="Typography" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Type.js">

        <p>
          We use two typefaces throughout the site: Brandon Grotesque and Lunchbox Slab. Instead of arbitrarily using any font anywhere, we use specific type styles for specific use cases:
        </p>

        <h1 className={t.hero}>Hero heading</h1>
        <h1 className={t.primary}>Primary heading</h1>
        <h1 className={t.sub}>Sub heading</h1>
        <h1 className={t.title}>Title</h1>
        <SectionTitle>Section Title</SectionTitle>
        <SectionTitle>Really very long section title indeed</SectionTitle>
        <p>Body text is always brandon. We have <em>italic</em> and <strong>bold</strong>, as well as light, thin, medium and black weights (to be used specifically).</p>
      </Section>
    );
  }
}
