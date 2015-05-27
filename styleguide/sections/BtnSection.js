import React, {Component} from 'react';

import Section from './Section';
import Btn from 'components/Btn/Btn';

export default class BtnSection extends Component {
  render() {
    return (
      <Section name="Buttons">

        <Btn primary>Primary</Btn>
        <Btn secondary>Secondary</Btn>
        <Btn warning>Warning</Btn>
        <Btn>Standard</Btn>

      </Section>
    );
  }
}
