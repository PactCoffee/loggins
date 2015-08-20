import React, {Component} from 'react';

import Section from '../components/Section';
import Btn from 'components/Btn/Btn';
import Icon from 'components/Icon/Icon';
import * as m from 'globals/modifiers.css';

export default class BtnSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section name="Buttons" href="https://github.com/PactCoffee/loggins/blob/master/styleguide%2Fsections%2FButtons.js">

        <Btn className={[m.mbs, m.mrs].join(' ')}>Standard</Btn>

        <p>Types:</p>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="primary">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="secondary">Secondary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="warning">Warning</Btn>

        <p>Variants:</p>
        <Btn className={[m.mbs, m.mrs].join(' ')} variant="hollow">Hollow</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="secondary" variant="hollow">Secondary</Btn>

        <p>Loading:</p>
        <Btn className={[m.mbs, m.mrs].join(' ')} isLoading="doing stuff...">Unseen button children</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} isLoading="saving..">Unseen button children</Btn>

        <p>With icon(s):</p>

        <Btn className={m.mbs}>
          <Icon name="heart"/>
          &nbsp;
          Avec icon
          &nbsp;
          <Icon name="coffee"/>
        </Btn>

        <Btn fullWidth>Full width</Btn>

      </Section>
    );
  }
}
