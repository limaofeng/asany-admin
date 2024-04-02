import { useEffect, useRef } from 'react';

import { ApolloError } from '@apollo/client';
import { isEqual } from 'lodash';

import errors from '../errors';

export type ConvolverOptions = {
  parent?: any;
};

export interface TreeOptions<T, R = T> {
  idKey?: string;
  pidKey?: string;
  childrenKey?: string;
  getParentKey?: (data: T) => string;
  converter?: (data: T, options: ConvolverOptions) => R;
  sort?: (l: T, r: T) => number;
}

export const sleep = (time: number) =>
  new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });

export const delay = async (call: Promise<any>, time: number) => {
  const [data] = await Promise.allSettled([call, sleep(time)]);
  if (data.status === 'rejected') {
    throw data.reason;
  } else if (data.status === 'fulfilled') {
    return data.value;
  }
  throw new Error(`Promise 状态错误:${JSON.stringify(data)}`);
};

export function getFieldValue(root: any, path: string) {
  let value = root;
  for (const key of path.split('.')) {
    if (!value) {
      return;
    }
    value = value[key];
  }
  return value;
}

export function tree<T, R>(
  list: T[],
  {
    idKey = 'id',
    pidKey = 'parent_id',
    childrenKey = 'children',
    getParentKey = (data: any) => getFieldValue(data, pidKey),
    converter = undefined,
    sort = undefined,
  }: TreeOptions<T, R>,
): R[] {
  const start = new Date().getTime();
  try {
    let roots = list.filter((item: any) => {
      if (getParentKey(item)) {
        const parent = list.find(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (parent) =>
            (parent as any)[idKey].toString() === getParentKey(item).toString(),
        );
        if (!parent) {
          return true;
        }
        if (!(parent as any)[childrenKey]) {
          (parent as any)[childrenKey] = [];
        }
        const children = (parent as any)[childrenKey];
        // TODO 逻辑漏洞
        item.parent = parent;
        children.push(item);
        if (sort) {
          (parent as any)[childrenKey] = children.sort(sort);
        }
        return false;
      }
      return true;
    });

    const converterFunc = (item: any, parent?: any) => {
      const convItem = converter ? converter(item, { parent }) : item;
      if (convItem[childrenKey]) {
        convItem[childrenKey] = convItem[childrenKey].map((_item: any) =>
          converterFunc(_item, convItem),
        );
      }
      return convItem;
    };
    roots = sort ? roots.sort(sort) : roots;
    return converter ? roots.map((item: any) => converterFunc(item)) : roots;
  } finally {
    console.log('list -> tree 耗时', new Date().getTime() - start, 'ms');
  }
}

export function flat<T>(treeData: T[], childrenKey: string = 'children'): T[] {
  const narray = [];
  for (const item of treeData) {
    narray.push(item);
    if (item[childrenKey]) {
      narray.push(...flat(item[childrenKey] as any, childrenKey));
    }
  }
  return narray as any;
}

function deepCompareEquals(a: any, b: any) {
  return isEqual(a, b);
}

function useDeepCompareMemoize(value: any) {
  const ref = useRef();
  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

export function useDeepCompareEffect(
  effect: React.EffectCallback,
  dependencies?: any,
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, useDeepCompareMemoize(dependencies));
}

type GeneralError = {
  code: string;
  message: string;
};

export function parseError(e: any): GeneralError {
  if (e instanceof ApolloError) {
    const code = (e as ApolloError).graphQLErrors[0].extensions.code;
    return { code, message: errors[code] || e.message };
  }
  return { code: '000000', message: e.message };
}

export function getFileUrlById(
  id: string | undefined,
  options?: {
    protocol?: boolean;
  },
) {
  const protocol = options?.protocol ? location.protocol : '';
  return id && protocol + process.env.STORAGE_URL + `/preview/${id}`;
}

export function getFileThumbnailUrlById(
  id: string | undefined,
  options: {
    size: string;
    protocol?: boolean;
  },
) {
  const protocol = options?.protocol ? location.protocol : '';
  return (
    id &&
    protocol + process.env.STORAGE_URL + `/thumbnail/${id}?size=${options.size}`
  );
}
