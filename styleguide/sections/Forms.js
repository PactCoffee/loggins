import React, {Component} from 'react';

import Section from './Section';
import EmailMultiInput from 'components/EmailMultiInput/EmailMultiInput';

export default class FormSection extends Component {

  constructor(props) {
    super(props);
    this.state = {emails: []};
    this.emailsChanged = this.emailsChanged.bind(this);
  }

  emailsChanged(emails) {
    this.setState({emails: emails});
  }

  render() {
    return (
      <Section name="Forms">

        <p>An EmailMultiInput:</p>

        <EmailMultiInput emails={this.state.emails} placeholder="Emails" onChange={this.emailsChanged} />
      </Section>
    );
  }
}
