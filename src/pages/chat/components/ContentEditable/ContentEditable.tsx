import type { CSSProperties } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';

import useMergedRef from '@react-hook/merged-ref';

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
} & DivProps;

function ContentEditable({ tagName, html, innerRef, ...props }: ContentEditableProps) {
  const el = useRef<HTMLElement>();

  const state = useRef({ html });

  const multiRef = useMergedRef(el, innerRef!);

  useEffect(() => {
    state.current.html = html;
    el.current && replaceCaret(el.current);
  }, [html]);

  const handleEmitChange = useCallback(
    (originalEvt: React.SyntheticEvent<any>) => {
      const lastHtml = state.current.html;
      const _html = el.current!.innerHTML;
      if (!!props.onChange && _html !== lastHtml) {
        const evt = Object.assign({}, originalEvt, {
          target: {
            value: html,
          },
        });
        props.onChange(evt);
      }
      state.current.html = html;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.onChange],
  );

  return React.createElement(
    tagName || 'div',
    {
      ...props,
      ref: multiRef,
      onInput: handleEmitChange,
      onBlur: props.onBlur || handleEmitChange,
      onKeyUp: props.onKeyUp || handleEmitChange,
      onKeyDown: props.onKeyDown || handleEmitChange,
      contentEditable: !props.disabled,
      dangerouslySetInnerHTML: { __html: html },
    } as any,
    props.children,
  );
}

export default ContentEditable;
