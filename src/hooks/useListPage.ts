import { useCallback, useMemo } from 'react';

import {
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';
import { useNavigate } from '@umijs/max';
import qs from 'query-string';

import useQuery from '@/hooks/useQuery';
import { PaginationProps } from '@/metronic/Table/Pagination';
import { Sorter } from '@/metronic/typings';
import { PageInfo } from '@/types';

export type ResultEdge<T> = {
  node: T;
};

export type ResultQuery<T> = {
  result: {
    pageInfo: PageInfo;
    edges: ResultEdge<T>[];
  };
};

const defaultPageInfo: PageInfo = {
  total: 0,
  current: 1,
  pageSize: 10,
  totalPages: 0,
  hasNextPage: false,
  hasPreviousPage: false,
};

type SearchOptions = {
  toQuery?: (
    variables: any,
    pagination: PaginationProps,
    filters: any | undefined,
    sorter: Sorter,
  ) => any;
  toVariables?: (query: { [key: string]: any }) => {
    [key: string]: any;
  };
};

function useListPage<T, Q = any>(
  useDataQuery: (baseOptions?: QueryHookOptions<Q, OperationVariables>) => any,
  search?: SearchOptions,
): [
  T[],
  {
    loading: boolean;
    pageInfo: PageInfo;
    sorter: Sorter;
    refetch: () => void;
    onChange: (pagination: any, filters: any, sorter: any) => void;
  },
] {
  const navigate = useNavigate();

  const query = useQuery();

  const variables = useMemo(() => {
    return (search?.toVariables && search?.toVariables(query)) || {};
  }, [query, search]);

  const sorter = useMemo<Sorter>(() => {
    if (!variables.orderBy) {
      return {
        order: 'descend',
        field: 'createdAt',
      };
    }
    const [field, order] = variables.orderBy.split('_');
    return {
      order: order === 'desc' ? 'descend' : 'ascend',
      field,
    };
  }, [variables.orderBy]);

  const { data, loading, previousData, refetch } = useDataQuery({
    fetchPolicy: 'cache-and-network',
    variables,
  }) as QueryResult<ResultQuery<T>, OperationVariables>;

  const pageInfo = useMemo(() => {
    if (loading) {
      return previousData?.result.pageInfo || defaultPageInfo;
    }
    return data?.result.pageInfo || defaultPageInfo;
  }, [
    data?.result.pageInfo.total,
    loading,
    previousData?.result.pageInfo.total,
  ]);

  const handleChange = useCallback(
    (_pagination: any, _filters: any, _sorter: any) => {
      const query =
        (search?.toQuery &&
          search.toQuery(variables, _pagination, _filters, _sorter)) ||
        '';
      navigate(location.pathname + '?' + qs.stringify(query), {
        replace: true,
      });
    },
    [history, location.pathname, variables.filter?.name_contains],
  );

  const nodes = data?.result.edges.map((edge) => edge.node) || [];

  return [
    nodes,
    { loading, pageInfo, sorter, onChange: handleChange, refetch },
  ];
}

export default useListPage;
