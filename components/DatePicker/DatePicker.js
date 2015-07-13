/* eslint-disable*/

import React, {Component, PropTypes} from 'react';
import {isSameDay} from 'react-day-picker/lib/Utils';
import DayPicker from 'react-day-picker';
import {LocaleUtils} from 'react-day-picker/lib/addons';
import moment from 'moment';

import s from './DatePicker.css';

function cantShip(day) {
  const now = moment();
  const then = moment(day);
  const lastShippable = moment(now).set({
    hour: 15,
    minute: 0,
    second: 0,
    millisecond: 0
  });

  const isBeforeToday = then.isBefore(now);
  const isWeekend = then.isoWeekday() === 6 || then.isoWeekday() === 7;
  const isToday = then.isSame(lastShippable, 'day');

  if (isToday) {
    return now.isAfter(lastShippable);
  } else {
    return isBeforeToday || isWeekend;
  }

  // Return true for the days we want to disable
  return isAfterLastShippable;
}

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  render() {
    const selectedDay = new Date(this.props.value);
    const modifiers = {
      disabled: (day) => cantShip(day),
      selected: (day) => isSameDay(selectedDay, day),
    };

    return (
      <div className={s.root}>
        <DayPicker locale="en-gb"
                   localeUtils={LocaleUtils}
                   modifiers={modifiers}
                   onDayClick={this.handleDayClick}/>
      </div>
    );
  }

  handleDayClick(e, date) {
    if (!cantShip(date)) {
      this.props.onChange(date.getTime());
    }

  }
}

DatePicker.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
