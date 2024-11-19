import { useCallback, useRef, useState } from 'react';
import { useParams } from 'react-router';

import { useCurrentuser } from '@/hooks';
import { ContentWrapper } from '@/layouts/components';
import { BlockUI, Button, Card, Toast } from '@/metronic';
import UserDrawer from '@/pages/system/components/UserDrawer';
import type { UserListRef } from '@/pages/system/components/UserList';
import UserList from '@/pages/system/components/UserList';
import { User } from '@/types';

import { useCreateOrgMutation, useCustomerQuery, useOrgQuery } from '../hooks';

function CustomerUserListView() {
  const params = useParams();
  const { data: user } = useCurrentuser();

  const customerId = params.id;
  const userListRef = useRef<UserListRef>(null);

  const [state, setState] = useState<{
    data?: User;
    visible: boolean;
  }>({
    visible: false,
  });

  const {
    data: orgData,
    loading,
    refetch,
  } = useOrgQuery({
    variables: {
      code: 'c_' + customerId,
    },
    fetchPolicy: 'network-only',
  });
  const { data } = useCustomerQuery({
    variables: {
      id: customerId,
    },
    fetchPolicy: 'network-only',
  });
  const [createOrg] = useCreateOrgMutation();

  const handleCreateOrg = useCallback(async () => {
    await createOrg({
      variables: {
        input: {
          code: 'c_' + customerId,
          name: '客户:' + data?.result?.name,
          type: 'CUSTOMER',
        },
      },
    });
    Toast.success('开启登录功能成功', 2000, {
      placement: 'top-center',
    });
    await refetch();
  }, [data]);

  const handleCloseDrawer = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleSuccess = useCallback(
    (_data: User) => {
      setState((prevState) => ({
        ...prevState,
        data: _data,
      }));
      userListRef.current!.refetch();
    },
    [setState],
  );

  const handleDeleteSuccess = useCallback(() => {
    setState((prevState) => {
      if (!prevState.visible) {
        return prevState;
      }
      return {
        ...prevState,
        visible: false,
        data: undefined,
      };
    });
    userListRef.current!.refetch();
  }, [setState]);

  const handleGoToAdd = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        tenantId: user?.tenantId,
        organization: {
          id: 'c_' + customerId,
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
    <BlockUI
      zIndex={10}
      overlayClassName="bg-black bg-opacity-25"
      loading={!loading && !orgData?.organization}
      indicator={false}
      message={
        <Card className="w-450px">
          <Card.Header>
            <Card.Title>该客户还未开启登录功能</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>
              开启登录功能后，客户可以通过登录系统查看自己的信息，如设备，服务请求等。
            </p>
          </Card.Body>
          <Card.Footer>
            <Button onClick={handleCreateOrg}>为该客户开启登录功能</Button>
          </Card.Footer>
        </Card>
      }
    >
      <ContentWrapper
        header={{
          title: '用户列表',
        }}
      >
        <UserDrawer
          data={state.data}
          defaultOrg={`c_${customerId}`}
          defaultRole="CUSTOMER"
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
              id: 'c_' + customerId,
            },
          }}
          onEdit={handleGoToEdit}
          onAdd={handleGoToAdd}
        />
      </ContentWrapper>
    </BlockUI>
  );
}

export default CustomerUserListView;
