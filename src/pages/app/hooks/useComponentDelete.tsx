import { useCallback } from 'react';

import { LoadComponentsDocument, useDeleteComponentMutation } from './api';

import { Modal, Toast } from '@/metronic';
import type { Component } from '@/types';

function useComponentDelete(libraryId: string, onSuccess: (component: Component) => void) {
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
        title: `你确定要删除该路由吗？`,
        content: (
          <>
            您即将删除“<strong>{component.title}</strong>
            ”。删除操作不可逆转，请谨慎操作，您确定删除吗？
          </>
        ),
        okText: '删 除',
        okClassName: 'btn-danger',
      });
      if (result.isConfirmed) {
        await deleteComponent();
        Toast.success('删除成功');
        onSuccess(component);
      }
    },
    [deleteComponent, onSuccess],
  );

  return [handleDelete];
}

export default useComponentDelete;
