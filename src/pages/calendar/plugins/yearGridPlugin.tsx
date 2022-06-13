import { useCallback, useMemo } from 'react';

import type {
  CalendarApi,
  ClassNamesGenerator,
  DayCellContentArg,
  Identity,
  ViewOptionsRefined,
  ViewProps,
} from '@fullcalendar/common';
import { DateComponent } from '@fullcalendar/common';
import type { DateClickArg } from '@fullcalendar/interaction';
import type { EventRenderRange } from '@fullcalendar/react';
import { createPlugin, sliceEvents } from '@fullcalendar/react';
import classnames from 'classnames';
import type { Moment } from 'moment';
import moment from 'moment';

type DayData = {
  key: string;
  dayNumberText: string;
  isOther: boolean;
  isPast: boolean;
  isFuture: boolean;
  date: Moment;
};

type MonthData = {
  key: string;
  title: string;
  date: Moment;
  days: DayData[];
};

type DayGridMonthProps = {
  api: CalendarApi;
  month: MonthData;
  events: EventRenderRange[];
  stat: {
    dates: Map<
      string,
      {
        number: number;
        events: EventRenderRange[];
      }
    >;
    max: number;
  };
  dateClick: Identity<(arg: DateClickArg) => void>;
  dayCellClassNames: Identity<ClassNamesGenerator<DayCellContentArg>>;
};

function DayGridMonth(props: DayGridMonthProps) {
  const { month, stat, dateClick, dayCellClassNames, api } = props;
  const days = month.days;

  const getEventNumber = useCallback(
    (day: Moment) => {
      const key = day.format('YYYYMMDD');
      if (!stat.dates.has(key)) {
        return 0;
      }
      return stat.dates.get(key)?.number || 0;
    },
    [stat],
  );

  const handleClick = (item: DayData) => () => {
    dateClick({ ...item, date: item.date.toDate() } as any);
    api.gotoDate(item.date.toDate());
  };

  return (
    <div className="day-grid-month">
      <h3>{month.title}</h3>
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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <tr key={i}>
              {days.slice((i - 1) * 7, i * 7).map((item) => {
                const eventNumber = getEventNumber(item.date);
                return (
                  <td key={item.key}>
                    <div
                      onClick={handleClick(item)}
                      className={classnames(
                        'day-of-month',
                        {
                          'is-other': item.isOther,
                          [`event-color-level-${stat.max == 1 ? 2 : eventNumber}`]:
                            !item.isOther && eventNumber > 0,
                          'is-today': !item.isOther && moment().isSame(item.date, 'date'),
                        },
                        dayCellClassNames({
                          ...item,
                          date: item.date.toDate(),
                        } as any),
                      )}
                    >
                      {item.dayNumberText}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type DayGridYearProps = ViewProps & {
  api: CalendarApi;
  options: ViewOptionsRefined;
};

function DayGridYear(props: DayGridYearProps) {
  const {
    api,
    options: { dayCellClassNames, dateClick },
    dateProfile: {
      currentRange: { start, end },
    },
  } = props;

  const months: MonthData[] = useMemo(() => {
    const _months = [];
    const ms = moment(end).diff(moment(start), 'months');
    for (let i = 0; i < ms; i++) {
      const m = moment(start).clone().month(i);
      const _month: MonthData = {
        key: m.format('YYYYMM'),
        title: m.format('MMMM'),
        date: m,
        days: [],
      };
      _months.push(_month);
      const mstart = m.clone().date(1);
      const cstart = mstart.clone().day(0);
      for (let j = 0; j < 42; j++) {
        const day = cstart.clone().add(j, 'days');
        const _dif = day.clone().date(1).diff(mstart, 'months');
        _month.days.push({
          key: day.format('YYYYMMDD'),
          date: day,
          isPast: _dif < 0,
          isFuture: _dif > 0,
          isOther: _dif != 0,
          dayNumberText: day.date() + '',
        });
      }
    }
    return _months;
  }, [start, end]);

  const events = sliceEvents(props as any, true);

  const stat = useMemo(() => {
    let max = 1;
    const dates = new Map<string, { number: number; events: EventRenderRange[] }>();
    for (const event of events) {
      const mstart = moment(event.range.start);
      let days = moment(event.range.end).diff(mstart, 'day');
      do {
        const key = mstart.format('YYYYMMDD');
        if (dates.has(key)) {
          const number = dates.get(key)!.number! + 1;
          max = Math.max(max, number);
          dates.set(key, { number, events: [...dates.get(key)!.events, event] });
        } else {
          dates.set(key, { number: 1, events: [event] });
        }
        mstart.add(1, 'days');
      } while (--days > 0);
    }
    return { dates, max };
  }, [events]);

  return (
    <div className="fc-daygrid fc-dayGridYear-view fc-view">
      {/* <NowTimer unit="day">
        {(nowDate: DateMarker, todayRange: DateRange) => {
          console.log('day', nowDate, todayRange);
          return <div />;
        }}
      </NowTimer> */}
      {[1, 2, 3].map((i) => {
        return (
          <div key={`${(i - 1) * 4}-${i * 4}`} className="row">
            {months.slice((i - 1) * 4, i * 4).map((item) => (
              <div className="col" key={item.key}>
                <DayGridMonth
                  api={api}
                  stat={stat}
                  dateClick={dateClick as any}
                  dayCellClassNames={dayCellClassNames as any}
                  month={item}
                  events={events}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

class YearView extends DateComponent<ViewProps> {
  render() {
    const { calendarApi, options } = this.context;
    return <DayGridYear {...this.props} api={calendarApi} options={options} />;
  }
}

const dayGridYearPlugin = createPlugin({
  views: {
    dayGridYear: {
      buttonText: '年',
      duration: { years: 1 },
      titleFormat: (arg: any) => {
        return arg.date.year + '年';
      },
      component: YearView,
    },
  },
});

export default dayGridYearPlugin;
