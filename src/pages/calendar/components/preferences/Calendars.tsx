import { useCallback, useMemo, useRef, useState } from 'react';
import { useEffect } from 'react';

import classnames from 'classnames';
import Icon from '@asany/icons';

import {
  useCalendarSetsQuery,
  useCalendarsQuery,
  useCreateCalendarSetMutation,
  useDeleteCalendarSetMutation,
  useUpdateCalendarSetMutation,
} from '../../hooks';

import type { Calendar, CalendarSet } from '@/types';
import { Checkbox } from '@/pages/Metronic/components';
import { darkenColor, lightenColor } from '@/pages/Metronic/components/utils/color';

type CalendarSetItemProps = {
  actived: boolean;
  editing: boolean;
  data: { id: string; name: string };
  onClick: (id: string) => void;
  onFocus: (id: string) => void;
  onBlur: () => void;
};

function CalendarSetItem(props: CalendarSetItemProps) {
  const { data, editing, actived, onClick, onBlur, onFocus } = props;

  const [updateCalendarSet] = useUpdateCalendarSetMutation();

  const [value, setValue] = useState(data.name);
  const liRef = useRef<HTMLLIElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    onClick(data.id);
  }, [data.id, onClick]);

  const handleDoubleClick = useCallback(() => {
    onFocus(data.id);
  }, [data.id, onFocus]);

  const handleInputFocus = useCallback(() => {
    onFocus(data.id);
  }, [data.id, onFocus]);

  const handleInputBlur = useCallback(async () => {
    onBlur();
    if (data.name != value) {
      await updateCalendarSet({
        variables: {
          id: data.id,
          input: {
            name: value,
          },
        },
      });
    }
  }, [data.id, data.name, onBlur, updateCalendarSet, value]);

  const handleInputChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleKeyUp = useCallback(
    async (e: KeyboardEvent) => {
      if (e.key == 'Enter') {
        onBlur();
        process.nextTick(() => {
          liRef.current?.focus();
        });
        if (data.name != value) {
          await updateCalendarSet({
            variables: {
              id: data.id,
              input: {
                name: value,
              },
            },
          });
        }
      }
    },
    [data.id, data.name, onBlur, updateCalendarSet, value],
  );

  useEffect(() => {
    if (!editing) {
      return;
    }
    inputRef.current?.focus();
    process.nextTick(() => {
      inputRef.current?.select();
    });
  }, [editing]);

  return (
    <li
      tabIndex={0}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      ref={liRef}
      className={classnames({ active: actived, focused: editing })}
    >
      <span className="input-state-view">{value}</span>
      <input
        className="input-state-edit"
        ref={inputRef}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onKeyUp={handleKeyUp as any}
        value={value}
      />
    </li>
  );
}

type CalendarSetsFooterProps = {
  selectedKey: string;
  onSuccess: (calendarSet?: CalendarSet) => void;
};

function CalendarSetsFooter(props: CalendarSetsFooterProps) {
  const { onSuccess, selectedKey } = props;

  const [createCalendarSet] = useCreateCalendarSetMutation();
  const [deleteCalendarSet] = useDeleteCalendarSetMutation();

  const handleNewCalendarSetNew = useCallback(async () => {
    const { data } = await createCalendarSet();
    onSuccess(data?.createCalendarSet as any);
  }, [createCalendarSet, onSuccess]);

  const handleDeleteCalendarSet = useCallback(async () => {
    await deleteCalendarSet({
      variables: {
        id: selectedKey,
      },
    });
    onSuccess();
  }, [deleteCalendarSet, selectedKey, onSuccess]);

  return (
    <div className="calendar-sets-footer">
      <a onClick={handleNewCalendarSetNew}>
        <Icon name="Duotune/arr087" className="svg-icon-2" />
      </a>
      <a onClick={handleDeleteCalendarSet}>
        <Icon name="Duotune/arr089" className="svg-icon-2" />
      </a>
    </div>
  );
}

type CalendarSetsProps = {
  data: CalendarSet[];
  refresh: () => void;
};

function CalendarSets(props: CalendarSetsProps) {
  const { data = [], refresh } = props;

  const [activeKey, setActiveKey] = useState<string>();
  const [editing, setEditing] = useState<string>();

  const handleSelect = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  const handleSuccess = useCallback(
    async (calendarSet?: CalendarSet) => {
      await refresh();
      if (calendarSet) {
        setActiveKey(calendarSet.id);
        setEditing(calendarSet.id);
      } else {
        data.length && setActiveKey(data[0].id);
      }
    },
    [data, refresh],
  );

  const handleFocus = useCallback(async (key: string) => {
    setEditing(key);
  }, []);

  const handleBlur = useCallback(async () => {
    setEditing(undefined);
  }, []);

  return (
    <div className="flex-left calendar-sets">
      <div className="calendar-sets-header">日历集</div>
      <div className="calendar-sets-body scroll-y">
        <ul>
          {data.map((item) => (
            <CalendarSetItem
              actived={activeKey == item.id}
              editing={editing == item.id}
              key={item.id}
              data={item}
              onClick={handleSelect}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          ))}
        </ul>
      </div>
      <CalendarSetsFooter onSuccess={handleSuccess} selectedKey={activeKey!} />
    </div>
  );
}

type CalendarListItemProps = {
  data: Calendar;
  actived: boolean;
  onClick: (id: string) => void;
};

function CalendarListItem(props: CalendarListItemProps) {
  const { data, onClick, actived } = props;

  const [focused, setFocused] = useState(false);

  const handleClick = useCallback(() => {
    onClick(data.id);
  }, [data.id, onClick]);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <li
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      className={classnames('calendar-list-item', { active: actived, focused })}
    >
      <Checkbox
        style={{
          backgroundColor: data.color!,
          borderColor: focused ? lightenColor(data.color!, 80) : darkenColor(data.color!),
        }}
        className="calendar-check"
        size="sm"
      />
      <span className="calendar-name">{data.name}</span>
      <span className="calendar-type">订阅</span>
    </li>
  );
}

function CalendarsFooter() {
  return (
    <div className="calendars-footer">
      <a>
        <Icon name="Duotune/arr087" className="svg-icon-2" />
      </a>
      <a>
        <Icon name="Duotune/arr089" className="svg-icon-2" />
      </a>
    </div>
  );
}

function CalendarList() {
  const { data } = useCalendarsQuery({ fetchPolicy: 'cache-and-network' });

  const [activeKey, setActiveKey] = useState<string>();

  const handleSelect = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  const groups = useMemo(() => {
    if (!data?.calendars) {
      return [];
    }
    const accounts = [];
    for (const calendar of data.calendars) {
      const account = accounts.find((item) => item.id == calendar.account.id);
      if (account == null) {
        accounts.push({ ...calendar.account, calendars: [calendar] });
      } else {
        account.calendars.push(calendar);
      }
    }
    return accounts.sort((l, r) => l.index! - r.index!);
  }, [data]);

  return (
    <div className="calendar-list">
      <div className="calendar-list-notes">“开发计划”日历集的日历和任务列表。</div>
      <div className="calendar-list-content">
        <div className="calendars-header">我的日历</div>
        <div className="calendars-body scroll-y">
          {groups.map((g) => (
            <div className="calendars-group" key={g.id}>
              <div className="calendars-group-header">我的日历</div>
              <div className="calendars-group-body">
                <ul>
                  {g.calendars.map((item) => (
                    <CalendarListItem
                      actived={activeKey == item.id}
                      onClick={handleSelect}
                      key={item.id}
                      data={item as any}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* <div className="calendars-group">
            <div className="calendars-group-header">任务</div>
            <div className="calendars-group-body">
              <ul>
                <CalendarListItem />
                <CalendarListItem />
                <CalendarListItem />
                <CalendarListItem />
                <CalendarListItem />
              </ul>
            </div>
          </div>
          <div className="calendars-group">
            <div className="calendars-group-header">提醒</div>
            <div className="calendars-group-body">
              <ul>
                <CalendarListItem />
              </ul>
            </div>
          </div>
          <div className="calendars-group">
            <div className="calendars-group-header">订阅</div>
            <div className="calendars-group-body">
              <ul>
                <li>xxxxxx 1 </li>
                <li>xxxxxx 2 </li>
                <li>xxxxxx 3 </li>
                <li>xxxxxx 4 </li>
              </ul>
            </div>
          </div>
          <div className="calendars-group">
            <div className="calendars-group-header">通讯录</div>
            <div className="calendars-group-body">
              <ul>
                <li>纪念日</li>
                <li>生日</li>
              </ul>
            </div>
          </div> */}
        </div>
        <CalendarsFooter />
      </div>
    </div>
  );
}

function Calendars() {
  const { data, refetch } = useCalendarSetsQuery();
  const calendarSets = data?.calendarSets;

  return (
    <div className="settings-calendars">
      <div className="settings-calendars-notes">
        通过创建多个日历集快速更改显示的日历和任务列表。例如，您可能有单独的家庭和工作日历集。
      </div>
      <div className="d-flex">
        <CalendarSets data={calendarSets as any} refresh={refetch} />
        <div className="settings-calendars-right flex-root">
          <CalendarList />
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
