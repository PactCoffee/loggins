import React, { Component } from 'react';

import Section from '../components/Section';
import Btn from 'components/Btn/Btn';

import PhotoHero from 'components/Blocks/PhotoHero';
import PHH from 'components/Blocks/PhotoHero.css';

import PlainHero from 'components/Blocks/PlainHero';
import PLH from 'components/Blocks/PlainHero.css';

import CTABlock from 'components/Blocks/CTABlock';
import CTA from 'components/Blocks/CTABlock.css';

export default class Blocks extends Component {
  render() {
    return (
      <Section name="Blocks" href="#">

        <h2>PhotoHero</h2>

        <PhotoHero src="http://zurb.com/blog/system/images/1140/original/topgun.jpg?1384302274">
          <div className={PHH.inner}>
            <h1 className={PHH.heading}>I feel the need...</h1>
            <h2 className={PHH.tagline}>The need for speed</h2>
            <p className={PHH.body}>
              You can put anything inside a block. You can use the styles that come with the block, or use your own. They're pretty flexible.
            </p>
          </div>
        </PhotoHero>

        <h2>PlainHero</h2>

        <PlainHero>
          <div className={PLH.inner}>
            <h1 className={PLH.heading}>A photo-less hero</h1>
            <h2 className={PLH.tagline}>
              Sometimes we just want a nice, simple header with no background image or crazy colour. So we go for this.
            </h2>
          </div>
        </PlainHero>

        <h2>CTABlock</h2>

        <CTABlock>
          <div className={CTA.inner}>
            <div className={CTA.left}>
              This is a call-to-action block and is all green and stands out loads. We use this to draw attention and break up longer pages. Usually it’s a prompt for the user to do something great.
            </div>
            <div className={CTA.right}>
              <Btn type="white" variant="hollow">Do a thing</Btn>
            </div>
          </div>
        </CTABlock>

      </Section>
    );
  }
}
