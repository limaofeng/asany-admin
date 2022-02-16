import { useCallback, useEffect, useMemo, useRef } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import locale from '@fullcalendar/core/locales/zh-cn';
import { Lunar } from 'lunar-javascript';
import moment from 'moment';
import { useModel } from 'umi';
import { useApolloClient } from '@apollo/client';
import { Shortcuts } from '@asany/shortcuts';
import { useWindowSize } from 'react-use';

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
    events: Map<string, any>;
    selectedDay?: Date;
    isNew?: boolean;
  }>({
    events: new Map(),
  });

  const isNew = useModel('calendar', (model) => model.state.state == 'new');
  const selectedDay = useModel('calendar', (model) => model.state.selectedDay);
  const calendarSet = useModel('calendar', (model) => model.state.calendarSet);
  const setSelectedDay = useModel('calendar', (model) => model.setSelectedDay);
  const changeState = useModel('calendar', (model) => model.changeState);
  const setFullCalendar = useModel('calendar', (model) => model.setFullCalendar);

  state.current.isNew = isNew;
  state.current.selectedDay = selectedDay;

  const handleSelectedDay = useCallback(
    (value: Date) => {
      setSelectedDay((state.current.selectedDay = value));
    },
    [setSelectedDay],
  );

  const handleNewEvent = useCallback(
    (data: Date) => {
      changeState('new', data);
    },
    [changeState],
  );

  const handleNavLink = useCallback((e) => {
    fullCalendar.current?.getApi().changeView('timeGridDay', new Date(e.target.dataset.date));
  }, []);

  const handleEventSource = useCallback(
    (
      arg: { start: Date; end: Date; startStr: string; endStr: string; timeZone: string },
      callback: SuccessCallback,
    ) => {
      loadCalendarEvents({
        variables: {
          calendarSet: calendarSet == 'all' ? undefined : calendarSet,
          starts: arg.startStr,
          ends: arg.endStr,
        },
      }).then(callback);
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

  const handleMove = useCallback(
    (action: string) => {
      const calendarApi = fullCalendar.current!.getApi();
      switch (action) {
        case 'VIEW_PREV':
          calendarApi.prev();
          break;
        case 'VIEW_NEXT':
          calendarApi.next();
          break;
        case 'MASK_ESC':
          changeState('none');
          break;
      }
    },
    [changeState],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const _isNew = state.current.isNew;
      const $mainCalendar = document.getElementById('kt_wrapper');
      const domElement = document.activeElement as any;
      if (_isNew || $mainCalendar == domElement) {
        return;
      }
      const isInputLikeElement =
        !!domElement &&
        (domElement.tagName === 'INPUT' ||
          domElement.tagName === 'SELECT' ||
          domElement.tagName === 'TEXTAREA' ||
          (domElement.contentEditable && domElement.contentEditable === 'true'));
      if (isInputLikeElement) {
        return;
      }
      if (document.activeElement == document.body) {
        $mainCalendar?.focus();
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const withFullCalendar = useCallback(
    (_fullCalendar: FullCalendar) => {
      (fullCalendar as any).current = _fullCalendar;
      setFullCalendar(_fullCalendar);
    },
    [setFullCalendar],
  );

  const size = useWindowSize();

  const contentHeight = useMemo(() => {
    return Math.max(806, size.height - 165);
  }, [size.height]);

  return (
    <Shortcuts
      tag={<ContentWrapper header={false} footer={false} mask={isNew} className="main-calendar" />}
      name="CALENDAR"
      handler={handleMove}
    >
      <Card>
        <FullCalendar
          ref={withFullCalendar}
          plugins={[dayGridPlugin, timeGridPlugin, yearGridPlugin, interactionPlugin]}
          locale={locale}
          initialView="dayGridMonth"
          customButtons={{
            customToDay: {
              text: '今天',
              click: function () {
                setSelectedDay(new Date());
              },
            },
          }}
          headerToolbar={{
            left: 'prev,customToDay,next',
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
                    <label
                      className="fc-daygrid-day-solar"
                      data-date={moment(item.date).format()}
                      onClick={handleNavLink}
                    >
                      {item.date.getDate()}
                    </label>
                  </>
                );
              },
              dateClick(event) {
                if (isDoubleClick(event.dayEl)) {
                  handleNewEvent(event.date);
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
                return _classnames;
              },
              dateClick(event) {
                handleSelectedDay(event.date);
              },
            },
          }}
          aspectRatio={3}
          firstDay={0}
          contentHeight={contentHeight}
          nowIndicator={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          dateClick={(...args) => {
            console.log('dateClick', args);
          }}
          events={handleEventSource as any}
        />
      </Card>
    </Shortcuts>
  );
}

export default MainCalendar;
