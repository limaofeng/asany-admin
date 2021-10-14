import type React from 'react';
import { useCallback, useEffect } from 'react';

import * as KTUtil from './KTUtil';

export function useScroll(
  scroll: React.RefObject<HTMLElement>,
  wrapper: React.RefObject<HTMLElement>,
  dependencies: React.RefObject<HTMLElement>[],
) {
  const handleWindowResize = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    let height = KTUtil.getViewPort().height;
    const wrap = wrapper.current!;
    height = height - parseInt(KTUtil.css(wrap, 'margin-top')!, 10);
    height = height - parseInt(KTUtil.css(wrap, 'margin-bottom')!, 10);
    height = height - parseInt(KTUtil.css(wrap, 'padding-top')!, 10);
    height = height - parseInt(KTUtil.css(wrap, 'padding-bottom')!, 10);

    if (KTUtil.css(wrap, 'border-top')) {
      height = height - parseInt(KTUtil.css(wrap, 'border-top')!, 10);
    }

    if (KTUtil.css(wrap, 'border-bottom')) {
      height = height - parseInt(KTUtil.css(wrap, 'border-bottom')!, 10);
    }

    dependencies.forEach((dep) => {
      height -= parseInt(KTUtil.css(dep.current!, 'height')!, 10);
      height -= parseInt(KTUtil.css(dep.current!, 'margin-top')!, 10);
      height -= parseInt(KTUtil.css(dep.current!, 'margin-bottom')!, 10);
    });

    height -= parseInt(KTUtil.css(scroll.current!, 'margin-top')!, 10);
    height -= parseInt(KTUtil.css(scroll.current!, 'margin-bottom')!, 10);

    scroll.current!.style.height = height + 'px';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    const timer = setTimeout(handleWindowResize, 200);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function uuid() {
  const s: string[] = [];
  const hexDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr(((s[19] as any) & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  return s.join('');
}
