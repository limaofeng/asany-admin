import { useEffect } from 'react';

import { useApp, useModel } from '@umijs/max';

import { ApplicationType } from '@/types';

import useCurrentuser from './useCurrentuser';

function useCurrentTenant() {
  const { state, reload } = useModel('tenant');

  const app = useApp();
  const { data: user } = useCurrentuser();

  useEffect(() => {
    if (!!state) {
      return;
    }
    if (!!app && app.type === ApplicationType.Native) {
      console.log('useCurrentTenant By Native');
      reload(app.clientId);
    } else if (!!user && app.type === ApplicationType.SaaS) {
      console.log('useCurrentTenant By SaaS');
      reload(app.clientId);
    }
  }, [app, user]);

  return { tenant: state, loading: false, error: '' };
}

export default useCurrentTenant;
