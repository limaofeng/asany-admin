import React, { useCallback, useMemo } from 'react';

import Icon from '@asany/icons';
import { useModel } from 'umi';

import { useCalendarSetsQuery } from '../hooks';

import { Dropdown, Menu } from '@/pages/Metronic/components';
import type { CalendarSet } from '@/types';

type CalendarActionsProps = {
  onAction: (key: string) => void;
  closeDropdown?: () => void;
  calendarSets: CalendarSet[];
};

const CalendarActions = React.forwardRef(function (props: CalendarActionsProps, ref: any) {
  const { calendarSets, closeDropdown, onAction } = props;

  const calendarSet = useModel('calendar', (model) => model.state.calendarSet);
  const setCalendarSet = useModel('calendar', (model) => model.setCalendarSet);

  const handleSelect = useCallback(
    (menu) => {
      closeDropdown!();
      if (menu.key.startsWith('calendar-set-')) {
        setCalendarSet(menu.key.substring('calendar-set-'.length));
      } else {
        onAction(menu.key);
        return false;
      }
      return true;
    },
    [closeDropdown, setCalendarSet, onAction],
  );

  return (
    <Menu
      className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-auto py-4"
      ref={ref}
      onSelect={handleSelect}
      selectedKeys={[`calendar-set-${calendarSet}`]}
    >
      <Menu.Item icon="Duotune/arr085" className="px-3" key="calendar-set-all">
        全部日历
      </Menu.Item>
      {calendarSets.map((item) => (
        <Menu.Item icon="Duotune/arr085" className="px-3" key={`calendar-set-${item.id}`}>
          {item.name}
        </Menu.Item>
      ))}
      <Menu.Separator className="mx-1" />
      <Menu.Item className="px-3" key="manage-calendars">
        管理日历
      </Menu.Item>
    </Menu>
  );
});

type CalendarSidebarFooterProps = {
  onAction: (key: string) => void;
};

const DEFAULT_CALENDARSETS: any[] = [];

function CalendarSidebarFooter(props: CalendarSidebarFooterProps) {
  const { onAction } = props;

  const { data } = useCalendarSetsQuery();
  const calendarSets = data?.calendarSets || DEFAULT_CALENDARSETS;

  const calendarSet = useModel('calendar', (model) => model.state.calendarSet);

  const displayText = useMemo(() => {
    if (calendarSet === 'all') {
      return '全部日历';
    }
    return calendarSets.find((item) => item.id == String(calendarSet))?.name || '未知日历';
  }, [calendarSet, calendarSets]);

  return (
    <div className="calendar-sidebar-footer">
      <Dropdown
        overlay={<CalendarActions onAction={onAction} calendarSets={calendarSets as any} />}
        placement="topCenter"
      >
        <a className="current-calendar text-gray-700">
          {displayText}
          <Icon className="calendar-pointer" name="Duotune/arr072" />
        </a>
      </Dropdown>
    </div>
  );
}

export default CalendarSidebarFooter;
