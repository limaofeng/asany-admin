import { ApplicationModuleConfiguration } from '@/types';

import useCurrentTenant from './useCurrentTenant';

function useAppModule(
  key: string,
): [ApplicationModuleConfiguration | undefined] {
  const { tenant } = useCurrentTenant();

  const module = tenant?.modules.find((item) => item.key === key);

  return [module];
}

export default useAppModule;
