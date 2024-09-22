import useDelete from '@/hooks/useDelete';

import { useDeleteManyCustomerStoresMutation } from './api';

function useCustomerStoreDelete(success?: () => void) {
  const { delete: handleDelete, deleteMany: handleDeleteMany } = useDelete(
    useDeleteManyCustomerStoresMutation,
    {
      onDeleted: () => {
        success && success();
      },
      dialog: {
        title: '你确定要删除吗？',
        content: (data, info) => {
          let message;
          if (info.batch) {
            const keys = data as any as string[];
            message = `确定删除选中的, 共 ${keys.length} 个客户吗？`;
          } else {
            message = (
              <>
                您即将删除“<strong>{data.name}</strong>
              </>
            );
          }
          return (
            <>
              <p className="tip-confirm">{message}</p>
              <p>删除的操作不可逆,请谨慎操作</p>
            </>
          );
        },
      },
    },
  );

  return { delete: handleDelete, deleteMany: handleDeleteMany };
}

export default useCustomerStoreDelete;
