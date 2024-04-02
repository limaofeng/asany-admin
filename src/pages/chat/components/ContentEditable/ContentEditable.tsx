import type { CSSProperties } from 'react';
import React from 'react';

import deepEqual from 'fast-deep-equal';

function normalizeHtml(str: string): string {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ');
}

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

/**
 * A simple component for an html element with editable contents.
 */
export default class ContentEditable extends React.Component<Props> {
  lastHtml: string = this.props.html;
  el: any =
    typeof this.props.innerRef === 'function'
      ? { current: null }
      : React.createRef<HTMLElement>();

  getEl = () =>
    (this.props.innerRef && typeof this.props.innerRef !== 'function'
      ? this.props.innerRef
      : this.el
    ).current;

  render() {
    const { tagName, html, innerRef, ...props } = this.props;

    // eslint-disable-next-line react/no-danger-with-children
    return React.createElement(
      tagName || 'div',
      {
        ...props,
        ref:
          typeof innerRef === 'function'
            ? (current: HTMLElement) => {
                innerRef(current);
                this.el.current = current;
              }
            : innerRef || this.el,
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        onKeyUp: this.props.onKeyUp || this.emitChange,
        onKeyDown: this.props.onKeyDown || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: { __html: html },
      },
      this.props.children,
    );
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    const { props } = this;
    const el = this.getEl();

    // We need not rerender if the change of props simply reflects the user's edits.
    // Rerendering in this case would make the cursor/caret jump

    // Rerender if there is no element yet... (somehow?)
    if (!el) return true;

    // ...or if html really changed... (programmatically, not by user edit)
    if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {
      return true;
    }

    // Handle additional properties
    return (
      props.disabled !== nextProps.disabled ||
      props.tagName !== nextProps.tagName ||
      props.className !== nextProps.className ||
      props.innerRef !== nextProps.innerRef ||
      props.placeholder !== nextProps.placeholder ||
      !deepEqual(props.style, nextProps.style)
    );
  }

  componentDidUpdate() {
    const el = this.getEl();
    if (!el) return;

    // Perhaps React (whose VDOM gets outdated because we often prevent
    // rerendering) did not update the DOM. So we update it manually now.
    if (this.props.html !== el.innerHTML) {
      el.innerHTML = this.props.html;
    }
    this.lastHtml = this.props.html;
    replaceCaret(el);
  }

  emitChange = (originalEvt: React.SyntheticEvent<any>) => {
    const el = this.getEl();
    if (!el) return;

    const html = el.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      // Clone event with Object.assign to avoid
      // "Cannot assign to read only property 'target' of object"
      const evt = Object.assign({}, originalEvt, {
        target: {
          value: html,
        },
      });
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  };
}

export type ContentEditableEvent = React.SyntheticEvent<any, Event> & {
  target: { value: string };
};
type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R;
type DivProps = Modify<
  JSX.IntrinsicElements['div'],
  { onChange: (event: ContentEditableEvent) => void }
>;

export interface Props extends DivProps {
  html: string;
  disabled?: boolean;
  tagName?: string;
  className?: string;
  style?: CSSProperties;
  innerRef?: React.RefObject<HTMLElement> | ((e: HTMLElement) => void);
}

// import type { CSSProperties } from 'react';
// import { useReducer } from 'react';
// import React, { useCallback, useEffect, useRef } from 'react';

// import useMergedRef from '@react-hook/merged-ref';
// import { Shortcuts } from '@asany/shortcuts';

// import { contenteditableDivRange, move2end } from '@/utils/open-im/utils/common';

// function replaceCaret(el: HTMLElement) {
//   // Place the caret at the end of the element
//   const target = document.createTextNode('');
//   el.appendChild(target);
//   // do not move caret if element was not focused
//   const isTargetFocused = document.activeElement === el;
//   if (target !== null && target.nodeValue !== null && isTargetFocused) {
//     const sel = window.getSelection();
//     if (sel !== null) {
//       const range = document.createRange();
//       range.setStart(target, target.nodeValue.length);
//       range.collapse(true);
//       sel.removeAllRanges();
//       sel.addRange(range);
//     }
//     if (el instanceof HTMLElement) el.focus();
//   }
// }

// export type ContentEditableEvent = React.SyntheticEvent<any, Event> & { target: { value: string } };
// type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R;
// type DivProps = Modify<
//   JSX.IntrinsicElements['div'],
//   { onChange: (event: ContentEditableEvent) => void }
// >;

// export type ContentEditableProps = {
//   html: string;
//   disabled?: boolean;
//   tagName?: string;
//   className?: string;
//   style?: CSSProperties;
//   innerRef?: React.RefObject<HTMLElement>;
//   onEnter?: (html: string) => void;
// } & DivProps;

// function ContentEditable(
//   { tagName, html, onEnter, onChange, ...props }: ContentEditableProps,
//   innerRef: any,
// ) {
//   const el = useRef<HTMLElement>();

//   const state = useRef({ html });
//   const [, forceRender] = useReducer((s) => s + 1, 0);

//   const multiRef = useMergedRef(el, innerRef);

//   useEffect(() => {
//     state.current.html = html;
//     el.current && replaceCaret(el.current);
//   }, [html]);

//   const handleEmitChange = useCallback(
//     (originalEvt: React.SyntheticEvent<any>) => {
//       const lastHtml = state.current.html;
//       const _html = el.current!.innerHTML;
//       if (!!onChange && _html !== lastHtml) {
//         const evt = Object.assign({}, originalEvt, {
//           target: {
//             value: _html,
//           },
//         });
//         onChange(evt);
//       }
//       state.current.html = _html;
//     },
//     [onChange],
//   );

//   const handleShortcuts = useCallback(
//     (action: string) => {
//       console.log('shortcuts', action, state.current.html);
//       if (action == 'SEND') {
//         if (onEnter) {
//           onEnter(state.current.html);
//         } else {
//           state.current.html = '';
//           forceRender();
//         }
//       } else if (action == 'LINE_FEED') {
//         contenteditableDivRange();
//         move2end(el.current as any);
//       }
//     },
//     [onEnter],
//   );

//   const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//     }
//   }, []);

//   console.log('html', state.current.html);

//   return (
//     <Shortcuts
//       className="content-editable-shortcuts h-100"
//       handler={handleShortcuts}
//       name="CHAT_MESSAGE_INPUT"
//     >
//       {
//         React.createElement(
//           tagName || 'div',
//           {
//             ...props,
//             ref: multiRef,
//             onChange,
//             onInput: handleEmitChange,
//             onBlur: props.onBlur || handleEmitChange,
//             onKeyUp: props.onKeyUp || handleEmitChange,
//             onKeyDown: handleKeyDown,
//             contentEditable: !props.disabled,
//             dangerouslySetInnerHTML: { __html: state.current.html },
//           } as any,
//           props.children,
//         ) as React.ReactElement
//       }
//     </Shortcuts>
//   );
// }

// export default React.memo(React.forwardRef(ContentEditable), (prev, next) => {
//   console.log('ContentEditable', prev, next);
//   return true;
// });
