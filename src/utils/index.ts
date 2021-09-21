export interface TreeOptions<T> {
  idKey: string;
  pidKey: string;
  childrenKey?: string;
  getParentKey?: (data: T) => string;
  converter?: (data: T) => T;
  sort?: (l: T, r: T) => number;
}

export const sleep = (time: number) =>
  new Promise((resolve) => {
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

export function tree<T>(
  list: T[],
  {
    idKey = 'id',
    pidKey = 'parent_id',
    childrenKey = 'children',
    getParentKey = (data: any) => getFieldValue(data, pidKey),
    converter = undefined,
    sort = undefined,
  }: TreeOptions<T>,
) {
  const start = new Date().getTime();
  try {
    let roots = list.filter((item: any) => {
      if (getParentKey(item)) {
        const parent = list.find(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (parent) => (parent as any)[idKey].toString() === getParentKey(item).toString(),
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

    const converterFunc = (item: any) => {
      if (item[childrenKey]) {
        item[childrenKey] = item[childrenKey].map(converterFunc);
      }
      return converter ? converter(item) : item;
    };
    roots = sort ? roots.sort(sort) : roots;
    return converter ? roots.map(converterFunc) : roots;
  } finally {
    console.log('list -> tree 耗时', new Date().getTime() - start, 'ms');
  }
}
