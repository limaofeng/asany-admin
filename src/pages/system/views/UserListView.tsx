import { ContentWrapper } from '@/layouts/components';

import UserList from '../components/UserList';

function UserListView() {
  return (
    <ContentWrapper
      header={{
        title: '用户列表',
      }}
    >
      <UserList where={{}} />
    </ContentWrapper>
  );
}

export default UserListView;
