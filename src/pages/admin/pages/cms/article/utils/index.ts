import { clone, isEqual, uniq, zipObject } from 'lodash';

export const diff = (lvalue: any, rvalue: any) => {
  if (isEqual(lvalue, rvalue)) {
    return {};
  }
  const keys = uniq(Object.keys(lvalue).concat(Object.keys(rvalue))).filter(
    (key) => !isEqual(lvalue[key], rvalue[key]),
  );
  const values = keys.map((key) => rvalue[key]);
  return zipObject(keys, values);
};

export type DelayUpdateCallback = (values: any, diffs: any) => void;

type DelayUpdateOptions = {
  equal?: (l: any, r: any) => boolean;
  onlyDiff?: boolean;
  delay?: number;
};

export const delayUpdate = (
  ovalue: any,
  callback: DelayUpdateCallback,
  { equal = isEqual, onlyDiff = false, delay = 1500 }: DelayUpdateOptions,
) => {
  let lvalue = clone(ovalue);
  let lazy: NodeJS.Timeout;
  return (value: any) => {
    clearTimeout(lazy);
    if (equal(lvalue, value)) {
      return;
    }
    lazy = setTimeout(() => {
      const diffs = onlyDiff ? diff(lvalue, value) : value;
      callback(value, diffs);
      lvalue = clone(value);
    }, delay);
  };
};
