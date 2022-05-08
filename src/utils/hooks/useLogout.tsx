import { useCallback } from 'react';

import { useModel } from 'umi';

import { logout } from '@/.umi/app/utils';

type UseLogoutResult = [() => void, { loading: boolean }];

function useLogout(): UseLogoutResult {
  const { loading, refresh } = useModel('@@initialState');

  const handleLogout = useCallback(async () => {
    await logout();
    refresh();
  }, [refresh]);

  return [handleLogout, { loading }];
}

export default useLogout;
