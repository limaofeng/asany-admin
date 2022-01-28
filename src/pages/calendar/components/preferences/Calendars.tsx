import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import classnames from 'classnames';
import Icon from '@asany/icons';
import { Shortcuts } from '@asany/shortcuts';
import type { SortableItemProps } from '@asany/sortable';
// import { useSortableSelector } from '@asany/sortable';
import Sortable from '@asany/sortable';
import { useModel } from 'umi';

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

interface CalendarSetItemProps extends SortableItemProps<any> {
  actived: boolean;
  editing: boolean;
  index: number;
  data: { id: string; name: string };
  onSelect: (id: string) => void;
  onEdit: (id?: string) => void;
}

// function getDropPosition(rect: any, node: any, drop: any, indicator: number, index: number) {
//   const interval = rect.height / 3 / 2;
//   const inner = indicator < interval && indicator > -interval && drop?.parentKey !== node.id;
//   if (inner) {
//     return index;
//   }
//   if (indicator > 0) {
//     return index + 1;
//   }
//   if (indicator < 0) {
//     return index - 1;
//   }
//   return NaN;
// }

const CalendarSetItem = React.forwardRef(function (props: CalendarSetItemProps, ref: any) {
  const { data, editing, actived, onSelect, onEdit, drag, indicator /*, index*/ } = props;

  const [updateCalendarSet] = useUpdateCalendarSetMutation();

  const [value, setValue] = useState(data.name);
  const inputRef = useRef<HTMLInputElement>(null);
  // const dragging = useSortableSelector((state) => state.dragging);

  const handleClick = useCallback(() => {
    onSelect(data.id);
  }, [data.id, onSelect]);

  const handleDoubleClick = useCallback(() => {
    onEdit(data.id);
  }, [data.id, onEdit]);

  const handleInputBlur = useCallback(async () => {
    // onBlur();
    onEdit();
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
  }, [data.id, data.name, onEdit, updateCalendarSet, value]);

  const handleInputChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (!editing) {
      return;
    }
    inputRef.current?.focus();
    process.nextTick(() => {
      inputRef.current?.select();
    });
  }, [editing]);

  const handleShortcut = useCallback(
    async (action: string) => {
      if (action == 'EXIT') {
        onEdit();
        setValue(data.name);
      } else if (action == 'ENTER') {
        onEdit();
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
    [data.id, data.name, onEdit, updateCalendarSet, value],
  );

  // const dropPosition = useMemo(() => {
  //   if (!ref.current?.getBoundingClientRect()) {
  //     return NaN;
  //   }
  //   return getDropPosition(ref.current?.getBoundingClientRect(), data, dragging, indicator, index);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [index, indicator]);

  // console.log('dropPosition', dropPosition);

  return (
    <Shortcuts
      tag={
        <li
          ref={drag(ref)}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          className={classnames('calendarset-item', {
            active: actived,
            'indicator-drag-over-bottom': indicator > 0,
            'indicator-drag-over-top': indicator < 0,
          })}
        />
      }
      name="CALENDAR_PREFERENCES"
      handler={handleShortcut}
    >
      <div className="calendarset-item-btn">
        <span className="input-state-view">{value}</span>
        <input
          className="input-state-edit"
          ref={inputRef}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={value}
        />
      </div>
    </Shortcuts>
  );
});

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
  onSelect: (value: string) => void;
  refresh: () => void;
};

function CalendarSets(props: CalendarSetsProps) {
  const { data = [], refresh, onSelect } = props;

  const [updateCalendarSet] = useUpdateCalendarSetMutation();

  const defaultCalendarSetbyModel = useModel('calendar', (model) => model.state.calendarSet);

  const container = useRef<HTMLDivElement>(null);
  const temp = useRef<{ activeKey?: string; editing?: string; calendarSets: CalendarSet[] }>({
    calendarSets: [],
  });
  const [activeKey, setActiveKey] = useState<string>();
  const [editing, setEditing] = useState<string>();

  temp.current.activeKey = activeKey;
  temp.current.editing = editing;
  temp.current.calendarSets = data;

  const handleSelect = useCallback((key: string) => {
    if (key == temp.current.activeKey) {
      return;
    }
    setActiveKey(key);
    process.nextTick(() => {
      container.current?.focus();
    });
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

  const handleEdit = useCallback(async (key?: string) => {
    setEditing(key);
    if (!key) {
      process.nextTick(() => {
        container.current?.focus();
      });
    }
  }, []);

  console.log(activeKey, editing);

  useEffect(() => {
    if (!data.length) {
      return;
    }
    if (!data.some((item) => item.id == activeKey)) {
      const key =
        defaultCalendarSetbyModel == 'all' ? data[0].id : String(defaultCalendarSetbyModel);
      setActiveKey(key);
    }
  }, [activeKey, data, defaultCalendarSetbyModel]);

  useEffect(() => {
    if (!activeKey) {
      return;
    }
    onSelect(activeKey);
  }, [activeKey, onSelect]);

  const handleShortcut = useCallback(
    (action: string) => {
      const { calendarSets, activeKey: key } = temp.current;
      const index = calendarSets.findIndex((item) => item.id == key);
      if (action == 'NEXT') {
        setActiveKey(calendarSets[Math.max(index - 1, 0)].id);
      } else if (action == 'PREVIOUS') {
        setActiveKey(calendarSets[Math.min(index + 1, calendarSets.length - 1)].id);
      } else if (action == 'ENTER') {
        setEditing(activeKey);
      } else if (action == 'EXIT') {
        setEditing(undefined);
      }
    },
    [activeKey],
  );

  console.log('items', data);

  const handleSort = useCallback(() => {}, []);

  const items = useMemo(() => {
    return data.map((item) => ({
      ...item,
      key: item.id,
      actived: activeKey == item.id,
      editing: editing == item.id,
    }));
  }, [activeKey, data, editing]);

  const handleDrop = useCallback(
    async (e) => {
      const _dropPosition = getDropPosition(
        e.node._rect,
        e.node,
        e.dragNode,
        e.dropPosition,
        e.node.index,
      );
      const dropPos = e.node.pos;
      const dropPosition = _dropPosition - Number(dropPos[dropPos.length - 1]);

      let toIndex = e.node.index;
      if (dropPosition == -1) {
        toIndex--;
      } else if (dropPosition == 1) {
        toIndex++;
      }
      await updateCalendarSet({
        variables: {
          id: e.dragNode.key,
          input: {
            index: Math.max(toIndex, 0) + 1,
          },
        },
      });
      refresh();
    },
    [refresh, updateCalendarSet],
  );

  const handleAllowDrop = useCallback((e) => {
    if (isNaN(e.dropPosition)) {
      return false;
    }
    return true;
  }, []);

  return (
    <Shortcuts
      tag={
        <div
          ref={container}
          className={classnames('flex-left calendar-sets', {
            editing: !!editing,
          })}
        />
      }
      name="CALENDAR_PREFERENCES"
      handler={handleShortcut}
    >
      <div className="calendar-sets-header">日历集</div>

      <div className="calendar-sets-body scroll-y">
        <Sortable
          onChange={handleSort}
          tag="ul"
          mode="indicator"
          draggable={true}
          onDrop={handleDrop}
          allowDrop={handleAllowDrop}
          className="calendar-sets-list"
          items={items}
          rerender={false}
          itemRender={(_props: any, ref) => {
            const { data: item, index } = _props;

            return (
              <CalendarSetItem
                {..._props}
                ref={ref}
                actived={item.actived}
                editing={item.editing}
                key={item.id}
                data={item}
                index={index}
                onSelect={handleSelect}
                onEdit={handleEdit}
              />
            );
          }}
        />
      </div>
      <CalendarSetsFooter onSuccess={handleSuccess} selectedKey={activeKey!} />
    </Shortcuts>
  );
}

type CalendarListItemProps = {
  data: Calendar;
  actived: boolean;
  checked: boolean;
  onClick: (id: string) => void;
};

function CalendarListItem(props: CalendarListItemProps) {
  const { data, onClick, actived, checked } = props;

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

  const handleChange = useCallback(() => {}, []);

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
        checked={checked}
        onChange={handleChange}
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

type CalendarListProps = {
  calendarSet?: CalendarSet;
};

function CalendarList(props: CalendarListProps) {
  const { calendarSet } = props;

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
      <div className="calendar-list-notes">“{calendarSet?.name}”日历集的日历和任务列表。</div>
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
                      checked={!!calendarSet?.calendars.some((c) => c.id == item.id)}
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

function getDropPosition(rect: any, node: any, drop: any, indicator: number, index: number) {
  const interval = rect.height / 3 / 2;
  const inner = indicator < interval && indicator > -interval && drop?.parentKey !== node.id;
  if (inner) {
    return index;
  }
  if (indicator > 0) {
    return index + 1;
  }
  if (indicator < 0) {
    return index - 1;
  }
  return NaN;
}

export default Calendars;
