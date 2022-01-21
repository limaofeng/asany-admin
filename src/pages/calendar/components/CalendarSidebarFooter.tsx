import React from 'react';

import Icon from '@asany/icons';

import { useCalendarSetsQuery } from '../hooks';

import { Dropdown, Menu } from '@/pages/Metronic/components';
import type { CalendarSet } from '@/types';

type CalendarActionsProps = {
  calendarSets: CalendarSet[];
};

const CalendarActions = React.forwardRef(function (props: CalendarActionsProps, ref: any) {
  const { calendarSets } = props;
  return (
    <Menu
      className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-auto py-4"
      ref={ref}
    >
      <Menu.Item icon="Duotune/arr085" className="px-3" key="rename">
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

function CalendarSidebarFooter() {
  const { data } = useCalendarSetsQuery();
  const calendarSets = data?.calendarSets || [];

  return (
    <div className="calendar-sidebar-footer">
      <Dropdown
        overlay={<CalendarActions calendarSets={calendarSets as any} />}
        placement="topCenter"
      >
        <a className="current-calendar text-gray-700">
          全部日历
          <Icon className="calendar-pointer" name="Duotune/arr072" />
        </a>
      </Dropdown>
    </div>
  );
}

export default CalendarSidebarFooter;
