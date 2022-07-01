import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';

import type { DayValue } from '@amir04lm26/react-modern-calendar-date-picker';
import { Calendar } from '@amir04lm26/react-modern-calendar-date-picker';
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import classnames from 'classnames';
import type { Moment } from 'moment';
import moment from 'moment';
import { useModel } from 'umi';

import { useCalendarEventsWithDaysLazyQuery, useCalendarSetsQuery } from '../hooks';

import CalendarSidebarFooter from './CalendarSidebarFooter';
import CalendarSidebarHeader from './CalendarSidebarHeader';
import NewCalendarEvent from './NewCalendarEvent';
import Preferences from './preferences';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Popover } from '@/metronic';
import type { CalendarEvent, CalendarSet } from '@/types';
import { sleep } from '@/utils';

type EventWithDay = {
  key: string;
  date: Moment;
  events: CalendarEvent[];
  isSelected?: boolean;
  isTemporary?: boolean;
  isWeather?: boolean;
  isToDay?: boolean;
};

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

function defaultEventWithDay(today: Moment, eventMap: Map<string, EventWithDay>) {
  // 添加最近七天的数据
  for (let i = 0; i < 7; i++) {
    const day = today.clone().add(i, 'days');
    const key = day.format('YYYY-MM-DD');
    if (eventMap.has(key)) {
      eventMap.get(key)!.isWeather = true;
    } else {
      eventMap.set(key, {
        key,
        date: day,
        events: [],
        isToDay: day.isSame(today, 'date'),
        isWeather: false,
      });
    }
  }
}

function selectedDayEventWithDay(selectedDay: Moment, events: EventWithDay[]) {
  const key = selectedDay.format('YYYY-MM-DD');

  const prevEvent = events.find((item) => item.isSelected);
  if (prevEvent) {
    if (prevEvent.key == key) {
      return events;
    }
    if (prevEvent.isTemporary) {
      events.splice(
        events.findIndex((item) => item.isTemporary),
        1,
      );
    } else {
      events.find((item) => item.isSelected)!.isSelected = false;
    }
  }
  if (!events.some((item) => item.key == key)) {
    events.push({
      key,
      date: selectedDay,
      events: [],
      isToDay: selectedDay.isSame(moment(), 'date'),
      isWeather: false,
      isSelected: true,
      isTemporary: true,
    });
    return events.sort((l, r) => l.date.toDate().getTime() - r.date.toDate().getTime());
  } else {
    events.find((item) => item.key == key)!.isSelected = true;
  }
  return events;
}

function parseEventsWithDays(events: any[], selectedDay: Date) {
  const today = moment();
  const eventMap = new Map<string, EventWithDay>();
  for (const event of events) {
    for (const date of event.dates) {
      const mdate = moment(date);
      const key = mdate.format('YYYY-MM-DD');
      if (eventMap.has(key)) {
        eventMap.get(key)?.events.push(event as any);
      } else {
        eventMap.set(key, {
          key,
          date: mdate,
          isToDay: mdate.isSame(today, 'date'),
          events: [event as any],
          isWeather: false,
        });
      }
    }
  }
  defaultEventWithDay(today, eventMap);
  return selectedDayEventWithDay(
    moment(selectedDay),
    Array.from(eventMap.values()).sort(
      (l, r) => l.date.toDate().getTime() - r.date.toDate().getTime(),
    ),
  );
}

const DEFAULT_CALENDARSETS: CalendarSet[] = [];

function Sidebar() {
  const { data: calendarSetData } = useCalendarSetsQuery();

  const calendarSet = useModel('calendar', ({ state }) => state.calendarSet);
  const isNew = useModel('calendar', (model) => model.state.state == 'new');
  const selectedDay = useModel('calendar', ({ state }) => state.selectedDay || new Date());
  const setSelectedDay = useModel('calendar', (model) => model.setSelectedDay);
  const setNewed = useModel('calendar', (model) => model.changeState);
  const fullCalendar = useModel('calendar', (model) => model.state.fullCalendar);

  const [visiblePreferences, setVisiblePreferences] = useState<boolean>(false);

  const scrollViewRef = useRef<HTMLDivElement>(null);
  const state = useRef<{
    eventsWithDays: EventWithDay[];
    selectedDay?: Date;
    calendarSet?: string | number;
    timer?: number;
    skipNextScroll?: boolean;
    toDayOrNextEvent?: EventWithDay;
  }>({
    selectedDay,
    eventsWithDays: [],
  });

  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.calendarSet = calendarSet;

  const [loadCalendarEventsWithDays, { refetch: refetchCalendarEventsWithDays }] =
    useCalendarEventsWithDaysLazyQuery({
      fetchPolicy: 'cache-and-network',
    });

  const closePreferences = useCallback(() => {
    setVisiblePreferences(false);
  }, []);

  const handleAction = useCallback((key: string) => {
    if (key === 'manage-calendars') {
      setVisiblePreferences(true);
    }
  }, []);

  const handleChange = useCallback(
    (value: DayValue) => {
      value && setSelectedDay(new Date(value.year, value.month - 1, value.day));
    },
    [setSelectedDay],
  );

  const handleChangeDay = useCallback(
    (date: Date) => () => {
      setSelectedDay((state.current.selectedDay = date));
    },
    [setSelectedDay],
  );

  // const eventsWithDays = useMemo(() => {
  //   if (!data?.events) {
  //     return state.current.eventsWithDays;
  //   }
  //   return ();
  // }, [data?.events]);

  const gotoDate = useCallback((date: Date) => {
    if (!scrollViewRef.current) {
      return;
    }
    const nodes = Array.from(
      document.getElementsByClassName('event-list-item') as unknown as HTMLElement[],
    );
    const node = nodes.find((item) => moment(item.dataset.date).isSame(moment(date), 'date'));
    if (!node) {
      return;
    }
    const top = node.getBoundingClientRect().top + scrollViewRef.current.scrollTop;
    const scrollRect = scrollViewRef.current.getBoundingClientRect();
    scrollViewRef.current.scrollTo({
      top: top - scrollRect.top - 6.5,
    });
    state.current.skipNextScroll = true;
    setTimeout(() => {
      clearTimeout(state.current.timer);
    }, 120);
    forceRender();
  }, []);

  useEffect(() => {
    loadCalendarEventsWithDays({
      variables: {
        date: selectedDay,
        days: 60,
        calendarSet: calendarSet == 'all' ? undefined : calendarSet,
      },
    }).then(({ data }) => {
      state.current.eventsWithDays = parseEventsWithDays(
        data?.events || [],
        state.current.selectedDay!,
      );
      state.current.toDayOrNextEvent = state.current.eventsWithDays.find(
        (item) => item.key == moment(state.current.selectedDay).format('YYYY-MM-DD'),
      );
      state.current.skipNextScroll = true;
      forceRender();
      gotoDate(selectedDay);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarSet, loadCalendarEventsWithDays]);

  const updateSelectedDay = useCallback(
    async (_selectedDay: Date) => {
      state.current.selectedDay = _selectedDay;
      state.current.eventsWithDays = selectedDayEventWithDay(
        moment(_selectedDay),
        state.current.eventsWithDays,
      );
      state.current.toDayOrNextEvent = state.current.eventsWithDays.find(
        (item) => item.key == moment(_selectedDay).format('YYYY-MM-DD'),
      );
      state.current.skipNextScroll = true;

      forceRender();
      await sleep(60);

      gotoDate(_selectedDay);

      await sleep(60);

      if (state.current.selectedDay != _selectedDay) {
        return;
      }
      const { data: xdata } = await refetchCalendarEventsWithDays({
        date: _selectedDay,
        days: 60,
        calendarSet: state.current.calendarSet == 'all' ? undefined : state.current.calendarSet,
      });

      state.current.eventsWithDays = parseEventsWithDays(xdata.events, state.current.selectedDay);
      state.current.skipNextScroll = true;
      forceRender();
      await sleep(60);

      if (state.current.selectedDay == _selectedDay) {
        gotoDate(_selectedDay);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    if (
      state.current.selectedDay &&
      moment(state.current.selectedDay).isSame(selectedDay, 'date')
    ) {
      return;
    }
    if (!state.current.eventsWithDays.length) {
      return;
    }
    updateSelectedDay(selectedDay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay]);

  const handleScroll = useCallback(() => {
    if (!scrollViewRef.current) {
      return;
    }
    if (state.current.skipNextScroll) {
      state.current.skipNextScroll = false;
      return;
    }
    // console.log('scrollings');
    const nodes = Array.from(
      document.getElementsByClassName('event-list-item') as unknown as HTMLElement[],
    );
    const scrollRect = scrollViewRef.current.getBoundingClientRect();
    const node = nodes.find((item) => {
      if (item.dataset.temp == 'true') {
        return false;
      }
      const nodeRect = item.getBoundingClientRect();
      const height = item.getElementsByClassName('event-list')[0]!.getBoundingClientRect().height;
      const nodeScrollTop = nodeRect.top - scrollRect.top + height + 16;
      return nodeScrollTop > 0 && nodeScrollTop < nodeRect.height;
    });
    if (!node) {
      return;
    }
    const eventWithDay = state.current.eventsWithDays.find((item) => item.key == node.dataset.date);
    if (!eventWithDay) {
      return;
    }
    state.current.eventsWithDays = state.current.eventsWithDays.filter((item) => !item.isTemporary);
    state.current.eventsWithDays.forEach((item) => {
      item.isSelected = false;
    });
    eventWithDay!.isSelected = true;
    state.current.skipNextScroll = true;
    state.current.toDayOrNextEvent = eventWithDay;
    forceRender();

    clearTimeout(state.current.timer);
    state.current.timer = setTimeout(async () => {
      // console.log('scroll', '触发查询', node.dataset.date);
      const { data: xdata } = await refetchCalendarEventsWithDays({
        date: eventWithDay.date.toDate(),
        days: 60,
        calendarSet: state.current.calendarSet == 'all' ? undefined : state.current.calendarSet,
      });
      state.current.eventsWithDays = parseEventsWithDays(xdata.events, state.current.selectedDay!);
      state.current.skipNextScroll = true;
      forceRender();
    }, 1000) as unknown as number;
    setSelectedDay((state.current.selectedDay = moment(node.dataset.date).toDate()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectedDay]);

  const handleSuccess = useCallback(
    (event: CalendarEvent) => {
      const mainCalendar = document.getElementsByClassName('main-calendar')[0] as any;
      mainCalendar?.focus();
      setNewed('none');
      console.log('fullCalendar', fullCalendar?.getApi());
      fullCalendar?.getApi().refetchEvents();
      updateSelectedDay(new Date(event.datetime.starts));
    },
    [fullCalendar, setNewed, updateSelectedDay],
  );

  const { toDayOrNextEvent, eventsWithDays } = state.current;
  const onDay = eventsWithDays.find((item) => item.key == toDayOrNextEvent?.key);

  return (
    <AsideWorkspace
      width={325}
      collapsible={false}
      resizeable={true}
      className={classnames('calendar-sidebar-bg', { 'state-new-event': isNew })}
    >
      <div className="calendar-sidebar">
        <CalendarSidebarHeader />
        <NewCalendarEvent
          visible={isNew}
          onSuccess={handleSuccess}
          calendarSets={(calendarSetData?.calendarSets as any) || DEFAULT_CALENDARSETS}
        />
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
              {onDay?.isToDay ? '今天' : onDay?.date.format('dddd') || '今天'}
              <span className="day-subtitle text-muted">
                {onDay?.date.format('YYYY-MM-DD') || moment().format('YYYY-MM-DD')}
              </span>
            </h6>
            {!onDay?.events.length && onDay?.isSelected && (
              <div className="onday-no-events text-muted">没有事件</div>
            )}
          </div>
          <div
            ref={scrollViewRef}
            onScrollCapture={handleScroll}
            className="event-list-body hover-scroll-y"
          >
            {eventsWithDays.map(({ key, date, isToDay, events, isSelected, isTemporary }) => (
              <div className="event-list-item" key={key} data-temp={isTemporary} data-date={key}>
                <h6 onClick={handleChangeDay(date.toDate())}>
                  {isToDay ? '今天' : date.format('dddd')}
                  <span className="day-subtitle text-muted">{date.format('YYYY-MM-DD')}</span>
                </h6>
                <div
                  className={classnames('event-list', {
                    ['is-empty']: !events.length,
                    ['onday-no-events']: !events.length && isSelected,
                  })}
                >
                  {events.map((item) => (
                    <Popover key={item.id} content={<div>12312313</div>}>
                      <span
                        style={{ backgroundColor: item.color! }}
                        className="event-day"
                        key={item.id}
                      >
                        {item.title}
                      </span>
                    </Popover>
                  ))}
                  {/* {!events.length && isSelected && 'No Events'} */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <CalendarSidebarFooter
          calendarSets={(calendarSetData?.calendarSets as any) || DEFAULT_CALENDARSETS}
          onAction={handleAction}
        />
      </div>
      <Preferences visible={visiblePreferences} onCancel={closePreferences} />
    </AsideWorkspace>
  );
}

const SidebarMemo = React.memo(Sidebar);

export default SidebarMemo;
