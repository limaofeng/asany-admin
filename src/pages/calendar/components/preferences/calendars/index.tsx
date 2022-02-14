import { useCallback, useState } from 'react';

import { useCalendarSetsQuery } from '../../../hooks';

import CalendarSets from './CalendarSets';
import CalendarList from './CalendarList';

function Calendars() {
  const { data, refetch } = useCalendarSetsQuery({ fetchPolicy: 'cache-and-network' });
  const calendarSets = data?.calendarSets;

  const [selectedKey, setSelectedKey] = useState<string>();

  const handleSelectCalendarSet = useCallback((value: string) => {
    setSelectedKey(value);
  }, []);

  return (
    <div className="settings-calendars">
      <div className="settings-calendars-notes">
        通过创建多个日历集快速更改显示的日历和任务列表。例如，您可能有单独的家庭和工作日历集。
      </div>
      <div className="d-flex">
        <CalendarSets
          onSelect={handleSelectCalendarSet}
          data={calendarSets as any}
          refresh={refetch}
        />
        <div className="settings-calendars-right flex-root">
          <CalendarList
            calendarSet={(calendarSets || []).find((item) => item.id == selectedKey) as any}
          />
          {/* 我的日历 / 任务 / 提醒 / 联系人 */}
          <div className="calendar-sets-settings">
            <ul>
              <li>默认日历</li>
              <li>默认任务列表</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendars;
