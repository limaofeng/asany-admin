import { useCallback, useMemo } from 'react';

import { useModel } from 'umi';

import { useCalendarSetsQuery } from '../hooks';

import { Select } from '@/pages/Metronic/components';
import type { OptionData } from '@/pages/Metronic/components/forms/Select/typings';

type CalendarSidebarFooterProps = {
  onAction: (key: string) => void;
};

const DEFAULT_CALENDARSETS: any[] = [];

function CalendarSidebarFooter(props: CalendarSidebarFooterProps) {
  const { onAction } = props;

  const { data } = useCalendarSetsQuery();
  const calendarSets = data?.calendarSets || DEFAULT_CALENDARSETS;

  const calendarSet = useModel('calendar', (model) => model.state.calendarSet);
  const setCalendarSet = useModel('calendar', (model) => model.setCalendarSet);

  const handleSelect = useCallback(
    (key) => {
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
