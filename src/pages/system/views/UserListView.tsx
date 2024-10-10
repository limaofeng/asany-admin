import { useCurrentuser } from '@/hooks';
import { ContentWrapper } from '@/layouts/components';

import UserList from '../components/UserList';

function UserListView() {
  const { data: user } = useCurrentuser();
  return (
    <ContentWrapper
      header={{
        title: '用户列表',
      }}
    >
      <UserList
        where={{
          tenantId: user?.tenantId,
        }}
      />
    </ContentWrapper>
  );
}

export default UserListView;
