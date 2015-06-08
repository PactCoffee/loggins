import React, {Component} from 'react';

import Section from './Section';
import EmailMultiInput from 'components/EmailMultiInput/EmailMultiInput';
import SelectableInput from 'components/SelectableInput/SelectableInput';

export default class FormSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      value: 'highlight me by clicking'
    };
    this.emailsChanged = this.emailsChanged.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  emailsChanged(emails) {
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
        <EmailMultiInput emails={this.state.emails} placeholder="Emails" onChange={this.emailsChanged} />

        <h3>SelectableInput</h3>
        <p>A read-only textarea who's contents are selected on click. It's size is dictated by it's contents using a hidden div. Will fire it's <code>onAction</code> prop when the user copies any of the text within the textarea.</p>
        <SelectableInput value={this.state.value} onAction={this.handleCopy}/>
      </Section>
    );
  }
}
