import { useCallback, useEffect, useRef } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import locale from '@fullcalendar/core/locales/zh-cn';
import { Lunar } from 'lunar-javascript';
import moment from 'moment';
import { useModel } from 'umi';
import { useApolloClient } from '@apollo/client';

import yearGridPlugin from '../plugins/yearGridPlugin';
import type { CalendarEventsQuery, CalendarEventsQueryVariables } from '../hooks';
import { CalendarEventsDocument } from '../hooks';
import { isDoubleClick } from '../utils';

import { Card, ContentWrapper } from '@/pages/Metronic/components';

type SuccessCallback = (events: any[]) => void;

function MainCalendar() {
  const fullCalendar = useRef<FullCalendar>(null);

  const client = useApolloClient();

  const loadCalendarEvents = useCallback(
    async ({ variables }: { variables: CalendarEventsQueryVariables }) => {
      const { data } = await client.query<CalendarEventsQuery, CalendarEventsQueryVariables>({
        query: CalendarEventsDocument,
        variables,
        fetchPolicy: 'network-only',
      });
      return (data?.events || []).map((item) => ({
        ...item,
        ...item.datetime,
        backgroundColor: item.color,
      }));
    },
    [client],
  );

  const state = useRef<{
    callback?: SuccessCallback;
    events: Map<string, any>;
    selectedDay?: Date;
  }>({
    events: new Map(),
  });

  const selectedDay = useModel('calendar', (model) => model.state.selectedDay);
  const calendarSet = useModel('calendar', (model) => model.state.calendarSet);
  const setSelectedDay = useModel('calendar', (model) => model.setSelectedDay);

  state.current.selectedDay = selectedDay;

  const handleSelectedDay = useCallback(
    (value: Date) => {
      setSelectedDay((state.current.selectedDay = value));
    },
    [setSelectedDay],
  );

  const handleEventSource = useCallback(
    async (
      arg: { start: Date; end: Date; startStr: string; endStr: string; timeZone: string },
      callback: SuccessCallback,
    ) => {
      state.current.callback = callback;
      const events = await loadCalendarEvents({
        variables: {
          calendarSet: calendarSet == 'all' ? undefined : calendarSet,
          starts: arg.startStr,
          ends: arg.endStr,
        },
      });
      return events;
    },
    [calendarSet, loadCalendarEvents],
  );

  useEffect(() => {
    const calendarApi = fullCalendar.current?.getApi();
    if (!calendarApi) {
      return;
    }
    calendarApi.gotoDate(selectedDay);
  }, [selectedDay]);

  useEffect(() => {
    const calendarApi = fullCalendar.current?.getApi();
    if (!calendarApi) {
      return;
    }
    calendarApi.on('datesSet', (dates) => {
      const mSelectedDay = moment(state.current.selectedDay);
      if (
        !(
          mSelectedDay.isAfter(moment(dates.view.currentStart)) &&
          mSelectedDay.isBefore(dates.view.currentEnd)
        )
      ) {
        setSelectedDay((state.current.selectedDay = dates.view.currentStart));
      }
    });
  }, [setSelectedDay]);

  return (
    <ContentWrapper header={false} footer={false} className="main-calendar">
      <Card>
        <div>
          <FullCalendar
            ref={fullCalendar}
            plugins={[dayGridPlugin, timeGridPlugin, yearGridPlugin, interactionPlugin]}
            locale={locale}
            initialView="dayGridYear"
            headerToolbar={{
              left: 'prev,today,next',
              center: 'title',
              right: 'timeGridDay,timeGridWeek,dayGridMonth,dayGridYear',
            }}
            views={{
              dayGridMonth: {
                dayCellClassNames(item) {
                  const _classnames = [];
                  if (item.isOther) {
                    const prevmont = moment(item.view.currentStart).subtract(1, 'days');
                    const nextmonth = moment(item.view.currentEnd);

                    const prevdays = moment(item.date).diff(moment(prevmont), 'days');
                    const nextdays = moment(item.date).diff(moment(nextmonth), 'days');
                    if (prevdays <= 0 && prevdays >= -6) {
                      _classnames.push('fc-day-prevmonth');
                      if (prevdays == 0 && item.dow != 6) {
                        _classnames.push('fc-day-month-divider');
                      }
                    }
                    if (nextdays >= 0 && nextdays <= 6) {
                      _classnames.push('fc-day-nextmonth');
                      if (nextdays == 0 && item.dow != 0) {
                        _classnames.push('fc-day-month-divider');
                      }
                    }
                  }
                  if (moment(item.date).isSame(moment(selectedDay), 'day')) {
                    _classnames.push('fc-day-selected');
                  }
                  return _classnames;
                },
                dayCellContent(item) {
                  const lunar = Lunar.fromDate(item.date);
                  return (
                    <>
                      <label className="fc-daygrid-day-lunar">
                        {lunar.getDayInChinese()} {lunar.getJieQi()}
                      </label>
                      <label className="fc-daygrid-day-solar">{item.date.getDate()}</label>
                    </>
                  );
                },
                dateClick(event) {
                  if (isDoubleClick(event.dayEl)) {
                    console.log('双击事件', event);
                  } else {
                    handleSelectedDay(event.date);
                  }
                },
              },
              timeGridWeek: {
                dayCellClassNames(item) {
                  const _classnames = [];
                  if (moment(item.date).isSame(moment(selectedDay), 'day')) {
                    _classnames.push('fc-day-selected');
                  }
                  return _classnames;
                },
              },
              dayGridYear: {
                dayCellClassNames(item) {
                  const _classnames = [];
                  if (!item.isOther && moment(item.date).isSame(moment(selectedDay), 'date')) {
                    _classnames.push('fc-day-selected');
                  }
                  if (_classnames.length) {
                    console.log(
                      'classnames',
                      moment(selectedDay).format(),
                      moment(item.date).format(),
                      _classnames,
                    );
                  }
                  return _classnames;
                },
                dateClick(event) {
                  handleSelectedDay(event.date);
                },
              },
            }}
            firstDay={0}
            navLinks={true}
            selectable={true}
            selectMirror={true}
            dateClick={(...args) => {
              console.log('dateClick', args);
            }}
            events={handleEventSource as any}
          />
        </div>
      </Card>
    </ContentWrapper>
  );
}

export default MainCalendar;
