import { useCallback } from 'react';

import { LoadRoutesDocument, useDeleteRouteMutation } from './api';

import { Modal, Toast } from '@/metronic';
import type { Route } from '@/types';

function useRouteDelete(route: Route, onSuccess: (route: Route) => void) {
  const [deleteRoute] = useDeleteRouteMutation({
    variables: { id: route?.id },
    refetchQueries: [
      {
        query: LoadRoutesDocument,
        variables: {
          id: route?.application?.id,
        },
      },
    ],
  });

  const handleDelete = useCallback(async () => {
    const result = await Modal.confirm({
      title: `你确定要删除该路由吗？`,
      content: (
        <>
          您即将删除“<strong>{route.name}</strong>”。删除操作不可逆转，请谨慎操作，您确定删除吗？
        </>
      ),
      okText: '删 除',
      okClassName: 'btn-danger',
    });
    if (result.isConfirmed) {
      await deleteRoute();
      Toast.success('删除成功');
      onSuccess(route);
    }
  }, [deleteRoute, route, onSuccess]);

  return [handleDelete];
}

export default useRouteDelete;
