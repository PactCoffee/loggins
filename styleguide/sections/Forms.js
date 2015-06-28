import React, {Component} from 'react';

import Section from './Section';
import EmailMultiInput from 'components/EmailMultiInput/EmailMultiInput';
import SelectableInput from 'components/SelectableInput/SelectableInput';
import FormInput from 'components/FormInput/FormInput';
import Progress from 'components/Progress/Progress';


export default class FormSection extends Component {

  constructor(props) {
    super(props);

    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);

    this.state = {
      emails: [],
      text: '',
      progressVal: 50
    };
  }

  handleProgressChange() {
    const min = 0;
    const max = 100;
    this.setState({
      progressVal: Math.floor(Math.random() * (max - min)) + min
    });
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value,
      error: e.target.value > 5 ? 'Yep, you broke it':''
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

        <h3>FormInput</h3>
        <FormInput onChange={this.handleTextChange} value={this.state.text} error={this.state.error} label="First name"/>

        <h3>Progress</h3>
        <p><code>hueChange</code> makes the bar change colour according to it's value:</p>
        <Progress min="0" max="100" value="25" hueChange/>
        <br/>
        <Progress min="0" max="100" value="50" hueChange/>
        <br/>
        <Progress min="0" max="100" value="75" hueChange/>
        <p>Without <code>hueChange:</code></p>
        <Progress min="0" max="100" value="75"/>
        <br/>
        <Progress min="0" max="100" value="50"/>
        <br/>
        <Progress min="0" max="100" value="25"/>
        <p>Changing the value will animate the bar. <button onClick={this.handleProgressChange}>Change value</button></p>
        <Progress min="0" max="100" hueChange value={this.state.progressVal}/>
      </Section>
    );
  }
}
