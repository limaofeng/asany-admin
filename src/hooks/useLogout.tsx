import { useCallback } from 'react';

import { useModel } from '@umijs/max';

import { logout } from '@/hooks';

type UseLogoutResult = [() => void, { loading: boolean }];

function useLogout(): UseLogoutResult {
  const { loading, refresh } = useModel('@@initialState');

  const handleLogout = useCallback(async () => {
    await logout();
    await refresh();
  }, [refresh]);

  return [handleLogout, { loading }];
}

export default useLogout;
