import React, { useState } from 'react';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

const zh_CN = {
  // months list by order
  months: [
    '1 月',
    '2 月',
    '3 月',
    '4 月',
    '5 月',
    '6 月',
    '7 月',
    '8 月',
    '9 月',
    '10 月',
    '11 月',
    '12 月',
  ],
  // week days by order
  weekDays: [
    {
      name: '星期天', // used for accessibility
      short: '周日', // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: '星期一',
      short: '周一',
    },
    {
      name: '星期二',
      short: '周二',
    },
    {
      name: '星期三',
      short: '周三',
    },
    {
      name: '星期四',
      short: '周四',
    },
    {
      name: '星期五',
      short: '周五',
    },
    {
      name: '星期六',
      short: '周六',
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: string) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date: any) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date: any) {
    return new Date(date.year, date.month, 0).getDate();
  },
  // return a transformed digit to your locale
  transformDigit(digit: string) {
    return digit;
  },
  // texts in the date picker
  nextMonth: 'Next Month',
  previousMonth: 'Previous Month',
  openMonthSelector: 'Open Month Selector',
  openYearSelector: 'Open Year Selector',
  closeMonthSelector: 'Close Month Selector',
  closeYearSelector: 'Close Year Selector',
  defaultPlaceholder: 'Select...',
  // for input range value
  from: 'from',
  to: 'to',
  // used for input value when multi dates are selected
  digitSeparator: ',',
  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,
  // is your language rtl or ltr?
  isRtl: false,
};

function Sidebar() {
  const [selectedDay, setSelectedDay] = useState<any>(null);
  return (
    <div className="calendar-sidebar">
      <Calendar
        locale={zh_CN as any}
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        colorPrimary="#04c8c8"
      />
      <div className="calendar-day-list px-8">
        <ul>
          <li>
            <h6>
              星期日 <span className="text-muted">2021/12/24</span>
            </h6>
            <div>
              <span>似懂非懂分</span>
            </div>
          </li>
          <li>
            <h6>
              星期日 <span className="text-muted">2021/12/24</span>
            </h6>
            <div>
              <span>似懂非懂分</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
