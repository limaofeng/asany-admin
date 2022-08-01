import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import type { Dictionary } from 'lodash';
import { clone, isEqual, uniq, zipObject } from 'lodash';

import { fileSize } from './format';
import * as KTUtil from './KTUtil';

import { sleep } from '@/utils';

export function useScroll(
  scroll: React.RefObject<HTMLElement>,
  wrapper: React.RefObject<HTMLElement>,
  dependencies: React.RefObject<HTMLElement>[],
) {
  const handleWindowResize = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    let height = KTUtil.getViewPort().height!;
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

export function isOverlap(node1: HTMLElement, node2: HTMLElement) {
  const rect1 = node1.getBoundingClientRect();
  const rect2 = node2.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

type AutoSaveOptions = {
  equal?: (l: any, r: any) => boolean;
  afterDelay?: number;
};

export type AutoSaveCallback<T> = (
  changedValues: Dictionary<T>,
  allValues: T,
) => void | Promise<void>;

export function diff<T>(lvalue: T, rvalue: T): Dictionary<T> {
  if (isEqual(lvalue, rvalue)) {
    return {};
  }
  const keys = uniq(Object.keys(lvalue).concat(Object.keys(rvalue))).filter(
    (key) => !isEqual(lvalue[key], rvalue[key]),
  );
  const values = keys.map((key) => rvalue[key]);
  return zipObject(keys, values);
}

export type AutoSaveFunc<T> = (value: T) => void;

export type AutoSaveState<T> = {
  values: T;
  saving: boolean;
  running: boolean;
};

export function useAutoSave<T>(
  callback: AutoSaveCallback<T>,
  ovalue: T,
  options?: AutoSaveOptions,
): [AutoSaveFunc<T>, boolean] {
  const { equal = isEqual, afterDelay = 1000 } = options || {};

  const state = useRef<AutoSaveState<T>>({
    values: clone(ovalue),
    saving: false,
    running: false,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.values = clone(ovalue);

  const autoSaveFunc = useMemo(() => {
    let lazy: NodeJS.Timeout;

    return async (value: T) => {
      while (state.current.running) {
        await sleep(240);
      }
      clearTimeout(lazy);
      if (equal(state.current.values, value)) {
        state.current.saving = false;
        return;
      }
      // 开始保存
      state.current.saving = true;
      forceRender();
      lazy = setTimeout(async () => {
        try {
          state.current.running = true;
          await callback(diff<T>(state.current.values, value), value);
          state.current.values = clone(value);
        } finally {
          state.current.running = false;
          state.current.saving = false;
          forceRender();
        }
      }, afterDelay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [autoSaveFunc, state.current.saving];
}

export function unpack(children: any): any[] {
  if (!children) {
    return [];
  }
  const newChildren = [];
  const originalChildren: any[] = React.Children.toArray(children);
  for (const child of originalChildren) {
    if (!child) {
      continue;
    }
    if (child.type === React.Fragment) {
      newChildren.push(...unpack(child.props.children));
    } else {
      newChildren.push(child);
    }
  }
  return newChildren;
}

export function networkSpeed(
  e: {
    loaded: number;
    total: number;
  },
  stat: { oldTimestamp: number; oldLoadsize: number },
) {
  const timestamp = Date.now();
  const duration = timestamp - stat.oldTimestamp; // 间隔时间（毫秒）
  let bitrate = 0;
  if (duration > 0) {
    const _size = e.loaded - stat.oldLoadsize;
    bitrate = (_size / duration) * 1000; // kb
    stat.oldTimestamp = timestamp;
    stat.oldLoadsize = e.loaded;
  }
  return fileSize(Math.min(bitrate, e.total));
}

export const wrapRef = (originalRef: any, localRef: any) => (ref: any) => {
  if (originalRef) {
    if (typeof originalRef === 'object') originalRef.current = ref;
    if (typeof originalRef === 'function') originalRef(ref);
  }
  localRef.current = ref;
};

export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'Anonymous');
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject('图片加载失败');
    };
    img.src = url;
  });
}

// Types
export * from './models/OffsetModel';
export * from './models/ViewPortModel';
// Helpers
export * from './DomHelpers';
export * from './_TypesHelpers';
// Basic
export * from './_DataUtil';
export * from './_DOMEventHandlerUtil';
export * from './_ElementStyleUtil';
export * from './ElementAnimateUtil';
export * from './EventHandlerUtil';
