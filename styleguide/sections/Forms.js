import React, {Component} from 'react';

import Section from './Section';
import EmailMultiInput from 'components/EmailMultiInput/EmailMultiInput';
import SelectableInput from 'components/SelectableInput/SelectableInput';
import FormInput from 'components/FormInput/FormInput';
import Progress from 'components/Progress/Progress';


export default class FormSection extends Component {

  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {
      emails: [],
      text: ''
    };
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

        <Progress min="0" max="100" value="10" hueChange/>
        <Progress min="0" max="100" value="50" hueChange/>
        <Progress min="0" max="100" value="80" hueChange/>
      </Section>
    );
  }
}
