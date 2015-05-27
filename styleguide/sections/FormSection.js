import React from 'react';

import Section from './Section';
import EmailMultiInput from 'components/EmailMultiInput/EmailMultiInput';

export default React.createClass({

  getInitialState() {
    return {emails: []};
  },

  emailsChanged(emails) {
    this.setState({emails: emails});
  },

  render() {
    return (
      <Section name="Forms">

        <p>An EmailMultiInput:</p>

        <EmailMultiInput emails={this.state.emails} placeholder="Emails" onChange={this.emailsChanged} />
      </Section>
    );
  }
});
