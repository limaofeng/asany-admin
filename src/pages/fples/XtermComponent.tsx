import React, { useCallback, useEffect, useImperativeHandle, useRef } from 'react';

import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

import { sleep } from '@/utils';

export type XtermComponentProps = {};

export type XtermComponentRef = {
  clear: () => void;
  write: (text: string) => void;
};

const XtermComponent = React.forwardRef<XtermComponentRef, XtermComponentProps>((props, ref) => {
  // 声明一个空队列来存储字符串
  const queueRef = useRef<string[]>([]);
  const flag = useRef(true);

  const termRef = useRef<Terminal | null>(null);
  const termElementRef = useRef<HTMLDivElement>(null);

  const typeText = useCallback(async () => {
    while (flag.current) {
      if (!queueRef.current || !termRef.current) {
        continue;
      }
      const queue = queueRef.current;
      const term = termRef.current;
      // 从队列中取出下一个字符串
      const nextText = queue.shift();
      if (!nextText) {
        await sleep(50);
        continue;
      }
      // 将字符串的每个字符逐步添加到输出元素中
      for (let i = 0; i < nextText.length; i++) {
        term.write(nextText[i]);
        if (!flag.current) {
          break;
        }
        await sleep(1);
      }
      term.write('\r\n');
    }
  }, []);

  useEffect(() => {
    const options = {
      theme: {
        background: '#000000', // 背景色为黑色
        foreground: '#00FF00', // 文字颜色为绿色
        cursor: '#00FF00', // 光标颜色为绿色
      },
    };

    const term = new Terminal(options);
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    term.open(termElementRef.current!);

    fitAddon.fit();

    termRef.current = term;

    flag.current = true;
    typeText();
    return () => {
      if (termRef.current) {
        termRef.current.dispose();
      }
      if (queueRef.current) {
        queueRef.current.length = 0;
      }
      flag.current = false;
    };
  }, [typeText]);

  useImperativeHandle(ref, () => ({
    clear() {
      queueRef.current = [];
      flag.current = false;
      setTimeout(() => {
        flag.current = true;
        termRef.current?.reset();
        typeText();
      }, 1000);
    },
    write(text: string) {
      if (!queueRef.current) {
        return;
      }
      const queue = queueRef.current;
      queue.push(text);
    },
  }));

  return <div className="console" ref={termElementRef} />;
});

export default XtermComponent;
