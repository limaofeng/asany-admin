import { useMemo } from 'react';

import { useListFilesLazyQuery } from './api';

import type { UseLazyQuery } from '@/pages/Metronic/hooks';
import { useLongListLazyQuery } from '@/pages/Metronic/hooks';
import type { FileFilter, FileObject } from '@/types';

type QueryCondition = {
  folder?: string;
  filter?: FileFilter;
  orderBy?: string;
};

const useLazyQuery: UseLazyQuery<FileObject, QueryCondition> = function () {
  const [_loadFileObjects, { data, loading: _loading, refetch }] = useListFilesLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  const pageSize = data?.listFiles.pageSize || 0;
  const currentPage = data?.listFiles.currentPage || 0;
  const totalCount = data?.listFiles.totalCount || 0;
  const totalPage = data?.listFiles.totalPage || 0;

  const _pagination = useMemo(
    () => ({ totalCount, currentPage, pageSize, totalPage }),
    [currentPage, pageSize, totalCount, totalPage],
  );

  return [
    function (params: QueryCondition, page: number) {
      _loadFileObjects({ variables: { ...(params as any), page } });
    },
    {
      pagination: _pagination,
      items: (data?.listFiles.edges.map((item) => item.node) || []) as unknown as FileObject[],
      loading: _loading,
      refetch: (params: QueryCondition, page: number) => {
        refetch({ variables: { ...(params as any), page } });
      },
    },
  ];
};

export function useListFiles(
  folder: string | undefined,
  filter: FileFilter | undefined,
  orderBy: string | undefined,
) {
  return useLongListLazyQuery<FileObject, QueryCondition>(useLazyQuery, {
    folder,
    filter,
    orderBy,
  });
}
