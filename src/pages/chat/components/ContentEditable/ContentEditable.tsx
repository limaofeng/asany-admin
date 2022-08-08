import type { CSSProperties } from 'react';
import { useReducer } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';

import useMergedRef from '@react-hook/merged-ref';
import { Shortcuts } from '@asany/shortcuts';

import { contenteditableDivRange, move2end } from '@/utils/open-im/utils/common';

function replaceCaret(el: HTMLElement) {
  // Place the caret at the end of the element
  const target = document.createTextNode('');
  el.appendChild(target);
  // do not move caret if element was not focused
  const isTargetFocused = document.activeElement === el;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    const sel = window.getSelection();
    if (sel !== null) {
      const range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (el instanceof HTMLElement) el.focus();
  }
}

export type ContentEditableEvent = React.SyntheticEvent<any, Event> & { target: { value: string } };
type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R;
type DivProps = Modify<
  JSX.IntrinsicElements['div'],
  { onChange: (event: ContentEditableEvent) => void }
>;

export type ContentEditableProps = {
  html: string;
  disabled?: boolean;
  tagName?: string;
  className?: string;
  style?: CSSProperties;
  innerRef?: React.RefObject<HTMLElement>;
  onEnter?: (html: string) => void;
} & DivProps;

function ContentEditable(
  { tagName, html, onEnter, onChange, ...props }: ContentEditableProps,
  innerRef: any,
) {
  const el = useRef<HTMLElement>();

  const state = useRef({ html });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const multiRef = useMergedRef(el, innerRef);

  useEffect(() => {
    state.current.html = html;
    el.current && replaceCaret(el.current);
  }, [html]);

  const handleEmitChange = useCallback(
    (originalEvt: React.SyntheticEvent<any>) => {
      const lastHtml = state.current.html;
      const _html = el.current!.innerHTML;
      if (!!onChange && _html !== lastHtml) {
        const evt = Object.assign({}, originalEvt, {
          target: {
            value: _html,
          },
        });
        onChange(evt);
      }
      state.current.html = _html;
    },
    [onChange],
  );

  const handleShortcuts = useCallback(
    (action: string) => {
      console.log('shortcuts', action, state.current.html);
      if (action == 'SEND') {
        if (onEnter) {
          onEnter(state.current.html);
        } else {
          state.current.html = '';
          forceRender();
        }
      } else if (action == 'LINE_FEED') {
        contenteditableDivRange();
        move2end(el.current as any);
      }
    },
    [onEnter],
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }, []);

  return (
    <Shortcuts
      className="content-editable-shortcuts h-100"
      handler={handleShortcuts}
      name="CHAT_MESSAGE_INPUT"
    >
      {
        React.createElement(
          tagName || 'div',
          {
            ...props,
            ref: multiRef,
            onChange,
            onInput: handleEmitChange,
            onBlur: props.onBlur || handleEmitChange,
            onKeyUp: props.onKeyUp || handleEmitChange,
            onKeyDown: handleKeyDown,
            contentEditable: !props.disabled,
            dangerouslySetInnerHTML: { __html: html },
          } as any,
          props.children,
        ) as React.ReactElement
      }
    </Shortcuts>
  );
}

export default React.forwardRef(ContentEditable);
