import { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import { useModel } from 'umi';
import Icon from '@asany/icons';
import moment from 'moment';

import { Input } from '@/pages/Metronic/components';

function CalendarSidebarHeader() {
  const quicklyEnter = useRef<HTMLInputElement>(null);

  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const selectedDay = useModel('calendar', ({ state }) => state.selectedDay || new Date());
  const isNew = useModel('calendar', (model) => model.state.state == 'new');
  const changeState = useModel('calendar', (model) => model.changeState);

  const handleClose = useCallback(() => {
    changeState('none');
  }, [changeState]);

  const handleFocused = useCallback(() => {
    quicklyEnter.current?.focus();
  }, []);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleLeave = useCallback(() => {
    const mainCalendar = document.getElementsByClassName('main-calendar')[0] as any;
    mainCalendar?.focus();
    handleClose();
    setValue('');
    setFocused(false);
  }, [handleClose]);

  const handleKeyWithEscape = useCallback(
    (e: KeyboardEvent) => {
      e.key == 'Escape' && handleLeave();
    },
    [handleLeave],
  );

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
      if (!e.target.value) {
        handleClose();
        return;
      }
      !isNew && changeState('new', selectedDay);
    },
    [changeState, handleClose, isNew, selectedDay],
  );

  const handleBlur = useCallback(() => {
    if (!!quicklyEnter.current?.value) {
      return;
    }
    handleLeave();
  }, [handleLeave]);

  useEffect(() => {
    if (!isNew) {
      return;
    }
    const domElement = document.activeElement as any;
    const isInputLikeElement =
      !!domElement &&
      (domElement.tagName === 'INPUT' ||
        domElement.tagName === 'SELECT' ||
        domElement.tagName === 'TEXTAREA' ||
        (domElement.contentEditable && domElement.contentEditable === 'true'));
    if (isInputLikeElement) {
      return;
    }
    quicklyEnter.current?.focus();
    setValue(moment(selectedDay).format('YYYY-MM-DD'));
  }, [isNew, selectedDay]);

  return (
    <div
      className={classnames('calendar-event-header', {
        'event-header-state-new': isNew,
      })}
    >
      <div className={classnames('calendar-event-header-left')}>
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={quicklyEnter as any}
          value={value}
          onChange={handleChange}
          size="sm"
          solid
          placeholder="新建日程"
          onKeyUp={handleKeyWithEscape as any}
        />
      </div>
      {focused || isNew ? (
        <a className="calendar-event-header-right" onClick={handleClose}>
          <Icon className="svg-icon-1" name="Duotune/arr088" />
        </a>
      ) : (
        <a className="calendar-event-header-right" onClick={handleFocused}>
          <Icon className="svg-icon-1" name="Duotune/arr087" />
        </a>
      )}
    </div>
  );
}

export default CalendarSidebarHeader;
