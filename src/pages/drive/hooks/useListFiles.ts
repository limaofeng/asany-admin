import { useMemo } from 'react';

import type { UseLazyQuery } from '@/metronic/hooks';
import { useLongListLazyQuery } from '@/metronic/hooks';
import type { FileObject, FileWhereInput } from '@/types';

import { useListFilesLazyQuery } from './api';

type QueryCondition = {
  space?: string;
  where?: FileWhereInput;
  orderBy?: string;
};

const useLazyQuery: UseLazyQuery<FileObject, QueryCondition> = function () {
  const [_loadFileObjects, { data, previousData, loading: _loading, refetch }] =
    useListFilesLazyQuery({
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

  const loadFileObjects = useMemo(
    () => (params: QueryCondition, page: number) => {
      _loadFileObjects({ variables: { ...(params as any), page } });
    },
    [_loadFileObjects],
  );

  const actions = useMemo(() => {
    console.log(
      'data >>>>>>>>>>>>>>>>>> ',
      ((data || previousData)?.listFiles.edges.map((item) => item.node) ||
        []) as unknown as FileObject[],
    );

    return {
      pagination: _pagination,
      items: ((data || previousData)?.listFiles.edges.map(
        (item) => item.node,
      ) || []) as unknown as FileObject[],
      loading: _loading,
      refetch: (params: QueryCondition, page: number) => {
        return refetch({ ...(params as any), page });
      },
    };
  }, [_loading, _pagination, previousData, data?.listFiles.edges, refetch]);

  return [loadFileObjects, actions];
};

export function useListFiles(
  space: string | undefined,
  where: FileWhereInput | undefined,
  orderBy: string | undefined,
) {
  return useLongListLazyQuery<FileObject, QueryCondition>(useLazyQuery, {
    space,
    where,
    orderBy,
  });
}
