import React, {Component} from 'react';

import Section from './Section';
import Btn from 'components/Btn/Btn';
import Icon from 'components/Icon/Icon';
import LikeDislike from 'components/LikeDislike/LikeDislike';


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

        <Btn type="primary">Primary</Btn>&nbsp;
        <Btn type="secondary">Secondary</Btn>&nbsp;
        <Btn type="warning">Warning</Btn>&nbsp;
        <Btn>Standard</Btn>&nbsp;

        <Btn>
          <Icon name="heart"/>
          &nbsp;
          Avec icon
          &nbsp;
          <Icon name="coffee"/>
        </Btn>

        <br/>
        <br/>

        <Btn fullWidth>Full width</Btn>&nbsp;

        <br/>
        <br/>

        <LikeDislike onChange={this.likeChanged}/>
        &nbsp;
        {this.state.liked === true ? 'Liked' : null}
        {this.state.liked === false ? 'Disliked' : null}
        {this.state.liked === null ? 'No preference' : null}

      </Section>
    );
  }
}
