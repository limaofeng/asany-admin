import { useCallback, useEffect, useRef } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import locale from '@fullcalendar/core/locales/zh-cn';
import { Lunar } from 'lunar-javascript';
import moment from 'moment';

import yearGridPlugin from '../plugins/yearGridPlugin';
import { useCalendarEventsLazyQuery } from '../hooks';
import { isDoubleClick } from '../utils';

import { Card, ContentWrapper } from '@/pages/Metronic/components';

type SuccessCallback = (events: any[]) => void;

function MainCalendar() {
  const [loadCalendarEvents, { data }] = useCalendarEventsLazyQuery();
  const state = useRef<{ callback?: SuccessCallback; events: Map<string, any> }>({
    events: new Map(),
  });

  const setEvents = useCallback((events: any[]) => {
    if (!state.current.callback) {
      return;
    }
    const apendEvents = events.map((item) => ({
      ...item,
      ...item.datetime,
      backgroundColor: item.color,
    }));
    for (const event of apendEvents) {
      state.current.events.set(event.id, event);
    }
    state.current.callback(Array.from(state.current.events.values()));
  }, []);

  const handleEventSource = useCallback(
    (
      arg: { start: Date; end: Date; startStr: string; endStr: string; timeZone: string },
      callback: SuccessCallback,
    ) => {
      state.current.callback = callback;
      loadCalendarEvents({
        variables: {
          starts: arg.startStr,
          ends: arg.endStr,
        },
      }).then((_d) => {
        setEvents(_d.data?.events || []);
      });
    },
    [loadCalendarEvents, setEvents],
  );

  useEffect(() => {
    if (!data?.events) {
      return;
    }
    setEvents(data.events || []);
  }, [data?.events, setEvents]);

  return (
    <ContentWrapper header={false} footer={false} className="main-calendar">
      <Card>
        <div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, yearGridPlugin, interactionPlugin]}
            locale={locale}
            initialView="dayGridMonth"
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
                    console.log('单击事件', event);
                  }
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
