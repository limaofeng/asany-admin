import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Shortcuts } from '@asany/shortcuts';
import type { AllowDropInfo, ISortableItem, OnDrop, SortableItemProps } from '@asany/sortable';
import Sortable from '@asany/sortable';
import classnames from 'classnames';
import { debounce } from 'lodash';
import { useModel } from 'umi';

import CalendarSetsFooter from './CalendarSetsFooter';

import { useUpdateCalendarSetMutation } from '@/pages/calendar/hooks';
import { getDropPosition } from '@/pages/calendar/utils';
import type { CalendarSet } from '@/types';

interface CalendarSetItemProps extends SortableItemProps<any> {
  actived: boolean;
  editing: boolean;
  index: number;
  data: { id: string; name: string };
  onSelect: (id: string) => void;
  onEdit: (id?: string) => void;
}

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

  const saveCalendarSet = useMemo(
    () =>
      debounce(async (name: string) => {
        await updateCalendarSet({
          variables: {
            id: data.id,
            input: {
              name,
            },
          },
        });
      }, 250),
    [updateCalendarSet, data.id],
  );

  const handleInputBlur = useCallback(async () => {
    onEdit();
    if (data.name != value) {
      await saveCalendarSet(value);
    }
  }, [data.name, onEdit, saveCalendarSet, value]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
          await saveCalendarSet(value);
        }
      }
    },
    [data.name, onEdit, saveCalendarSet, value],
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
          ref={drag(ref) as any}
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
      if (action == 'PREVIOUS') {
        setActiveKey(calendarSets[Math.max(index - 1, 0)].id);
      } else if (action == 'NEXT') {
        setActiveKey(calendarSets[Math.min(index + 1, calendarSets.length - 1)].id);
      } else if (action == 'ENTER') {
        setEditing(activeKey);
      } else if (action == 'EXIT') {
        setEditing(undefined);
      }
    },
    [activeKey],
  );

  const handleSort = useCallback(() => {}, []);

  const items = useMemo(() => {
    return data.map((item) => ({
      ...item,
      key: item.id,
      actived: activeKey == item.id,
      editing: editing == item.id,
    }));
  }, [activeKey, data, editing]);

  const handleDrop: OnDrop = useCallback(
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

  const handleAllowDrag = useCallback((e: ISortableItem) => {
    return temp.current.editing != e.id;
  }, []);

  const handleAllowDrop = useCallback((e: AllowDropInfo) => {
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
          draggable={handleAllowDrag}
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

export default CalendarSets;
