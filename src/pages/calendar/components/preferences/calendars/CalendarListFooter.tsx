import React, { useCallback, useMemo } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';

import { Dropdown, Menu, Modal } from '@/metronic';
import {
  useCalendarAccountsQuery,
  useCreateCalendarMutation,
  useDeleteCalendarMutation,
} from '@/pages/calendar/hooks';
import type { Calendar, CalendarAccount } from '@/types';

type CalendarActionsProps = {
  accounts: CalendarAccount[];
  onAction: (type: 'new' | 'subscribe', key?: string) => void;
  closeDropdown?: () => void;
};

const CalendarActions = React.forwardRef(function (props: CalendarActionsProps, ref: any) {
  const { closeDropdown, onAction, accounts } = props;

  const handleSelect = useCallback(
    (menu) => {
      closeDropdown!();
      if (menu.keyPath.startsWith('new-calendar')) {
        onAction('new', menu.key);
      } else if (menu.keyPath.startsWith('new-calendar-subscription')) {
        onAction('subscribe');
      }
    },
    [closeDropdown, onAction],
  );

  return (
    <Menu
      className="menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-2"
      ref={ref}
      dropdown={true}
      onSelect={handleSelect}
      selectedKeys={[]}
    >
      <Menu.SubMenu
        title="新增日历"
        className="px-2"
        bodyClassName="py-2 w-150px"
        offset={[-6.5, 0]}
        key="new-calendar"
      >
        {accounts.map((account) => (
          <Menu.Item key={account.id} title={account.name!} className="px-2" />
        ))}
      </Menu.SubMenu>
      <Menu.Separator className="mx-1" />
      <Menu.Item className="px-2" key="new-calendar-subscription">
        新增日历订阅
      </Menu.Item>
    </Menu>
  );
});

type CalendarListFooterProps = {
  onSuccess: (calendar?: Calendar) => void;
  selectedItem?: Calendar;
  onEdit: (key: string, type: 'modal' | 'inline') => void;
};

function CalendarListFooter(props: CalendarListFooterProps) {
  const { onSuccess, selectedItem, onEdit } = props;

  const [createCalendar] = useCreateCalendarMutation();
  const [deleteCalendar] = useDeleteCalendarMutation();

  const { data } = useCalendarAccountsQuery({ fetchPolicy: 'cache-and-network' });

  const calendarAccounts = useMemo(() => {
    if (!data?.calendarAccounts) {
      return [];
    }
    return data.calendarAccounts || [];
  }, [data?.calendarAccounts]);

  const handleAction = useCallback(
    async (type: 'new' | 'subscribe', key?: string) => {
      console.log(type, key);
      if (type == 'new') {
        const { data: result } = await createCalendar({
          variables: {
            input: {
              account: key,
            },
          },
        });
        onSuccess(result?.createCalendar as any);
      }
    },
    [createCalendar, onSuccess],
  );

  const handleEditCalendar = useCallback(() => {
    if (!selectedItem) {
      return;
    }
    onEdit(selectedItem.id, 'modal');
  }, [onEdit, selectedItem]);

  const handleDeleteCalendar = useCallback(async () => {
    if (!selectedItem) {
      return;
    }
    const result = await Modal.confirm({
      title: `你确定要删除日历吗？`,
      content: `您确定要删除日历“<strong>${selectedItem.name}</strong>”吗？这也将删除此日历上的所有事件。`,
      okText: '删 除',
      cancelClassName: 'btn btn-secondary btn-sm',
      okClassName: 'btn btn-danger btn-sm',
    });
    if (!result.isConfirmed) {
      return;
    }
    await deleteCalendar({
      variables: {
        id: selectedItem.id,
      },
    });
    onSuccess();
  }, [deleteCalendar, selectedItem, onSuccess]);

  return (
    <div className="calendars-footer">
      <Dropdown
        overlay={<CalendarActions onAction={handleAction} accounts={calendarAccounts as any} />}
        placement="bottomLeft"
      >
        <a>
          <Icon name="Duotune/arr087" className="svg-icon-2" />
        </a>
      </Dropdown>
      <a onClick={handleDeleteCalendar} className={classnames({ disabled: !selectedItem })}>
        <Icon name="Duotune/arr089" className="svg-icon-2" />
      </a>
      <a onClick={handleEditCalendar} className={classnames({ disabled: !selectedItem })}>
        <Icon name="Bootstrap/gear-fill" className="svg-icon-7" />
      </a>
      <Subscribe />
    </div>
  );
}

function Subscribe() {
  return <div />;
}

export default CalendarListFooter;
