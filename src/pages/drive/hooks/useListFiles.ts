import { useCallback, useEffect, useReducer, useRef } from 'react';

import EventEmitter from 'events';

import { useListFilesLazyQuery } from './api';

import type { FileFilter, FileObject, FileObjectConnection } from '@/types';
import { sleep } from '@/utils';

const DEFAULT_PAGINATION = {
  totalCount: 0,
  pageSize: 0,
  totalPage: 0,
  currentPage: 0,
};

export type PaginationType = typeof DEFAULT_PAGINATION;

export type UseFileObject = (index: number) => FileObject | undefined;

export type LoadFileObject = (index: number) => Promise<FileObject>;

type LoadFileObjectUtils = {
  loadedCount: number;
  refetch: (page: number) => Promise<void>;
  refetchWithRemove: (index: number) => Promise<void>;
  loadFileObject: LoadFileObject;
};

type UseFileObjectsQuery = [PaginationType, boolean, UseFileObject, LoadFileObjectUtils];

export function useListFiles(
  folder?: string,
  filter?: FileFilter,
  orderBy?: string,
): UseFileObjectsQuery {
  const emitter = useRef(new EventEmitter());
  const state = useRef<{
    page: number;
    folder?: string;
    loading: boolean;
    files: FileObject[];
    pagination: PaginationType;
    filter?: FileFilter;
    orderBy?: string;
  }>({
    page: 1,
    folder,
    loading: false,
    files: [],
    filter,
    orderBy,
    pagination: { ...DEFAULT_PAGINATION },
  });

  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [_loadFileObjects, { data, loading, refetch }] = useListFilesLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  state.current.loading = loading;

  const parseData = useCallback((pagination: FileObjectConnection) => {
    pagination.edges
      .map((item) => item.node)
      .forEach((msg, _index) => {
        const index = pagination.pageSize * (pagination.currentPage - 1) + _index;
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
      refetch({
        folder: state.current.folder,
        filter: state.current.filter,
        page: state.current.page,
        orderBy: state.current.orderBy,
      });
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

  const loadFileObjects = useCallback(
    async (page: number) => {
      while (state.current.loading) {
        await sleep(120);
      }
      if (state.current.page == page || page > state.current.pagination.totalPage) {
        return;
      }
      state.current.page = page;
      // debugger;
      _loadFileObjects({
        variables: {
          folder: state.current.folder,
          filter: state.current.filter,
          page: state.current.page,
          orderBy: state.current.orderBy,
        },
      });
    },
    [_loadFileObjects],
  );

  const loadFileObject = useCallback(
    async (index: number) => {
      let file = state.current.files[index];

      if (!file) {
        do {
          file = state.current.files[index];
          if (!file) {
            await loadFileObjects(Math.ceil((index + 1) / state.current.pagination.pageSize));
            await sleep(30);
          }
          if (index >= state.current.files.length) {
            console.log(`索引超出最大长度 [${index}/${state.current.files.length}]`);
            return state.current.files[index - 1];
          }
        } while (!file);
      }

      return file;
    },
    [loadFileObjects],
  );

  useEffect(() => {
    emitter.current.setMaxListeners(1000);
  }, []);

  useEffect(() => {
    if (
      state.current.folder != folder ||
      state.current.filter != filter ||
      state.current.orderBy != orderBy
    ) {
      state.current.folder = folder;
      state.current.filter = filter;
      state.current.orderBy = orderBy;
      state.current.pagination = { ...DEFAULT_PAGINATION };
      state.current.files.length = 0;
      state.current.page = 1;
    }
    if (!folder) {
      return forceRender();
    }
    _loadFileObjects({
      variables: {
        folder: state.current.folder,
        filter: state.current.filter,
        page: state.current.page,
        orderBy: state.current.orderBy,
      },
    });
  }, [_loadFileObjects, folder, filter, orderBy]);

  useEffect(() => {
    if (loading || !data?.listFiles) {
      return;
    }
    state.current.pagination = { ...data.listFiles } || state.current.pagination;
    parseData(data.listFiles as any);
    forceRender();
  }, [parseData, data?.listFiles, loading]);

  const useFileObject = (index: number): FileObject | undefined => {
    const [, _forceRender] = useReducer((s) => s + 1, 0);
    const latestSelectedState = useRef<{
      file?: FileObject;
      index: number;
      timer?: NodeJS.Timer;
    }>({ index });

    latestSelectedState.current.index = index;

    latestSelectedState.current.file = state.current.files[index];

    useEffect(() => {
      if (index == -1) {
        return;
      }
      const _index = index + 1;

      let _timer: NodeJS.Timer;
      const checkResult = async () => {
        while (state.current.loading) {
          await sleep(300);
        }
        if (!!latestSelectedState.current.file) {
          latestSelectedState.current.timer && clearTimeout(latestSelectedState.current.timer);
          return;
        }
        // debugger;
        loadFileObjects(Math.ceil(_index / state.current.pagination.pageSize));
        _timer = setTimeout(checkResult, 300);
      };

      _timer = setTimeout(checkResult, 300);
      return () => {
        _timer && clearTimeout(_timer);
      };
    }, [index]);

    const checkForUpdates = useCallback(() => {
      const newSelectedState = state.current.files[latestSelectedState.current.index];
      if (newSelectedState == latestSelectedState.current.file) {
        return;
      }
      latestSelectedState.current.file = newSelectedState;
      _forceRender();
    }, []);

    useEffect(() => {
      emitter.current.addListener('updates', checkForUpdates);
      return () => {
        emitter.current.removeListener('updates', checkForUpdates);
      };
    }, [checkForUpdates]);

    return latestSelectedState.current.file;
  };

  // console.log('useListFiles', {
  //   page: state.current.page,
  //   filter: state.current.filter,
  //   orderBy: state.current.orderBy,
  // });

  return [
    state.current.pagination,
    loading,
    useFileObject,
    {
      loadedCount: state.current.files.filter((item) => !!item).length,
      loadFileObject,
      refetch: handleRefetch,
      refetchWithRemove: handleRefetchWithRemove,
    },
  ];
}
