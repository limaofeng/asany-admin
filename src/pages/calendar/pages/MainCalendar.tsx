import { useCallback, useEffect, useRef } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import locale from '@fullcalendar/core/locales/zh-cn';

import { useCalendarEventsLazyQuery } from '../hooks';

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
            plugins={[dayGridPlugin, timeGridPlugin]}
            locale={locale}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,today,next',
              center: 'title',
              right: 'timeGridDay,timeGridWeek,dayGridMonth',
            }}
            firstDay={0}
            navLinks={true}
            selectable={true}
            selectMirror={true}
            events={handleEventSource as any}
          />
        </div>
      </Card>
    </ContentWrapper>
  );
}

export default MainCalendar;
