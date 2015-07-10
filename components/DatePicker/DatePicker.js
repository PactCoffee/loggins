import React, {PropTypes} from 'react';

export default class DatePicker {
  render() {
    return (
      <p>Datepicker!!</p>
    );
  }
}

DatePicker.PropTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
