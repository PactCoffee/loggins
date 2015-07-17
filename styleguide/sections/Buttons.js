import React, {Component} from 'react';

import Section from './Section';
import Btn from 'components/Btn/Btn';
import Icon from 'components/Icon/Icon';
import LikeDislike from 'components/LikeDislike/LikeDislike';
import * as m from 'globals/modifiers.css';

export default class BtnSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: null
    };
    this.likeChanged = this.likeChanged.bind(this);
  }

  likeChanged(didLike) {
    this.setState({liked: didLike});
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

        <p>With icon(s):</p>

        <Btn>
          <Icon name="heart"/>
          &nbsp;
          Avec icon
          &nbsp;
          <Icon name="coffee"/>
        </Btn>

        <Btn className={m.mas} fullWidth>Full width</Btn>

        <p>
          A LikeDislike component that should probably be elsewhere. Preference:&nbsp;
          <strong>
            {this.state.liked === true ? 'Liked' : null}
            {this.state.liked === false ? 'Disliked' : null}
            {this.state.liked === null ? 'None' : null}
          </strong>
        </p>
        <LikeDislike onChange={this.likeChanged}/>

      </Section>
    );
  }
}
