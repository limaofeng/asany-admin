import { useCallback, useRef, useState } from 'react';

import { useCurrentuser } from '@/hooks';
import { ContentWrapper } from '@/layouts/components';
import UserDrawer from '@/pages/system/components/UserDrawer';
import type { UserListRef } from '@/pages/system/components/UserList';
import UserList from '@/pages/system/components/UserList';
import { User } from '@/types';

function CustomerUserListView() {
  const { data: user } = useCurrentuser();

  const userListRef = useRef<UserListRef>(null);

  const [state, setState] = useState<{
    data?: User;
    visible: boolean;
  }>({
    visible: false,
  });

  const handleCloseDrawer = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleSuccess = useCallback(
    (_data: User) => {
      setState((prevState) => ({
        ...prevState,
        route: _data,
      }));
      userListRef.current!.refetch();
    },
    [setState],
  );

  const handleDeleteSuccess = useCallback(
    (_data: User) => {
      setState((prevState) => {
        if (prevState.data?.id !== _data.id) {
          return prevState;
        }
        return {
          ...prevState,
          visible: false,
          menu: undefined,
        };
      });
      userListRef.current!.refetch();
    },
    [setState],
  );

  const handleGoToAdd = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        tenantId: user?.tenantId,
        organization: {
          id: 'c_101',
        },
      } as User,
      visible: true,
    }));
  }, []);

  const handleGoToEdit = useCallback((data: User) => {
    setState((prevState) => ({
      ...prevState,
      data,
      visible: true,
    }));
  }, []);

  return (
    <ContentWrapper
      header={{
        title: '用户列表',
      }}
    >
      <UserDrawer
        data={state.data}
        onClose={handleCloseDrawer}
        onSuccess={handleSuccess}
        onDeleteSuccess={handleDeleteSuccess}
        visible={state.visible}
      />
      <UserList
        ref={userListRef}
        where={{
          tenantId: user?.tenantId,
          organization: {
            id: 'c_101',
          },
        }}
        onEdit={handleGoToEdit}
        onAdd={handleGoToAdd}
      />
    </ContentWrapper>
  );
}

export default CustomerUserListView;
