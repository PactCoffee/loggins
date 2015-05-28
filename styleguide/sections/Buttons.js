import React, {Component} from 'react';

import Section from './Section';
import Btn from 'components/Btn/Btn';

export default class BtnSection extends Component {
  constructor(props) {
    super(props);
    this.linkName = 'Buttons';
  }
  render() {
    return (
      <Section name={this.linkName}>

        <Btn primary>Primary</Btn>&nbsp;
        <Btn secondary>Secondary</Btn>&nbsp;
        <Btn warning>Warning</Btn>&nbsp;
        <Btn>Standard</Btn>

      </Section>
    );
  }
}
