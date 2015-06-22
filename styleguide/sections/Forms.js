import React, {Component} from 'react';

import Section from './Section';
import EmailMultiInput from 'components/EmailMultiInput/EmailMultiInput';
import SelectableInput from 'components/SelectableInput/SelectableInput';
import FormInput from 'components/FormInput/FormInput';
import Progress from 'components/Progress/Progress';
import Slider from 'components/Slider/Slider';


export default class FormSection extends Component {

  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.getGrindType = this.getGrindType.bind(this);

    this.state = {
      emails: [],
      text: ''
    };
  }

  handleSliderChange(e) {
    this.setState({
      sliderValue: this.getGrindType(e.target.value)
    });
  }

  getGrindType(value) {
    let grind;
    switch (parseInt(value)) {
      case 0:   grind = "Wholebean";  break;
      case 3:   grind = "Espresso";   break;
      case 4:   grind = "Stovetop";   break;
      case 5:   grind = "Aeropress";  break;
      case 6:   grind = "V60";        break;
      case 7:   grind = "Cafetiere";  break;
      default:  grind = value;        break;
    }
    return grind;
  }


  handleTextChange(e) {
    this.setState({
      text: e.target.value,
      error: e.target.value > 5 ? 'Yep, you fucked up':''
    });
  }

  handleEmailChange(emails) {
    this.setState({emails: emails});
  }

  handleCopy() {
    alert(`You copied!`);
  }

  render() {
    return (
      <Section name="Forms" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Forms.js">

        <h3>EmailMultiInput</h3>
        <p>Enter multiple email addresses with a tagging interface.</p>
        <EmailMultiInput emails={this.state.emails} placeholder="Emails" onChange={this.handleEmailChange} />

        <h3>SelectableInput</h3>
        <p>A read-only textarea who's contents are selected on click. It's size is dictated by it's contents using a hidden div. Will fire it's <code>onAction</code> prop when the user copies any of the text within the textarea.</p>
        <SelectableInput value="Highlight me by clicking. If you copy text, you'll be alerted" onAction={this.handleCopy}/>

        <FormInput onChange={this.handleTextChange} value={this.state.text} error={this.state.error} label="First name"/>

        <h3>progress</h3>
        <p>hueChange false</p>
        <Progress min="0" max="100" value="10"/>
        <p>isError</p>
        <Progress min="0" max="100" value="10" hueChange/>
        <p>isWarning</p>
        <Progress min="0" max="100" value="50" hueChange/>
        <p>isSuccess</p>
        <Progress min="0" max="100" value="80" hueChange/>

        <h3>Slider</h3>
        <p>Value is: {this.state.sliderValue}</p>
        <Slider min="0" max="10" step="1" onInput={this.handleSliderChange} />
      </Section>
    );
  }
}
