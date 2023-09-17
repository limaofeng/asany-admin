import React, { useEffect, useImperativeHandle, useRef } from 'react';

import Typed from 'typed.js';

export type TypedTextProps = {};

export type TypedTextRef = {
  appendText: (text: string) => void;
};

const TypedText = React.forwardRef<TypedTextRef, TypedTextProps>((props, ref) => {
  const typedRef = useRef<Typed | null>(null);

  useImperativeHandle(ref, () => ({
    // 动态追加文本
    appendText(text: string) {
      if (!typedRef.current) {
        return;
      }
      const typed = typedRef.current;

      // typed.strings.push(text);

      // typed.sequence.push(typed.strings.length - 1);

      // console.log(typed.sequence, typed.sequence.strings, typed.arrayPos);
      const outputElement = document.getElementById('typed-strings')!;
      // outputElement.innerHTML += '<p>' + text + '</p>';
      typed.toggle();
    },
  }));

  useEffect(() => {
    const options = {
      stringsElement: '#typed-strings',
      // strings: [
      //   '<span style="color: lime;">user@hostname:~$</span> Welcome to the terminal.',
      //   '<span style="color: lime;">user@hostname:~$</span> Type your commands here.',
      // ],
      typeSpeed: 50,
      backSpeed: 25,
    };

    // 创建 Typed.js 实例并分配给ref
    typedRef.current = new Typed('.typed-text', options);

    // 清理操作：在组件卸载时销毁 Typed.js 实例
    return () => {
      // 通过ref访问typed对象并销毁它
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div id="typed-strings">
        Typed.js is a <strong>JavaScript</strong> library. It <em>types</em> out sentences.
      </div>
      <span className="typed-text output" />;
    </>
  );
});

export default TypedText;
