import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { ContentWrapper } from '@/layouts/components';
import { User } from '@/types';

import UserList from '../components/UserList';

function UserListView() {
  const navigate = useNavigate();

  const handleAdd = useCallback(() => {
    navigate('/system/users/new');
  }, []);
  const handleEdit = useCallback((data: User) => {
    navigate(`/system/users/${data.id}`);
  }, []);

  return (
    <ContentWrapper
      header={{
        title: '用户列表',
      }}
    >
      <UserList where={{}} onAdd={handleAdd} onEdit={handleEdit} />
    </ContentWrapper>
  );
}

export default UserListView;
