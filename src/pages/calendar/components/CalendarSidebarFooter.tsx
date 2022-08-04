import { useCallback, useMemo } from 'react';

import { useModel } from 'umi';

import { Select } from '@/metronic';
import type { OptionData } from '@/metronic/Select/typings';
import type { CalendarSet } from '@/types';

type CalendarSidebarFooterProps = {
  calendarSets: CalendarSet[];
  onAction: (key: string) => void;
};

function CalendarSidebarFooter(props: CalendarSidebarFooterProps) {
  const { calendarSets, onAction } = props;

  const calendarSet = useModel('calendar', (model) => model.state.calendarSet);
  const setCalendarSet = useModel('calendar', (model) => model.setCalendarSet);

  const handleSelect = useCallback(
    (key: string) => {
      if (key.startsWith('calendar-set-')) {
        setCalendarSet(key.substring('calendar-set-'.length));
      } else {
        onAction(key);
        return false;
      }
      return true;
    },
    [onAction, setCalendarSet],
  );

  const options = useMemo(() => {
    return [
      { value: 'calendar-set-all', label: '全部日历' },
      ...calendarSets.map((item) => ({ value: `calendar-set-${item.id}`, label: item.name })),
      { type: 'separator' },
      { value: 'manage-calendars', label: '管理日历' },
    ] as OptionData[];
  }, [calendarSets]);

  return (
    <div className="calendar-sidebar-footer">
      <Select
        onChange={handleSelect}
        placement="topCenter"
        value={`calendar-set-${calendarSet}`}
        options={options}
      />
    </div>
  );
}

export default CalendarSidebarFooter;
