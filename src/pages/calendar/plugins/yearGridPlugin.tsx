import { createPlugin } from '@fullcalendar/react';

function DayGridMonth() {
  return (
    <div className="day-grid-month">
      <h3>一月</h3>
      <table>
        <thead>
          <tr>
            <th>周日</th>
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
            <th>周六</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <tr key={item}>
              <td>
                <div className="day-of-month active">0</div>
              </td>
              <td>
                <div className="day-of-month">1</div>
              </td>
              <td>
                <div className="day-of-month">2</div>
              </td>
              <td>
                <div className="day-of-month">3</div>
              </td>
              <td>
                <div className="day-of-month">4</div>
              </td>
              <td>
                <div className="day-of-month">5</div>
              </td>
              <td>
                <div className="day-of-month">6</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DayGridYearView(props: any) {
  // const segs = sliceEvents(props, true); // allDay=true

  /*  const str = formatDate(new Date(), {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });*/

  console.log(props);

  return (
    <div className="fc-daygrid fc-dayGridYear-view fc-view">
      <div className="row">
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
        <div className="col">
          <DayGridMonth />
        </div>
      </div>
    </div>
  );
}

export default createPlugin({
  views: {
    dayGridYear: {
      buttonText: '年',
      duration: { years: 1 },
      titleFormat: (arg: any) => {
        return arg.date.year + '年';
      },
      component: DayGridYearView,
    },
  },
});
