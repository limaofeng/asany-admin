import { useCallback } from 'react';

import { LoadMenusDocument, useDeleteMenuMutation } from './api';

import { Modal, Toast } from '@/metronic';
import type { Menu } from '@/types';

function useMenuDelete(menu: Menu, onSuccess: (menu: Menu) => void) {
  const [deleteMenu] = useDeleteMenuMutation({
    variables: { id: menu?.id },
    refetchQueries: [
      {
        query: LoadMenusDocument,
        variables: {
          id: menu?.application?.id,
        },
      },
    ],
  });

  const handleDelete = useCallback(async () => {
    const result = await Modal.confirm({
      title: `你确定要删除该菜单吗？`,
      content: (
        <>
          您即将删除“<strong>{menu.name}</strong>
          ”。删除操作不可逆转，请谨慎操作，您确定删除吗？
        </>
      ),
      okText: '删 除',
      okClassName: 'btn-danger',
    });
    if (result.isConfirmed) {
      await deleteMenu();
      Toast.success('删除成功');
      onSuccess(menu);
    }
  }, [deleteMenu, menu, onSuccess]);

  return [handleDelete];
}

export default useMenuDelete;
