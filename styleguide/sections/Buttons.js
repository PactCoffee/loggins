import React, { Component } from 'react';
import Markdown from 'matthewmueller-react-remarkable';

import ScreenReadable from 'components/ScreenReadable/ScreenReadable';
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

        <h2>Standard button</h2>

        <Markdown>{`
          The \`<Btn />\` component acts as a wrapper for a typical HTML \`<button/>\` with the addition of styles and contexts. Pass it any [valid (React style) HTML attribute](https://facebook.github.io/react/docs/tags-and-attributes.html), \`context\` or \`variant\` like so:
        `}
        </Markdown>

        <h3>Contexts</h3>
        <Btn className={[m.mbs, m.mrs].join(' ')}>Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="primary">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="danger">Danger</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="whiteOut">Whiteout</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="subtle">Subtle</Btn>

        <h3>Styles</h3>

        <h4>Call to action</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="cta">Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="primary" variant="cta">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="danger" variant="cta">Danger</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="whiteOut" variant="cta">Whiteout</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="subtle" variant="cta">Subtle</Btn>

        <h4>Hollow</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="hollow">Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="primary" variant="hollow">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="danger" variant="hollow">Danger</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="whiteOut" variant="hollow">Whiteout</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="subtle" variant="hollow">Subtle</Btn>

        <h4>Text only</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="text">Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="primary" variant="text">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="danger" variant="text">Danger</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="whiteOut" variant="text">Whiteout</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="subtle" variant="text">Subtle</Btn>

        <h4>Condensed</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="condensed">Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="primary" variant="condensed">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="danger" variant="condensed">Danger</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="whiteOut" variant="condensed">Whiteout</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="subtle" variant="condensed">Subtle</Btn>

        <h4>Tiny</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="tiny">Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="primary" variant="tiny">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="danger" variant="tiny">Danger</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="whiteOut" variant="tiny">Whiteout</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} context="subtle" variant="tiny">Subtle</Btn>

        <h3>Disabled</h3>
        <Btn className={[m.mbs, m.mrs].join(' ')} disabled>Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} variant="cta" disabled>Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} variant="condensed" disabled>Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} variant="tiny" disabled>Default</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} variant="hollow" disabled>Default</Btn>

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
        <Btn className={[m.mbs, m.mrs].join(' ')} variant="text">
          <Icon name="play"/>
          &nbsp;
          Avec icon
          &nbsp;
          <Icon name="thumb"/>
        </Btn>

        <h3>Just icon(s) (with hidden labels for accessibility)</h3>

        <Btn className={[m.mbs, m.mrs].join(' ')}>
          <Icon name="thumb"/>
          <ScreenReadable>+1</ScreenReadable>
        </Btn>

        <h3>Full width</h3>

        <Btn fullWidth>Full width</Btn>

        <h2>Special buttons</h2>

        <h3>Button container</h3>
        <BtnContainer>
          <h4>Button container</h4>
          <p>Will simply render children and impose no style by default</p>
        </BtnContainer>

      </Section>
    );
  }
}
