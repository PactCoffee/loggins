/* eslint  no-alert: 0*/

import React, {Component} from 'react';

import Section from '../components/Section';

import EmailMultiInput from 'components/EmailMultiInput/EmailMultiInput';
import SelectableInput from 'components/SelectableInput/SelectableInput';
import LikeDislike from 'components/LikeDislike/LikeDislike';
import DatePicker from 'components/DatePicker/DatePicker';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import FormInput from 'components/FormInput/FormInput';
import Progress from 'components/Progress/Progress';
import Checkbox from 'components/Checkbox/Checkbox';
import Toggle from 'components/Toggle/Toggle';
import Slider from 'components/Slider/Slider';
import Icon from 'components/Icon/Icon';

import * as m from 'globals/modifiers.css';
import styles from '../styleguide.css';


export default class FormSection extends Component {

  constructor(props) {
    super(props);

    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.likeChanged = this.likeChanged.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleDate = this.handleDate.bind(this);

    this.state = {
      emails: [],
      text: '',
      lolText: '',
      toggleVal: false,
      radioVal: 'Orange',
      liked: null,
      checked: false,
      progressVal: 50,
      date: new Date().getTime(),
      slideVal: 50,
    };
  }

  handleProgressChange() {
    const min = 0;
    const max = 100;
    this.setState({
      progressVal: Math.floor(Math.random() * (max - min)) + min,
    });
  }

  handleTextChange(e) {
    const val = e.target.value;
    this.setState({
      text: val,
      error: val.length > 5 ? 'Yep, you broke it' : '',
      lolText: [].slice.call(val).sort().join('').toUpperCase(),
    });
  }

  handleEmailChange(emails) {
    this.setState({emails: emails});
  }

  handleCopy() {
    alert(`You copied!`);
  }

  likeChanged(didLike) {
    this.setState({liked: didLike});
  }

  handleCheckbox(val) {
    this.setState({checkbox: val});
  }

  handleToggle(val) {
    this.setState({toggleVal: val});
  }

  handleRadio(val) {
    this.setState({
      radioVal: val,
    });
  }

  handleDate(milliseconds) {
    this.setState({
      date: milliseconds,
    });
  }

  handleSlide(slideVal) {
    this.setState({slideVal});
  }

  render() {
    return (
      <Section name="Forms" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Forms.js">

        <h3>Toggle</h3>
        <Toggle value={this.state.toggleVal} onChange={this.handleToggle}/>
        <br/>
        Is mothercluckers the best chicken in the universe? <strong>{this.state.toggleVal ? 'Absolutely.' : `I don't know. Probably.`}</strong>

        <h3>Radio buttons</h3>
        <RadioGroup name="example"
                    onChange={this.handleRadio}
                    selectedValue={this.state.radioVal}>
          {radio => (
            <span>
              {radio({value: 'Apple'})}
              <br/>
              {radio({value: 'Orange'})}
              <br/>
              {radio({value: 'Banana'})}
            </span>
          )}
        </RadioGroup>
        <p>You selected {this.state.radioVal}</p>

        <h3>Tab buttons</h3>
        <p>
          Exactly the same component as RadioGroup, but with in a tab style. Unopinionated about border-radius and width.
        </p>
        <RadioGroup name="example"
                    tabbed
                    onChange={this.handleRadio}
                    selectedValue={this.state.radioVal}>
          {radio => (
            <span>
              {radio({
                value: 'Loves',
                className: styles.tab,
                children: (
                  <span className={[m.db, m.alignc].join(' ')}>
                    <span className={[m.db, m.alignc, m.large].join(' ')}>
                      <Icon name="heart"/>
                    </span>
                    Love
                  </span>
                ),
              })}
              {radio({
                value: 'Pact',
                className: styles.tab,
                children: (
                  <span className={[m.db, m.alignc].join(' ')}>
                    <span className={[m.db, m.alignc, m.large].join(' ')}>
                      <Icon name="stamp"/>
                    </span>
                    Fresh
                  </span>
                ),
              })}
              {radio({
                value: 'Coffee',
                className: styles.tab,
                children: (
                  <span className={[m.db, m.alignc].join(' ')}>
                    <span className={[m.db, m.alignc, m.large].join(' ')}>
                      <Icon name="coffee"/>
                    </span>
                    Coffee
                  </span>
                ),
              })}
            </span>
          )}
        </RadioGroup>

        <h3>Checkbox</h3>
        <p><Checkbox label="Checkbox" onChange={this.handleCheckbox}/> value is {this.state.checkbox ? 'checked' : 'not checked'}.</p>

        <h3>Slider</h3>
        <strong>Basic version:</strong>
        <Slider onChange={this.handleSlide} value={this.state.slideVal}/>
        <p>Value: {this.state.slideVal}</p>

        <strong>With steps &amp; ticks:</strong>
        <Slider ticks={10} step={10} onChange={this.handleSlide} value={this.state.slideVal}/>
        <p>Value: {this.state.slideVal}</p>

        <h3>DatePicker</h3>
        <DatePicker value={this.state.date} onChange={this.handleDate}/>
        <p>Selected date: {new Date(this.state.date).toDateString()}</p>

        <h3>LikeDislike</h3>
        <p>
          Preference:&nbsp;
          <strong>
            {this.state.liked === true ? 'Liked' : null}
            {this.state.liked === false ? 'Disliked' : null}
            {this.state.liked === null ? 'None' : null}
          </strong>
        </p>
        <LikeDislike onChange={this.likeChanged}/>

        <h3>EmailMultiInput</h3>
        <p>Enter multiple email addresses with a tagging interface.</p>
        <EmailMultiInput emails={this.state.emails} placeholder="Emails" onChange={this.handleEmailChange} />

        <h3>SelectableInput</h3>
        <p>A read-only textarea who's contents are selected on click. It's size is dictated by it's contents using a hidden div. Will fire it's <code>onAction</code> prop when the user copies any of the text within the textarea.</p>
        <SelectableInput value="Highlight me by clicking. If you copy text, you'll be alerted" onAction={this.handleCopy}/>

        <h3>FormInput</h3>
        <p>Just a cute little animating input. Gracefully handles having a value passed in as well:</p>
        <FormInput type="text" onChange={this.handleTextChange} value={this.state.text} error={this.state.error} label="First name"/>
        <FormInput type="text" onChange={this.handleTextChange} value={this.state.lolText} error={this.state.error} label="Upcase &amp; sorted"/>
        <p>Will also show an error if it's passed in:</p>
        <FormInput type="text" onChange={this.handleTextChange} value={this.state.text} error="Something bad happened" label="Error example"/>

        Has second variant where the label and placeholder are separate:
        <FormInput placeholder="e.g. Home" type="text" onChange={this.handleTextChange} value={this.state.text} error={this.state.error} label="Name"/>

        <h3>Progress</h3>
        <p><code>hueChange</code> makes the bar change colour according to it's value:</p>
        <Progress min={0} max={100} value={25} hueChange/>
        <br/>
        <Progress min={0} max={100} value={50} hueChange/>
        <br/>
        <Progress min={0} max={100} value={75} hueChange/>
        <p>Without <code>hueChange:</code></p>
        <Progress min={0} max={100} value={75}/>
        <br/>
        <Progress min={0} max={100} value={50}/>
        <br/>
        <Progress min={0} max={100} value={25}/>
        <p>Changing the value will animate the bar. <button onClick={this.handleProgressChange}>Change value</button></p>
        <Progress min={0} max={100} hueChange value={this.state.progressVal}/>
      </Section>
    );
  }
}
