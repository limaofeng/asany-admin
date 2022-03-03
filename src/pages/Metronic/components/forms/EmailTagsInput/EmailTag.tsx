import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import EmailTagEditing from './EmailTagEditing';
import type { EmailTagData, EmailTagEditingProps, EmailTagEditingRef } from './typings';
import { mailToString, verifyMail } from './utils';

type EmailTagProps = {
  data: EmailTagData;
  editing: boolean;
  selected: boolean;
  onClick: (data: EmailTagData) => void;
  onDoubleClick: (data: EmailTagData) => void;
  onEnter: () => void;
  onDelete: () => void;
} & EmailTagEditingProps;

function EmailTag(props: EmailTagProps, ref: React.ForwardedRef<EmailTagEditingRef | null>) {
  const {
    data,
    onChange,
    selected,
    onClick,
    onPrev,
    onNext,
    onEnter,
    onDelete,
    onDoubleClick,
    editing,
  } = props;
  const input = useRef<EmailTagEditingRef | any>(null);

  const { invalid = !verifyMail(data.address) } = data;

  // console.log('data', selected, data);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onClick(data);
    },
    [data, onClick],
  );

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onDoubleClick(data);
    },
    [data, onDoubleClick],
  );

  const handleChange = useCallback(
    (name: string) => {
      onChange(name);
    },
    [onChange],
  );

  const value = useMemo(() => mailToString(data), [data]);

  useEffect(() => {
    if (!editing) {
      return;
    }
    input.current?.focus();
    process.nextTick(() => {
      input.current?.select();
    });
  }, [editing]);

  useImperativeHandle(ref, () => ({
    focus() {
      // console.log('---===--- 1', input.current);
      input.current!.focus();
    },
    select() {},
    setValue() {
      // console.log(v);
    },
  }));

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // console.log('handleKeyDown', e.key);
      if (e.key == 'ArrowLeft') {
        onPrev();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == 'ArrowRight') {
        onNext();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == 'Backspace') {
        onDelete();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == 'Enter') {
        onEnter();
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [onDelete, onEnter, onNext, onPrev],
  );

  if (editing) {
    return (
      <EmailTagEditing
        ref={input}
        value={value}
        index={props.index}
        locationTo={props.locationTo}
        onChange={handleChange}
        onPrev={props.onPrev}
        onNext={props.onNext}
      />
    );
  }

  return (
    <span
      tabIndex={-1}
      ref={input}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      className={classnames('email-tag', { selected, invalid })}
    >
      <span className="token-content">{data.name || data.address}</span>
      <Icon name="Duotune/arr071" />
    </span>
  );
}

export default React.forwardRef(EmailTag);
