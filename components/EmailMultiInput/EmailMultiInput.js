import React, { Component } from 'react';
import TagInput from 'react-tagsinput';
import { backspace, tab, enter, del, comma } from '../../util/keyCodes';

import s from './EmailMultiInput.css';

const MATCHER = /[^\s@,]+@[^\s,@]+\.[^\s@,]+/;

export default class EmailMultiInput extends Component {
  constructor(props) {
    super(props);

    this.validateEmail = this.validateEmail.bind(this);
    this.handleContainerClick = this.handleContainerClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(input) {
    return MATCHER.test(input);
  }

  handleChange(tags, addedOrRemovedTag) {
    if (tags.indexOf(addedOrRemovedTag) !== -1) {
      // Tag was added
      const validEmails = addedOrRemovedTag
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => this.props.emails.indexOf(tag) === -1)
        .sort()
        .filter((tag, pos, ary) => !pos || tag !== ary[pos - 1])
        .filter(tag => MATCHER.test(tag));

      this.props.onChange(
        this.props.emails.concat(validEmails)
      );
    } else {
      // Tag was removed
      this.props.onChange(
        tags.filter(email => email !== addedOrRemovedTag)
      );
    }
  }

  handleContainerClick(e) {
    if (!e.target.classList.contains('react-tagsinput-remove')) {
      this.refs.input.focus();
    }
  }

  render() {
    return (
      <div className={s.root} onClick={this.handleContainerClick}>
        <TagInput
          ref="input"
          value={this.props.emails}
          placeholder={this.props.placeholder}
          validate={this.validateEmail}
          addKeys={[tab, enter, comma]}
          removeKeys={[backspace, del]}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

EmailMultiInput.propTypes = {
  emails: React.PropTypes.array.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};
