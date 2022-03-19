import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import EventEmitter from 'events';

import { sleep, useDeepCompareEffect } from '@/utils';

const DEFAULT_PAGINATION = {
  totalCount: 0,
  pageSize: 0,
  totalPage: 0,
  currentPage: 0,
};

export type PaginationType = typeof DEFAULT_PAGINATION;

export type UseObject<T> = (index: number) => T | undefined;

export type LoadObject<T> = (index: number) => Promise<T>;

type LoadObjectUtils<T> = {
  allItems: () => T[];
  loadedCount: number;
  refetch: (page: number) => Promise<void>;
  refetchWithRemove: (index: number) => Promise<void>;
  loadObject: LoadObject<T>;
};

type UseObjectsQuery<T> = [PaginationType, boolean, UseObject<T>, LoadObjectUtils<T>];

type LoadItems<P> = (params: P, page: number) => void;

export type UseLazyQuery<T, P> = () => [
  LoadItems<P>,
  {
    items: T[];
    loading: boolean;
    refetch: (params: P, page: number) => void;
    pagination: PaginationType;
  },
];

/**
 * 常列表延时加载 Hooks
 * @param useLazyQuery 包装的 Hooks 函数
 * @param conditions 条件
 * @returns
 */
export function useLongListLazyQuery<T, P>(
  useLazyQuery: UseLazyQuery<T, P>,
  conditions: P,
): UseObjectsQuery<T> {
  const emitter = useRef(new EventEmitter());
  const state = useRef<{
    page: number;
    loading: boolean;
    files: T[];
    conditions: P;
    pagination: PaginationType;
  }>({
    page: 1,
    // folder,
    conditions,
    loading: false,
    files: [],
    pagination: { ...DEFAULT_PAGINATION },
  });

  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [_loadObjects, { pagination: _pagination, items, loading, refetch }] = useLazyQuery();

  state.current.loading = loading;

  const parseData = useCallback((_items: T[]) => {
    _items.forEach((msg, _index) => {
      const index =
        state.current.pagination.pageSize * (state.current.pagination.currentPage - 1) + _index;
      state.current.files[index] = msg as any;
    });
    emitter.current.emit('updates');
    // console.log('updates', state.current.files);
  }, []);

  const handleRefetch = useCallback(
    async (page: number) => {
      if (state.current.loading && state.current.page == page) {
        return;
      }
      while (state.current.loading) {
        await sleep(120);
      }
      state.current.page = page;
      // debugger;
      console.log('loadFileObjects 3');
      refetch(state.current.conditions, state.current.page);
    },
    [refetch],
  );

  const handleRefetchWithRemove = useCallback(
    async (index: number) => {
      const pageSize = state.current.pagination.pageSize;
      if (state.current.pagination.totalCount % state.current.pagination.pageSize == 1) {
        state.current.pagination.totalPage--;
      }
      state.current.pagination.totalCount--;
      state.current.files.splice(index, 1);
      const page = Math.ceil((index + 1) / pageSize);
      handleRefetch(page);
    },
    [handleRefetch],
  );

  const loadObjects = useCallback(
    async (page: number) => {
      while (state.current.loading) {
        await sleep(120);
      }
      if (state.current.page == page || page > state.current.pagination.totalPage) {
        return;
      }
      state.current.page = page;
      console.log('loadFileObjects 1 page', page);
      _loadObjects(state.current.conditions, state.current.page);
    },
    [_loadObjects],
  );

  const loadObject = useCallback(
    async (index: number) => {
      let file = state.current.files[index];

      if (!file) {
        let retryCount = 3;
        do {
          file = state.current.files[index];
          if (!file) {
            await loadObjects(Math.ceil((index + 1) / state.current.pagination.pageSize));
            await sleep(30);
          }
          if (index >= state.current.files.length) {
            console.log(`索引超出最大长度 [${index}/${state.current.files.length}]`);
            return state.current.files[index - 1];
          }
          retryCount--;
        } while (!file && retryCount);
      }

      return file;
    },
    [loadObjects],
  );

  useEffect(() => {
    emitter.current.setMaxListeners(1000);
  }, []);

  useDeepCompareEffect(() => {
    state.current.conditions = conditions;
    state.current.pagination = { ...DEFAULT_PAGINATION };
    state.current.files.length = 0;
    state.current.page = 1;

    _loadObjects(state.current.conditions, state.current.page);
  }, [conditions]);

  useDeepCompareEffect(() => {
    if (loading) {
      return;
    }
    state.current.pagination = _pagination;
    parseData(items);
    forceRender();
  }, [parseData, _pagination, items, loading]);

  const useObject = useMemo(
    () =>
      (index: number): T | undefined => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [, _forceRender] = useReducer((s) => s + 1, 0);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const latestSelectedState = useRef<{
          file?: T;
          index: number;
          abort: boolean;
          timer?: NodeJS.Timer;
        }>({ index, abort: false });

        latestSelectedState.current.index = index;

        latestSelectedState.current.file = state.current.files[index];

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (index == -1) {
            return;
          }
          const _index = index + 1;
          latestSelectedState.current.abort = false;

          let _timer: NodeJS.Timer;
          const checkResult = async () => {
            if (latestSelectedState.current.abort) {
              return;
            }
            while (state.current.loading) {
              await sleep(300);
            }
            if (!!latestSelectedState.current.file) {
              latestSelectedState.current.timer && clearTimeout(latestSelectedState.current.timer);
              return;
            }
            if (latestSelectedState.current.abort) {
              return;
            }
            // debugger;
            loadObjects(Math.ceil(_index / state.current.pagination.pageSize));
            _timer = setTimeout(checkResult, 300);
          };

          _timer = setTimeout(checkResult, 300);
          return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            latestSelectedState.current.abort = true;
            _timer && clearTimeout(_timer);
          };
        }, [index]);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const checkForUpdates = useCallback(() => {
          const newSelectedState = state.current.files[latestSelectedState.current.index];
          if (newSelectedState == latestSelectedState.current.file) {
            return;
          }
          latestSelectedState.current.file = newSelectedState;
          _forceRender();
        }, []);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          emitter.current.addListener('updates', checkForUpdates);
          return () => {
            emitter.current.removeListener('updates', checkForUpdates);
          };
        }, [checkForUpdates]);

        return latestSelectedState.current.file;
      },
    [loadObjects],
  );

  // console.log('useListFiles', {
  //   page: state.current.page,
  //   filter: state.current.filter,
  //   orderBy: state.current.orderBy,
  // });

  const loadedCount = state.current.files.filter((item) => !!item).length;

  const utils = useMemo(
    () => ({
      allItems: () => {
        return state.current.files;
      },
      loadedCount,
      loadObject,
      refetch: handleRefetch,
      refetchWithRemove: handleRefetchWithRemove,
    }),
    [loadedCount, loadObject, handleRefetch, handleRefetchWithRemove],
  );

  const pagination = state.current.pagination;

  return useMemo(
    () => [pagination, loading, useObject, utils],
    [pagination, loading, useObject, utils],
  );
}
