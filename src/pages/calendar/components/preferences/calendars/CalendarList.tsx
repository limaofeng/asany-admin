import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Shortcuts } from '@asany/shortcuts';
import type { SortableItemProps } from '@asany/sortable';
import Sortable from '@asany/sortable';
import classnames from 'classnames';
import { debounce } from 'lodash';
import type { ColorResult } from 'react-color';
import { SketchPicker } from 'react-color';
import { useClickAway } from 'react-use';

import CalendarListFooter from './CalendarListFooter';

import type { InputRef, OptionData } from '@/metronic/typings';
import { Checkbox, Form, Input, Modal, Popover, Select } from '@/metronic';
import { darkenColor, lightenColor } from '@/metronic/utils/color';
import {
  useAddCalendarToSetMutation,
  useCalendarsQuery,
  useRemoveCalendarFromSetMutation,
  useUpdateCalendarMutation,
} from '@/pages/calendar/hooks';
import { getDropPosition } from '@/pages/calendar/utils';
import type { Calendar, CalendarSet } from '@/types';

interface CalendarListItemProps extends SortableItemProps<any> {
  data: Calendar;
  actived: boolean;
  checked: boolean;
  editing: boolean;
  onCheck: (id: string, checked: string) => void;
  onSelect: (id: string) => void;
  onEdit: (id?: string, type?: 'modal' | 'inline') => void;
  onShortcut: (action: string) => void;
}

const CalendarListItem = React.forwardRef(function (props: CalendarListItemProps, ref: any) {
  const {
    data,
    onSelect,
    onEdit,
    onCheck,
    editing,
    actived,
    checked,
    drag,
    indicator,
    onShortcut,
  } = props;

  const [value, setValue] = useState(data.name);
  const inputRef = useRef<HTMLInputElement>(null);

  const [updateCalendar] = useUpdateCalendarMutation();

  const handleClick = useCallback(() => {
    onSelect(data.id);
  }, [data.id, onSelect]);

  const handleInputChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  const saveCalendar = useMemo(
    () =>
      debounce(async (name: string) => {
        await updateCalendar({
          variables: {
            id: data.id,
            input: {
              name,
            },
          },
        });
      }, 250),
    [updateCalendar, data.id],
  );

  const handleInputBlur = useCallback(async () => {
    onEdit();
    if (data.name != value) {
      saveCalendar(value);
    }
  }, [data.name, onEdit, saveCalendar, value]);

  const regainFocus = useCallback((_actived: boolean, _editing?: boolean) => {
    if (_editing) {
      inputRef.current?.focus();
      process.nextTick(() => {
        inputRef.current?.select();
      });
    } else if (_actived) {
      inputRef.current?.offsetParent?.parentElement?.parentElement?.focus();
    }
  }, []);

  useEffect(() => {
    if (!editing) {
      return;
    }
    regainFocus(actived, editing);
  }, [actived, editing, regainFocus]);

  const handleVariofocus = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      regainFocus(true);
    },
    [regainFocus],
  );

  const handleChange = useCallback(
    (e: any) => {
      onCheck(data.id, e.target.checked);
    },
    [data, onCheck],
  );

  const handleDoubleClick = useCallback(() => {
    onEdit(data.id, 'modal');
  }, [data.id, onEdit]);

  const handleShortcut = useCallback(
    async (action: string) => {
      if (action == 'EXIT') {
        onEdit();
        setValue(data.name);
      } else if (action == 'ENTER') {
        onEdit();
        if (data.name != value) {
          saveCalendar(value);
        }
      } else {
        onShortcut(action);
      }
    },
    [data.name, onEdit, onShortcut, saveCalendar, value],
  );

  return (
    <Shortcuts
      tag={
        <li
          ref={drag(ref)}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          className={classnames('calendar-list-item', {
            active: actived,
            editing,
            'indicator-drag-over-bottom': indicator > 0,
            'indicator-drag-over-top': indicator < 0,
          })}
        />
      }
      name="CALENDAR_PREFERENCES"
      handler={handleShortcut}
    >
      <Checkbox
        style={{
          backgroundColor: data.color!,
          borderColor: actived ? lightenColor(data.color!, 80) : darkenColor(data.color!),
        }}
        checked={checked}
        onClick={handleVariofocus}
        onChange={handleChange}
        className="calendar-check"
        size="sm"
      />
      <div className="calendar-list-item-btn">
        <span className="input-state-view">{value}</span>
        <input
          className="input-state-edit calendar-name"
          ref={inputRef}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={value}
        />
        {(data as any)._type == 'SUBSCRIPTION' && <span className="calendar-type">订阅</span>}
      </div>
    </Shortcuts>
  );
});

type CalendarListProps = {
  refresh: () => void;
  calendarSet?: CalendarSet;
};

function CalendarList(props: CalendarListProps) {
  const { refresh, calendarSet } = props;

  const [updateCalendar] = useUpdateCalendarMutation();
  const [addCalendarToSet] = useAddCalendarToSetMutation();
  const [removeCalendarFromSet] = useRemoveCalendarFromSetMutation();
  const { data, refetch } = useCalendarsQuery({ fetchPolicy: 'cache-and-network' });

  const [activeKey, setActiveKey] = useState<string>();
  const [editing, setEditing] = useState<{ key?: string; type?: 'modal' | 'inline' }>();
  const [checkedKeys, setCheckedKeys] = useState(
    calendarSet?.calendars.map((item) => item.id) || [],
  );

  const container = useRef<HTMLDivElement>(null);
  const temp = useRef<{
    activeKey?: string;
    editing?: { key?: string; type?: 'modal' | 'inline' };
    calendars: Calendar[];
    checkedKeys: string[];
    calendarSet?: CalendarSet;
  }>({
    checkedKeys: [],
    calendars: [],
  });

  temp.current.checkedKeys = checkedKeys;
  temp.current.activeKey = activeKey;
  temp.current.editing = editing;
  temp.current.calendarSet = calendarSet;
  temp.current.calendars = data?.calendars || ([] as any);

  const regainFocus = useCallback((key?: string) => {
    if (key) {
      setActiveKey(key);
    }
    setEditing(undefined);
    process.nextTick(() => {
      container.current?.focus();
    });
  }, []);

  const handleSelect = useCallback(
    (key: string) => {
      if (key == temp.current.activeKey) {
        return;
      }
      regainFocus(key);
    },
    [regainFocus],
  );

  const handleEdit = useCallback(
    async (key?: string, type: 'modal' | 'inline' = 'modal') => {
      if (!key) {
        regainFocus();
      } else {
        setEditing({ key, type });
      }
    },
    [regainFocus],
  );

  const groups = useMemo(() => {
    if (!data?.calendars) {
      return [];
    }
    const accounts = [];
    for (const calendar of data.calendars) {
      const cloneCalendar = {
        ...calendar,
        key: calendar.id,
        actived: activeKey == calendar.id,
        editing: editing?.key == calendar.id && editing?.type == 'inline',
        checked: checkedKeys.some((key) => key == calendar.id),
        _type: calendar.type,
      };
      delete cloneCalendar.type;
      const account = accounts.find((item) => item.id == calendar.account.id);
      if (account == null) {
        accounts.push({ ...calendar.account, calendars: [cloneCalendar] });
      } else {
        account.calendars.push(cloneCalendar);
      }
    }
    return accounts.sort((l, r) => l.index! - r.index!);
  }, [activeKey, checkedKeys, data?.calendars, editing?.key, editing?.type]);

  const handleSuccess = useCallback(
    async (calendar?: Calendar) => {
      await refetch();
      if (calendar) {
        setActiveKey(calendar.id);
        setEditing({ type: 'inline', key: calendar.id });
      }
    },
    [refetch],
  );

  const handleSort = useCallback(() => {}, []);

  const handleDrop = useCallback(
    async (e: any) => {
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
      await updateCalendar({
        variables: {
          id: e.dragNode.key,
          input: {
            index: Math.max(toIndex, 0) + 1,
          },
        },
      });
      refetch();
    },
    [refetch, updateCalendar],
  );

  const handleAllowDrag = useCallback((e: any) => {
    return temp.current.editing?.key != e.id;
  }, []);

  const handleAllowDrop = useCallback((e: any) => {
    if (isNaN(e.dropPosition)) {
      return false;
    }
    return true;
  }, []);

  const handleShortcut = useCallback(
    (action: string) => {
      const { calendars, activeKey: key } = temp.current;
      const index = calendars.findIndex((item) => item.id == key);
      if (action == 'PREVIOUS') {
        regainFocus(calendars[Math.max(index - 1, 0)].id);
      } else if (action == 'NEXT') {
        setActiveKey(calendars[Math.min(index + 1, calendars.length - 1)].id);
      } else if (action == 'ENTER') {
        setEditing({ key, type: 'inline' });
      } else if (action == 'EXIT') {
        regainFocus();
      }
    },
    [regainFocus],
  );

  const handleModalCancel = useCallback(() => {
    regainFocus();
  }, [regainFocus]);

  const handleCheck = useCallback(
    async (id: string, checked: boolean) => {
      const calendarSetId = temp.current.calendarSet?.id;
      const _checkedKeys = temp.current.checkedKeys;
      console.log('handleChange', id, checked, calendarSetId);
      if (checked) {
        setCheckedKeys([..._checkedKeys, id]);
        await addCalendarToSet({
          variables: {
            id,
            set: calendarSetId,
          },
        });
      } else {
        setCheckedKeys(_checkedKeys.filter((key) => key != id));
        await removeCalendarFromSet({
          variables: {
            id,
            set: calendarSetId,
          },
        });
      }
      refresh();
    },
    [refresh, addCalendarToSet, removeCalendarFromSet],
  );

  useEffect(() => {
    setCheckedKeys(calendarSet?.calendars.map((item) => item.id) || []);
  }, [calendarSet?.calendars]);

  return (
    <Shortcuts
      tag={
        <div
          ref={container}
          className={classnames('calendar-list', {
            editing: !!editing,
          })}
        />
      }
      handler={handleShortcut}
      name="CALENDAR_PREFERENCES"
    >
      <div className="calendar-list-notes">“{calendarSet?.name}”日历集的日历和任务列表。</div>
      <div className="calendar-list-content">
        <div className="calendars-header">我的日历</div>
        <div className="calendars-body scroll-y">
          {groups.map((g) => (
            <div className="calendars-group" key={g.id}>
              <div className="calendars-group-header">我的日历</div>
              <div className="calendars-group-body">
                <Sortable
                  onChange={handleSort}
                  tag="ul"
                  mode="indicator"
                  onDrop={handleDrop}
                  draggable={handleAllowDrag}
                  allowDrop={handleAllowDrop}
                  className="calendar-sets-list"
                  items={g.calendars}
                  rerender={false}
                  itemRender={(_props: any, ref) => {
                    const { data: item, index } = _props;
                    return (
                      <CalendarListItem
                        {..._props}
                        ref={ref}
                        actived={item.actived}
                        editing={item.editing}
                        checked={item.checked}
                        onCheck={handleCheck}
                        key={item.id}
                        data={item}
                        index={index}
                        onSelect={handleSelect}
                        onEdit={handleEdit}
                        onShortcut={handleShortcut}
                      />
                    );
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <CalendarListFooter
          onSuccess={handleSuccess}
          selectedItem={temp.current.calendars.find((item) => item.id == activeKey)}
          onEdit={handleEdit}
        />
      </div>
      <UpdateCalendarModal
        data={temp.current.calendars.find((item) => item.id == activeKey)}
        visible={editing?.type == 'modal'}
        onClose={handleModalCancel}
      />
    </Shortcuts>
  );
}

type UpdateCalendarModalProps = {
  visible: boolean;
  data?: Calendar;
  onClose: () => void;
};

function UpdateCalendarModal(props: UpdateCalendarModalProps) {
  const { onClose, visible, data } = props;

  const [updateCalendar] = useUpdateCalendarMutation();

  const form = Form.useForm();

  const [color, setColor] = useState(data?.color);
  const [visibleColorPicker, setVisibleColorPicker] = useState<boolean>(false);

  const inputRef = useRef<InputRef>(null);
  const sketchPickerRef = useRef<any>(null);

  const colors = useMemo(
    () =>
      [
        { value: '#ff3d33', label: '红色' },
        { value: '#fc8328', label: '橙色' },
        { value: '#ffcc00', label: '黄色' },
        { value: '#63da38', label: '绿色' },
        { value: '#1badf8', label: '蓝色' },
        { value: '#cc73e1', label: '紫色' },
        { value: '#a67a63', label: '棕色' },
        { type: 'separator' },
        { value: 'other', label: '其他' },
      ] as OptionData[],
    [],
  );

  const colorValue = useMemo(() => {
    if (!color) {
      return 'other';
    }
    if (colors.some((item) => item.value == color)) {
      return color;
    }
    return 'other';
  }, [colors, color]);

  useEffect(() => {
    if (!visible) {
      return;
    }
    setColor(data?.color);
    form.setFieldsValue(data);
    inputRef.current?.focus();
    process.nextTick(() => {
      inputRef.current?.select();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useClickAway(sketchPickerRef as any, () => {
    setVisibleColorPicker(false);
  });

  const handleColorChange = useCallback(
    (_color: string) => {
      if (_color == 'other') {
        setVisibleColorPicker(true);
      } else {
        setColor(_color);
      }
    },
    [setColor],
  );

  const handleOk = useCallback(async () => {
    const values = form.getFieldsValue();
    await updateCalendar({
      variables: {
        id: data!.id,
        input: {
          color,
          ...values,
        },
      },
    });
    onClose();
  }, [color, data, form, onClose, updateCalendar]);

  const handleClose = useCallback(() => {
    onClose();
    setVisibleColorPicker(false);
  }, [onClose]);

  const handleChange = useCallback((colorResult: ColorResult) => {
    const { hex } = colorResult;
    setColor(hex);
  }, []);

  return (
    <Modal
      centered
      visible={visible}
      dialogClassName="modal-dialog-concise-style w-400px"
      onCancel={handleClose}
      onOk={handleOk}
      header={false}
      closable={false}
      okButtonProps={{
        className: 'btn-xs',
      }}
      cancelButtonProps={{
        className: 'btn-xs',
      }}
    >
      <Form form={form} layout="horizontal" initialValues={{ ...data }} size="xs">
        <div className="d-flex flex-row flex-center">
          <div className="d-flex flex-column-fluid">
            <Form.Item name="name" label="名称">
              <Input ref={inputRef} className="calendar-name" />
            </Form.Item>
          </div>
          <div className="d-flex flex-column-auto flex-center">
            <div className="asany-form-item">
              <Select
                value={colorValue}
                size="xs"
                onChange={handleColorChange}
                placement="bottomCenter"
                itemRender={(option: OptionData, display?: boolean) => {
                  const _color = option.value == 'other' ? color || data?.color : option.value;
                  if (!_color) {
                    return <></>;
                  }
                  const colorBlock = (
                    <div
                      style={{
                        backgroundColor: _color,
                        width: 20,
                        height: 14,
                        marginRight: 8,
                        border: `1px solid ${darkenColor(_color)}`,
                        display: 'inline-block',
                      }}
                    />
                  );
                  if (display) {
                    return React.cloneElement(colorBlock, {
                      style: { ...colorBlock.props.style, marginRight: 5 },
                    });
                  }
                  return (
                    <>
                      {colorBlock}
                      {option.label}
                    </>
                  );
                }}
                options={colors}
              />
              <Popover
                visible={visibleColorPicker}
                overlayClassName="popover-content-body"
                content={
                  <div ref={sketchPickerRef}>
                    <SketchPicker
                      presetColors={colors
                        .filter((item) => item.value != 'other' && item.type != 'separator')
                        .map((item) => ({ color: item.value!, title: item.label! }))}
                      color={color!}
                      onChangeComplete={handleChange}
                      onChange={handleChange}
                      width={'220px'}
                    />
                  </div>
                }
              >
                <div />
              </Popover>
            </div>
          </div>
        </div>
        {data?.type == 'SUBSCRIPTION' && (
          <>
            <div className="d-flex flex-row flex-center">
              <Form.Item name="url" label="地址">
                <Input />
              </Form.Item>
            </div>
            <div className="d-flex flex-row flex-center">
              <Form.Item name="refresh" label="刷新">
                <Select
                  className="w-100px"
                  placement="bottomCenter"
                  options={[
                    { value: 'NEVER', label: '从不' },
                    { value: 'EVERY_5_MINUTES', label: '每5分钟' },
                    { value: 'EVERY_15_MINUTES', label: '每15分钟' },
                    { value: 'EVERY_HOVER', label: '每小时' },
                    { value: 'EVERY_DAY', label: '每天' },
                    { value: 'EVERY_WEEK', label: '每周' },
                  ]}
                />
              </Form.Item>
            </div>
          </>
        )}
        <div className="d-flex flex-row flex-center">
          <div className="d-flex flex-column-auto flex-center" style={{ width: 56 }} />
          <div className="d-flex flex-column-fluid">
            <Form.Item name="ignoreAlerts" valuePropName="checked">
              <Checkbox label="忽略提醒" />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Modal>
  );
}

export default CalendarList;
