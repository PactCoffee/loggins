import React, { Component } from 'react';

import BtnContainer from 'components/BtnContainer/BtnContainer';
import Section from '../components/Section';
import * as m from 'globals/modifiers.css';
import Icon from 'components/Icon/Icon';
import Btn from 'components/Btn/Btn';

export default class BtnSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section name="Buttons" href="https://github.com/PactCoffee/loggins/blob/master/styleguide%2Fsections%2FButtons.js">

        <Btn className={[m.mbs, m.mrs].join(' ')}>Standard</Btn>

        <h3>Types</h3>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="primary">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="secondary">Secondary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="danger">Danger</Btn>

        <h3>Variants</h3>

        <h4>Hollow</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="hollow">Hollow</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="secondary" variant="hollow">Secondary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="white" variant="hollow">white</Btn>

        <h4>Clean</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="clean">Clean</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="primary" variant="clean">Primary</Btn>

        <h3>CTAs</h3>
        <Btn cta className={[m.mbs, m.mrs].join(' ')} type="primary">Primary</Btn>
        <Btn cta className={[m.mbs, m.mrs].join(' ')} variant="hollow">Hollow</Btn>
        <Btn cta className={[m.mbs, m.mrs].join(' ')} variant="clean">Clean</Btn>

        <h3>With icon(s)</h3>

        <Btn className={[m.mbs, m.mrs].join(' ')}>
          <Icon name="heart"/>
          &nbsp;
          Avec icon
          &nbsp;
          <Icon name="coffee"/>
        </Btn>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="hollow">
          <Icon name="asap"/>
          &nbsp;
          Avec icon
          &nbsp;
          <Icon name="pin"/>
        </Btn>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="clean">
          <Icon name="play"/>
          &nbsp;
          Avec icon
          &nbsp;
          <Icon name="thumb"/>
        </Btn>

        <Btn fullWidth>Full width</Btn>

        <h3>Button container... do what you want</h3>

        <BtnContainer>
          <h4>Button container</h4>
          <p>Will simply render children and impose no style by default</p>
        </BtnContainer>

      </Section>
    );
  }
}
