import { useMemo } from 'react';

import {
  ApolloError,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';

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

function useListPage<TData, TVariables extends OperationVariables>(
  // @ts-ignore
  useDataQuery: (
    baseOptions?: QueryHookOptions<TData, TVariables>,
  ) => QueryResult<TData, TVariables>,
  // @ts-ignore
  baseOptions?: QueryHookOptions<TData, TVariables>,
): [
  // @ts-ignore
  NonNullable<NonNullable<TData['result']>['edges']>[number]['node'][],
  {
    loading: boolean;
    pageInfo?: PageInfo;
    error?: ApolloError;
    refetch: () => void;
    variables: TVariables;
  },
] {
  // @ts-ignore
  type NodeType = NonNullable<
    // @ts-ignore
    NonNullable<TData['result']>['edges']
  >[number]['node'][];

  const { data, loading, previousData, refetch, error } = useDataQuery({
    fetchPolicy: 'network-only',
    ...baseOptions,
  }) as QueryResult<TData & ResultQuery<NodeType>, any>;

  console.log('=====>', data, baseOptions);

  const pageInfo = useMemo(() => {
    if (loading) {
      return previousData?.result.pageInfo;
    }
    return data?.result.pageInfo;
  }, [
    data?.result?.pageInfo.total,
    loading,
    previousData?.result?.pageInfo.total,
  ]);

  const nodes = data?.result.edges.map((edge) => edge.node) || [];

  return [
    nodes as any[],
    {
      loading,
      pageInfo,
      error,
      variables: {} as any,
      refetch,
    },
  ];
}

type FieldMapping<S, T> = {
  source: string;
  target?: string;
  transform?: (value: S) => T;
  skip?: (value: S) => boolean;
};

function getNestedValue(obj: any, path: string): any {
  return path
    .split('.')
    .reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
      obj,
    );
}

// Helper function to set a nested property in an object
function setNestedProperty(obj: Record<string, any>, path: string, value: any) {
  const keys = path.split('.');
  let current = obj;

  while (keys.length > 1) {
    const key = keys.shift();
    if (!current[key!]) {
      current[key!] = {};
    }
    current = current[key!];
  }

  current[keys[0]] = value;
}

/**
 * 将 Variables 对象转换为 URL 查询参数
 * @param variables - Variables 对象
 * @param config - Variables 键名和查询参数的映射关系以及可选的转换逻辑
 * @returns URL 查询字符串，例如 "?name=John&age=30"
 */
export function variablesToQuery(
  variables: Record<string, any>,
  mappings: FieldMapping<any, string>[],
): string {
  const queryParts = mappings.map(({ source, target, transform, skip }) => {
    const value = getNestedValue(variables, source);
    if (value === undefined || value === null) {
      return ''; // 忽略 undefined 或 null 的值
    }
    if (skip && skip(value)) {
      return ''; // 忽略满足 skip 条件的值
    }
    const encodedValue = transform ? transform(value) : String(value);
    return `${encodeURIComponent(target || source)}=${encodeURIComponent(
      encodedValue,
    )}`;
  });
  // 过滤掉空字符串并连接为最终的查询字符串
  return queryParts.filter((part) => part).join('&');
}

export function queryToVariables(
  query: URLSearchParams,
  mappings: FieldMapping<string, any>[],
): Record<string, any> {
  const variables: Record<string, any> = {};

  mappings.forEach(({ source, target, transform, skip }) => {
    const value = query.get(source);

    if (!value || value.trim() === '') {
      return;
    }
    const transformedValue = transform ? transform(value) : value;

    if (skip && skip(transformedValue)) {
      return;
    }

    if (target) {
      setNestedProperty(variables, target, transformedValue);
    } else {
      variables[source] = transformedValue;
    }
  });

  return variables;
}

export default useListPage;
