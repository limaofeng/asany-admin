import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import locale from '@fullcalendar/core/locales/zh-cn';

import { Card, ContentWrapper } from '@/pages/Metronic/components';

function MainCalendar() {
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
            navLinks={true}
            selectable={true}
            selectMirror={true}
          />
        </div>
      </Card>
    </ContentWrapper>
  );
}

export default MainCalendar;
