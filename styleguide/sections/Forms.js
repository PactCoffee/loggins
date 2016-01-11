/* eslint  no-alert: 0*/

import React, { Component } from 'react';

import Section from '../components/Section';

import MaskedFormInput from 'components/MaskedFormInput/MaskedFormInput';
import EmailMultiInput from 'components/EmailMultiInput/EmailMultiInput';
import SelectableInput from 'components/SelectableInput/SelectableInput';
import LikeDislike from 'components/LikeDislike/LikeDislike';
import DatePicker from 'components/DatePicker/DatePicker';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import FormInput from 'components/FormInput/FormInput';
import Progress from 'components/Progress/Progress';
import Checkbox from 'components/Checkbox/Checkbox';
import FieldGroup from 'components/Form/FieldGroup';
import Toggle from 'components/Toggle/Toggle';
import Slider from 'components/Slider/Slider';
import * as m from 'globals/modifiers.css';
import Field from 'components/Form/Field';
import Btn from 'components/Btn/Btn';

export default class FormSection extends Component {

  constructor(props) {
    super(props);

    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleExpiryDate = this.handleExpiryDate.bind(this);
    this.handleCVC = this.handleCVC.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.likeChanged = this.likeChanged.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);

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
      creditCard: '',
      expiryDate: '',
      cvc: '',
    };
  }

  handleProgressChange() {
    const min = 0;
    const max = 100;
    this.setState({
      progressVal: Math.floor(Math.random() * (max - min)) + min,
    });
  }

  handleTextChange(val) {
    this.setState({
      text: val,
      error: val.length > 5 ? 'Yep, you broke it' : '',
      lolText: [].slice.call(val).sort().join('').toUpperCase(),
    });
  }

  handleEmailChange(emails) {
    this.setState({ emails });
  }

  handleCopy() {
    alert(`You copied!`);
  }

  likeChanged(didLike) {
    this.setState({ liked: didLike });
  }

  handleCheckbox(val) {
    this.setState({ checkbox: val });
  }

  handleToggle() {
    this.setState({ toggleVal: !this.state.toggleVal });
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
    this.setState({ slideVal });
  }

  handleCreditCard(e) {
    const { value } = e.target;
    this.setState({
      creditCard: value,
    });
  }

  handleExpiryDate(e) {
    const { value } = e.target;
    this.setState({
      expiryDate: value,
    });
  }

  handleCVC(e) {
    const { value } = e.target;
    this.setState({
      cvc: value,
    });
  }

  focus() {
    this.refs.focusable.focus();
  }
  blur() {
    this.refs.focusable.blur();
  }

  render() {
    return (
      <Section name="Forms" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Forms.js">

        <h3>FieldGroup &amp; Field</h3>
        <FieldGroup title="Example field group">
          <Field>
            <FormInput
              borderless
              required
              type="text"
              onChange={this.handleTextChange}
              value={this.state.text}
              label="First name"
              error={this.state.error}
              placeholder="e.g. Bat"
            />
          </Field>
          <Field>
            <FormInput borderless type="text" onChange={this.handleTextChange} value={this.state.text} label="Second name" placeholder="e.g. Man"/>
          </Field>
          <Field>
            <p>Here's some text in the field</p>
          </Field>
          <Field>
            <Btn variant="clean" type="primary" fullWidth>And a btn</Btn>
          </Field>
          <Field>
            <span className={[m.dt, m.ptm, m.pbs].join(' ')}>
              <span className={[m.dtc, m.w100].join(' ')}>
                Fancy a really very long labeled toggle?
              </span>
              <span className={[m.dtc, m.alignr, m.w1, m.h100, m.vam].join(' ')}>
              <Toggle value={this.state.toggleVal} onChange={this.handleToggle}/>
              </span>
            </span>
          </Field>
        </FieldGroup>

        <h3>Toggle</h3>
        <Toggle value={this.state.toggleVal} onChange={this.handleToggle}/>
        <br/>
        Is mothercluckers the best chicken in the universe? <strong>{this.state.toggleVal ? 'Absolutely.' : 'I don’t know. Probably.'}</strong>

        <h3>Radio buttons</h3>
        <RadioGroup
          name="example"
          onChange={this.handleRadio}
          value={this.state.radioVal}
        >
          {radio => (
            <span>
              {radio({ value: 'Apple' })}
              <br/>
              {radio({ value: 'Orange' })}
              <br/>
              {radio({ value: 'Banana' })}
            </span>
          )}
        </RadioGroup>
        <p>You selected {this.state.radioVal}</p>

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
        <p>
          Just a cute little animating input. Gracefully handles having a value passed in, and can be focused/blurred from outside:
          <button onClick={this.focus}>Focus</button>
          <button onClick={this.blur}>Blur</button>
        </p>
        <FormInput
          type="text"
          onChange={this.handleTextChange}
          value={this.state.text}
          error={this.state.error}
          label="First name"
          ref="focusable"
        />
        <FormInput
          type="text"
          placeho
          onChange={this.handleTextChange}
          value={this.state.lolText}
          error={this.state.error}
          label="Upcase &amp; sorted"
        />
        <p>Will also show an error if it's passed in:</p>
        <FormInput
          type="text"
          onChange={this.handleTextChange}
          value={this.state.text}
          error="Something bad happened" label="Error example"
        />

        Has second variant where the label and placeholder are separate:
        <FormInput
          placeholder="e.g. Home"
          type="text"
          onChange={this.handleTextChange}
          value={this.state.text}
          error={this.state.error}
          label="Name"
        />

        <h3>FormInput... Zorro Style (Masked)</h3>
        <MaskedFormInput
          pattern="1111 1111 1111 1111"
          placeholder="____ ____ ____ ____"
          type="text"
          onChange={this.handleCreditCard}
          value={this.state.creditCard}
          label="Credit Card"
        />
        <br />
        <MaskedFormInput
          pattern="11 / 1111"
          placeholder="MM / YYYY"
          type="text"
          onChange={this.handleExpiryDate}
          value={this.state.expiryDate}
          label="Expiry"
        />
        <br />
        <MaskedFormInput
          pattern="111"
          placeholder="123"
          type="text"
          onChange={this.handleCVC}
          value={this.state.cvc}
          label="Security code"
        />


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
