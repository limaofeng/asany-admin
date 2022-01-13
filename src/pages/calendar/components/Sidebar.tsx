import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import type { DayValue } from 'react-modern-calendar-datepicker';
import { Calendar } from 'react-modern-calendar-datepicker';
import { useModel } from 'umi';
import type { Moment } from 'moment';
import moment from 'moment';

import { useCalendarEventsWithDaysQuery } from '../hooks';

import type { CalendarEvent } from '@/types';
import { AsideWorkspace } from '@/pages/Metronic/components';

type EventWithDay = { key: string; date: Moment; events: CalendarEvent[] };

const zh_CN = {
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
  const selectedDay = useModel('calendar', ({ state }) => state.selectedDay || new Date());
  const calendarSet = useModel('calendar', ({ state }) => state.calendarSet);
  const setSelectedDay = useModel('calendar', (model) => model.setSelectedDay);

  const scrollRef = useRef<HTMLDivElement>(null);

  const state = useRef<{
    eventsWithDays: EventWithDay[];
    version: number;
    timer?: number;
    toDayOrNextEvent?: EventWithDay;
  }>({
    eventsWithDays: [],
    version: 0,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const { data } = useCalendarEventsWithDaysQuery({
    variables: {
      date: selectedDay,
      days: 60,
      calendarSet: calendarSet == 'all' ? undefined : calendarSet,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleChange = useCallback(
    (value: DayValue) => {
      value && setSelectedDay(new Date(value.year, value.month - 1, value.day));
    },
    [setSelectedDay],
  );

  const handleChangeDay = (date: Date) => () => {
    setSelectedDay(date);
  };

  const eventsWithDays = useMemo(() => {
    state.current.version++;
    if (!data?.events) {
      return state.current.eventsWithDays;
    }
    const eventMap = new Map<string, EventWithDay>();
    for (const event of data.events) {
      for (const date of event.dates) {
        const mdate = moment(date);
        const key = mdate.format('YYYY-MM-DD');
        if (eventMap.has(key)) {
          eventMap.get(key)?.events.push(event as any);
        } else {
          eventMap.set(key, { key, date: mdate, events: [event as any] });
        }
      }
    }
    return (state.current.eventsWithDays = Array.from(eventMap.values()).sort(
      (l, r) => l.date.toDate().getTime() - r.date.toDate().getTime(),
    ));
  }, [data?.events]);

  console.log('eventsWithDays', eventsWithDays.length, state.current.version);

  const gotoDate = useCallback((date: Date) => {
    if (!scrollRef.current) {
      return;
    }
    const nodes = Array.from(
      document.getElementsByClassName('event-list-item') as unknown as HTMLElement[],
    );
    const node = nodes.find((item) => moment(item.dataset.date).isSameOrAfter(date));
    if (!node) {
      return;
    }
    const top = node.getBoundingClientRect().top + scrollRef.current.scrollTop;
    const scrollRect = scrollRef.current.getBoundingClientRect();
    scrollRef.current.scrollTo({
      top: top - scrollRect.top - 6,
    });
    state.current.toDayOrNextEvent = state.current.eventsWithDays.find(
      (item) => item.key == node.dataset.date,
    );
    forceRender();
  }, []);

  useEffect(() => {
    gotoDate(selectedDay);
  }, [gotoDate, selectedDay, eventsWithDays]);

  const handleScroll = useCallback((e) => {
    console.log('scroll', e.target.scrollTop);

    // console.log('scroll', 'nodes', nodes);

    clearTimeout(state.current.timer);
    state.current.timer = setTimeout(() => {
      console.log('scroll', '触发查询');
    }, 1000) as unknown as number;
  }, []);

  const { toDayOrNextEvent } = state.current;
  return (
    <AsideWorkspace padding={false}>
      <div className="calendar-sidebar">
        <Calendar
          locale={zh_CN as any}
          value={{
            year: selectedDay.getFullYear(),
            month: selectedDay.getMonth() + 1,
            day: selectedDay.getDate(),
          }}
          onChange={handleChange}
          shouldHighlightWeekends
          colorPrimary="#04c8c8"
        />
        <div className="calendar-day-list">
          <div className="event-list-header">
            <h6>
              {toDayOrNextEvent?.date.format('dddd')}
              <span className="day-subtitle text-muted">
                {toDayOrNextEvent?.date.format('YYYY-MM-DD')}
              </span>
            </h6>
          </div>
          <div
            ref={scrollRef}
            onScrollCapture={handleScroll}
            className="event-list-body hover-scroll-y"
          >
            {eventsWithDays.map(({ key, date, events }) => (
              <div className="event-list-item" key={key} data-date={key}>
                <h6 onClick={handleChangeDay(date.toDate())}>
                  {date.format('dddd')}
                  <span className="day-subtitle text-muted">{date.format('YYYY-MM-DD')}</span>
                </h6>
                <div className="event-list">
                  {events.map((item) => (
                    <span
                      style={{ backgroundColor: item.color! }}
                      className="event-day"
                      key={item.id}
                    >
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AsideWorkspace>
  );
}

export default React.memo(Sidebar);
