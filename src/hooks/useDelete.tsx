import { useCallback, useRef } from 'react';

import {
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
} from '@apollo/client';

import { Modal, Toast } from '@/metronic';
import { delay } from '@/utils';

type DialogOptions<T> = {
  title?:
    | string
    | React.ReactNode
    | ((
        data: T,
        info: {
          batch: boolean;
        },
      ) => string | React.ReactNode);
  content?:
    | string
    | React.ReactNode
    | ((
        data: T,
        info: {
          batch: boolean;
        },
      ) => string | React.ReactNode);
  width?: string;
};

function fillTemplate(template: string, data: any) {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return data[key] !== undefined ? data[key] : match;
  });
}

type DeleteEntity = {
  id: string;
  [key: string]: any;
};

type DeleteOptions<TData, TVariables, DE = any> = {
  onDeleted?: (data: TData) => void;
  mutation?: MutationHookOptions<TData, TVariables>;
  dialog?: DialogOptions<DE>;
};

function useDelete<TData, TVariables extends OperationVariables>(
  useDeleteMany: (
    baseOptions?: MutationHookOptions<TData, TVariables>,
  ) => MutationTuple<TData, TVariables>,
  // @ts-ignore
  baseOptions?: DeleteOptions<TData, TVariables, DeleteEntity>,
): {
  delete: (
    data: DeleteEntity,
    options?: DeleteOptions<TData, TVariables, DeleteEntity>,
  ) => Promise<TData>;
  deleteMany: (
    ids: string[],
    options?: DeleteOptions<TData, TVariables, string[]>,
  ) => Promise<TData>;
} {
  const [deleteMany] = useDeleteMany({
    fetchPolicy: 'network-only',
    ...(baseOptions?.mutation || {}),
  });

  const deleting = useRef(false);

  const handleDeleteExecute = useCallback(
    async (data: any, options?: DeleteOptions<TData, TVariables, any>) => {
      const dialogOptions = options?.dialog || baseOptions?.dialog || {};
      const mutationOptions = options?.mutation || baseOptions?.mutation || {};
      const onDeleted = options?.onDeleted || baseOptions?.onDeleted;

      const { width } = dialogOptions;
      let { title, content } = dialogOptions;

      let isBatch = false;

      if (Array.isArray(data)) {
        isBatch = true;
        if (typeof title === 'function') {
          title = title(data as any, {
            batch: true,
          });
        }
        if (typeof content === 'function') {
          content = content(data as any, {
            batch: true,
          });
        }
      } else if (data) {
        if (typeof title === 'string') {
          title = fillTemplate(title, data);
        }
        if (typeof content === 'string') {
          content = fillTemplate(content, data);
        }
        if (typeof title === 'function') {
          title = title(data, {
            batch: false,
          });
        }
        if (typeof content === 'function') {
          content = content(data, {
            batch: false,
          });
        }
      }

      const execute = async () => {
        await deleteMany({
          fetchPolicy: 'network-only',
          ...mutationOptions,
          variables: {
            where: {
              id_in: isBatch ? data : [data?.id],
            },
          },
        } as any);
      };

      const result = await Modal.confirm({
        ...dialogOptions,
        title: title as any,
        content: content as any,
        width,
        okText: '删 除',
        okClassName: 'btn-danger',
        allowOutsideClick: () => {
          return !deleting.current;
        },
        preConfirm: async () => {
          deleting.current = true;
          try {
            const okButton = document.querySelector('.swal2-confirm')!;
            okButton.textContent = '删除中...';
            const spinner = document.createElement('span');
            spinner.classList.add(
              'spinner-border-sm',
              'ms-2',
              'spinner-border',
              'align-middle',
            );
            okButton.appendChild(spinner);
            const _result = await delay(execute(), 350);
            onDeleted && onDeleted(_result);
          } finally {
            deleting.current = false;
          }
        },
      });
      if (!result.isConfirmed) {
        return false;
      }
      Toast.success('删除成功', 2000, {
        placement: 'top-center',
        progressBar: true,
      });
      return true;
    },
    [],
  );

  const handleDelete = useCallback(
    async (
      data: any,
      options?: DeleteOptions<TData, TVariables, DeleteEntity>,
    ) => {
      return handleDeleteExecute(data, options);
    },
    [baseOptions, deleteMany],
  );

  const handleDeleteMany = useCallback(
    (ids: string[], options?: DeleteOptions<TData, TVariables, string[]>) => {
      return handleDeleteExecute(ids, options);
    },
    [],
  );

  return {
    delete: handleDelete as any,
    deleteMany: handleDeleteMany as any,
  };
}

export default useDelete;
