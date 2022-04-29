import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

import { gql, useLazyQuery } from '@apollo/client';

import { tree } from '@/utils';

const QUERY_DICTS = gql(`
query dicts($filter: DictFilter){
  dicts(
    filter:$filter
  ) {
    id
    code
    type
    name
    path
    index
    parent {
      id
    }
  }
}
`);

const QUERY_DICT = gql(`
query dict($code: String){
  dict(code: $code, type_in: ["province","city","district","street"]) {
    id
    code
    type
    name
    path
  }
}
`);

type Address = {
  province?: string;
  provinceName?: string;
  city?: string;
  cityName?: string;
  district?: string;
  districtName?: string;
  street?: string;
  streetName?: string;
  codes: string[];
};

export type AreaData = {
  id: string;
  code: string;
  type: string;
  name: string;
  description: string;
  index: number;
  parent: {
    id: string;
  };
  getChildren: () => Promise<AreaData[]>;
};

let FIRST_LOAD: Promise<AreaData[]>;

type UseAreasResult = [
  AreaData[],
  {
    waiting: boolean;
    loading: boolean;
    loadAddress: (code: string) => Promise<Address>;
  },
];

function useAreas(): UseAreasResult {
  const [areas, setAreas] = useState<AreaData[]>([]);

  const temp = useRef<{ areas: AreaData[]; waiting: boolean }>({ areas, waiting: false });
  const [, forceRender] = useReducer((s) => s + 1, 0);
  temp.current.areas = areas;

  const [loadAreaData] = useLazyQuery(QUERY_DICT, {
    fetchPolicy: 'cache-and-network',
  });
  const [fetchChildren, { loading }] = useLazyQuery<{ dicts: AreaData[] }>(QUERY_DICTS, {
    fetchPolicy: 'cache-and-network',
  });

  const loadChildren = useCallback(
    (id: string) => {
      return fetchChildren({
        variables: {
          filter: {
            parent: id,
          },
        },
      }).then(({ data }) => {
        const children: any[] = (data?.dicts || [])
          .map((t: AreaData) => ({
            ...t,
            getChildren() {
              console.log('xxx get', this);
              if (this.type == 'street') {
                return [];
              }
              if (!(this as any)._children) {
                return loadChildren(t.id).then((_children: any) => {
                  (this as any)._children = _children;
                  return _children;
                });
              }
              return (this as any)._children;
            },
          }))
          .sort((l: AreaData, r: AreaData) => l.index - r.index);
        return children;
      });
    },
    [fetchChildren],
  );

  useEffect(() => {
    temp.current.waiting = true;
    forceRender();
    if (FIRST_LOAD == null) {
      FIRST_LOAD = fetchChildren({
        variables: {
          filter: {
            type_in: ['province', 'city', 'district', 'street'],
            level_lte: 2,
          },
        },
      }).then(({ data }) => {
        const treeData = tree(
          (data?.dicts || []).map((item) => ({ ...item })),
          {
            pidKey: 'parent.id',
            sort: (l, r) => l.index - r.index,
            childrenKey: '_children',
            converter: (item) =>
              ({
                ...item,
                getChildren() {
                  console.log('xxx get', this);
                  if (this.type == 'street') {
                    return [];
                  }
                  if (!(this as any)._children) {
                    return loadChildren(this.id).then((_children: any) => {
                      (this as any)._children = _children;
                      return _children;
                    });
                  }
                  return (this as any)._children;
                },
              } as AreaData),
          },
        );
        return treeData;
      });
    }
    FIRST_LOAD.then((_data) => setAreas(_data)).then(() => {
      temp.current.waiting = false;
      forceRender();
    });
  }, [fetchChildren, loadChildren]);

  const loadAddress = useCallback(
    async (code: string) => {
      const { data } = await loadAreaData({
        variables: { code },
      });
      const _areas = await FIRST_LOAD;
      const codes = data.dict.path.split('/').filter((t: any) => !!t);

      let ___areas = _areas;
      const address: Address = { codes: [] };
      for (const _code of codes) {
        address.codes.push(_code);
        const item = ___areas.find((_item) => _item.code == _code)!;
        address[item.type] = item.code;
        address[`${item.type}Name`] = item.name;
        ___areas = await item.getChildren();
      }

      return address;
    },
    [loadAreaData],
  );

  return [areas, { loadAddress, waiting: temp.current.waiting, loading }];
}

export default useAreas;
