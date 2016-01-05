import React, { Component, PropTypes } from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';

import s from './DatePicker.css';

const weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const weekdaysLong = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const localeUtils = {
  formatMonthTitle: date => moment(date).format('MMMM YYYY'),
  formatWeekdayShort: dayIndex => weekdaysShort[dayIndex],
  formatWeekdayLong: dayIndex => weekdaysLong[dayIndex],
  getFirstDayOfWeek: () => 1,
};

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.renderDay = this.renderDay.bind(this);
  }
  renderDay(day) {
    return (
      <span>{day.getDate()}</span>
    );
  }
  render() {
    return (
      <div className={s.root}>
        <DayPicker
          locale="en-gb"
          enableOutsideDays
          localeUtils={localeUtils}
          renderDay={this.renderDay}
          onDayClick={this.props.onChange}
          {...this.props}
        />
      </div>
    );
  }
}

DatePicker.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
};
