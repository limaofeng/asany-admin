import React, { useCallback, useEffect, useImperativeHandle, useRef } from 'react';

import type { EmailTagEditingProps, EmailTagEditingRef } from './typings';

import { sleep } from '@/utils';

// const dataTransfer = new DataTransfer();
// function dispatchPaste(target, text) {
//   dataTransfer.setData('text/plain', text);
//   target.dispatchEvent(
//     new ClipboardEvent('paste', {
//       clipboardData: dataTransfer,
//       bubbles: true,
//       cancelable: true,
//     }),
//   );
//   dataTransfer.clearData();
// }

function EmailTagEditing(
  props: EmailTagEditingProps,
  ref: React.ForwardedRef<EmailTagEditingRef | null>,
) {
  const { value, onChange, onPrev, onNext, onDelete, index, locationTo } = props;
  const input = useRef<HTMLSpanElement>(null);

  const handleBlur = useCallback(async () => {
    const name = input.current!.textContent!;
    if (!name || props.value == name) {
      return;
    }
    await onChange(name);
    return true;
  }, [onChange, props.value]);

  const handleKeyDown = useCallback(
    async (e: React.KeyboardEvent) => {
      // console.log('----=----', e.key, e.ctrlKey, e.metaKey);
      if (e.key == 'Backspace') {
        if (!input.current!.textContent) {
          onDelete();
          e.preventDefault();
          e.stopPropagation();
        }
      } else if (e.key == 'ArrowLeft') {
        const selection = document.getSelection()!;
        const range = selection.getRangeAt(0);
        // console.log(e, selection);
        if (range.startOffset == range.endOffset && range.startOffset == 0) {
          e.preventDefault();
          e.stopPropagation();
          if (await handleBlur()) {
            locationTo(index, 'input');
          } else {
            onPrev();
          }
        }
      } else if (e.key == 'ArrowRight') {
        const selection = document.getSelection()!;
        const range = selection.getRangeAt(0);
        // console.log('range', range.startOffset, range.endOffset);
        if (
          range.startOffset == range.endOffset &&
          range.endOffset == input.current?.textContent?.length
        ) {
          e.preventDefault();
          e.stopPropagation();
          if (!(await handleBlur())) {
            onNext();
          }
        }
      } else if (e.key == 'Enter' || e.key == ';') {
        e.preventDefault();
        e.stopPropagation();
        const name = input.current!.textContent!;
        if (!name) {
          return;
        }
        // console.log('保存', name);
        onChange(name);
      } else if (e.key == 'Escape') {
        const name = input.current!.textContent!;
        if (!name) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        onChange(name);
      } else if ((e.ctrlKey || e.metaKey) && e.key == 'v') {
        e.stopPropagation();
        const text = await navigator.clipboard.readText();
        if (!text) {
          return;
        }
        // console.log('3', input.current?.textContent);
        onChange(input.current!.textContent!);
      }
    },
    [handleBlur, index, locationTo, onChange, onDelete, onNext, onPrev],
  );

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();

    const text = e.clipboardData.getData('text/plain');

    const selection = document.getSelection()!;
    const range = selection.getRangeAt(0);

    const content = input.current!.textContent!;
    const { startOffset, endOffset } = range;
    // console.log('1', startOffset, endOffset, range);

    const newContent = content.substring(0, startOffset) + text + content.substring(endOffset);
    input.current!.textContent = newContent;

    process.nextTick(() => {
      if (!input.current || !input.current.textContent || !input.current.firstChild) {
        return;
      }
      const _index = startOffset + text.length;
      const _range = new Range();
      // console.log('2', input.current!.textContent);
      _range.setStart(input.current!.firstChild!, _index);
      _range.setEnd(input.current!.firstChild!, _index);
      selection.addRange(_range);
    });
  }, []);

  useImperativeHandle(ref, () => ({
    async focus() {
      // console.log('---===--- 2', input.current);
      while (!input.current) {
        await sleep(60);
      }
      input.current!.focus();
    },
    select() {
      if (!input.current!.firstChild || !input.current!.textContent) {
        return;
      }
      window.getSelection()!.removeAllRanges();
      const range = new Range();
      range.selectNodeContents(input.current!);
      range.setStart(input.current!.firstChild!, 0);
      range.setEnd(input.current!.firstChild!, input.current!.textContent!.length);
      window.getSelection()!.addRange(range);
    },
    setValue(v: string) {
      input.current!.textContent = v;
    },
  }));

  useEffect(() => {
    if (input.current && value !== input.current.textContent) {
      input.current.textContent = value || '';
    }
  }, [value]);

  return (
    <span
      ref={input}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      dangerouslySetInnerHTML={{ __html: value! }}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      onBlur={handleBlur}
      contentEditable
      className="standard"
    />
  );
}

export default React.forwardRef(EmailTagEditing);
