import { useCallback, useState } from 'react';

import { useCurrentTenantLazyQuery } from '@/hooks/api';
import { ApplicationLicence, ApplicationModuleConfiguration } from '@/types';

type CurrentTenant = {
  id: string;
  domain?: string;
  licence?: ApplicationLicence;
  modules: ApplicationModuleConfiguration[];
  tenantId: string;
};

export default function useCurrentTenantModel() {
  const [tenant, setTenant] = useState<CurrentTenant>();

  console.log('useCurrentTenantModel', tenant);

  const [loadCurrentTenant, { loading, error }] = useCurrentTenantLazyQuery();

  const reload = useCallback(async (clientId: string) => {
    const { data } = await loadCurrentTenant({
      fetchPolicy: 'network-only',
      variables: {
        clientId,
      },
    });
    data?.currentTenant &&
      setTenant(data.currentTenant as any as CurrentTenant);
  }, []);

  return { state: tenant, loading, error, reload };
}
