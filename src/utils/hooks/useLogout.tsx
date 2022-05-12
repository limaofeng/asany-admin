import { useCallback } from 'react';

import { logout, useModel } from 'umi';

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
