import { useEffect, useReducer, useRef } from 'react';

import ResizeObserver from 'resize-observer-polyfill';

import { sleep } from '../utils';

// 解析角度
export const parsingAngle = (angle: string) => {
  // 返回为字符串 进行判空
  if (angle === 'none' || !angle) return 0;

  // 根据矩阵解析对应角度
  const arr = angle.split('(')[1].split(')')[0].split(',');
  // 根据三角函数进行求解
  const aa = Math.round((180 * Math.asin(+arr[0])) / Math.PI);
  const bb = Math.round((180 * Math.acos(+arr[1])) / Math.PI);
  const cc = Math.round((180 * Math.asin(+arr[2])) / Math.PI);
  const dd = Math.round((180 * Math.acos(+arr[3])) / Math.PI);
  let deg = 0;
  if (aa == bb || -aa == bb) {
    deg = dd;
  } else if (-aa + bb == 180) {
    deg = 180 + cc;
  } else if (aa + bb == 180) {
    deg = 360 - cc || 360 - dd;
  }
  return deg >= 360 ? 0 : deg;
};

// 解析圆角
export const parsingRadius = (radius: string): any => {
  const defaultValue = [0, 0, 0, 0];
  const arr = radius.split(',');
  if (!arr || arr.length === 0) return defaultValue;
  const currentRadius = arr.map((e) => parseInt(e));
  switch (currentRadius.length) {
    case 1:
      return new Array(4).fill(currentRadius[0]);
    case 2:
      return [currentRadius[0], currentRadius[1], currentRadius[0], currentRadius[1]];
    case 3:
      return [currentRadius[0], currentRadius[1], currentRadius[2], currentRadius[1]];
    case 4:
      return currentRadius;
    default:
      return defaultValue;
  }
};

const MAXIMUM = 10;

const loopGetElement = async (element: React.RefObject<HTMLElement>) => {
  let i = 0;
  while (element.current === null && ++i <= MAXIMUM) {
    await sleep(100);
  }
  return element.current;
};

interface ResizeData {
  width: number;
  height: number;
  top: number;
  left: number;
  x: number;
  y: number;
  rotate: number;
  radius: [number, number, number, number];
}

type GetElement = (baseline: HTMLElement) => HTMLElement;

type OneSelf = 'self' | 'parent' | GetElement;

class ResizeDataImpl implements ResizeData {
  private rect: DOMRectReadOnly | null | undefined;
  private element: HTMLElement | null | undefined;
  setElement(element: HTMLElement | null) {
    this.element = element;
  }
  setRect(rect: DOMRectReadOnly) {
    this.rect = rect;
  }
  get width() {
    return this.rect?.width || 0;
  }
  get height() {
    return this.rect?.height || 0;
  }
  get top() {
    return this.rect?.top || 0;
  }
  get left() {
    return this.rect?.left || 0;
  }
  get x() {
    return this.rect?.x || 0;
  }
  get y() {
    return this.rect?.y || 0;
  }
  get radius(): [number, number, number, number] {
    if (!this.element) {
      return [0, 0, 0, 0];
    }
    const currentStyle = window.getComputedStyle(this.element, null);
    return parsingRadius(currentStyle.borderRadius);
  }
  get rotate() {
    if (!this.element) {
      return 0;
    }
    const currentStyle = window.getComputedStyle(this.element, null);
    return parsingAngle(currentStyle.transform);
  }
}

function getElement(ele: HTMLElement, self: OneSelf) {
  if (typeof self === 'string') {
    return self == 'self' ? ele : ele.parentElement;
  }
  return self(ele);
}

export default function useHTMLElementResize(
  baseline?: React.RefObject<HTMLElement>,
  self: OneSelf = 'self',
): ResizeData {
  const prev = useRef(baseline?.current);
  const value = useRef<ResizeDataImpl>(new ResizeDataImpl());
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const ref = useRef(
    new ResizeObserver(function (entries: any) {
      const entry = entries[0];
      const rect = entry.contentRect as DOMRectReadOnly;
      value.current.setRect(rect);
      forceRender();
    }),
  );

  useEffect(() => {
    if (!baseline) {
      return;
    }
    loopGetElement(baseline).then((ele) => {
      if (!ele) {
        return;
      }
      value.current.setElement((prev.current = getElement(ele, self)));
      ref.current.observe(prev.current!);
    });
    const _prev = prev.current;
    const _ref = ref.current;
    return () => {
      if (_ref && _prev) {
        _ref.unobserve(_prev);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseline?.current]);
  return value.current;
}
