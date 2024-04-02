import { useCallback, useRef } from 'react';

import { LoadComponentsDocument, useDeleteComponentMutation } from './api';

import { Modal, Toast } from '@/metronic';
import type { Component } from '@/types';
import { delay } from '@/utils';

function useComponentDelete(
  libraryId: string,
  onSuccess: (component: Component) => void,
) {
  const deleting = useRef(false);

  const [deleteComponent] = useDeleteComponentMutation({
    refetchQueries: [
      {
        query: LoadComponentsDocument,
        variables: {
          id: libraryId,
        },
      },
    ],
  });

  const handleDelete = useCallback(
    async (component: Component) => {
      const result = await Modal.confirm({
        title: `你确定要删除该 组件吗？`,
        content: (
          <>
            您即将删除“<strong>{component.title}</strong>
            ”。删除操作不可逆转，请谨慎操作，您确定删除吗？
          </>
        ),
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
            const _result = await delay(
              deleteComponent({
                variables: {
                  id: component.id,
                  libraryId,
                },
              }),
              350,
            );
            Toast.success('删除成功');
            console.log(_result);
          } catch (e) {
            Toast.error('保存失败');
          } finally {
            deleting.current = false;
          }
        },
      });
      if (result.isConfirmed) {
        onSuccess(component);
      }
    },
    [deleteComponent, libraryId, onSuccess],
  );

  return [handleDelete];
}

export default useComponentDelete;
