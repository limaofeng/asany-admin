import { useLocation } from '@umijs/max';
import qs from 'query-string';

function useQuery<
  T = {
    [key: string]: any;
  },
>() {
  const location = useLocation();
  return qs.parse(location.search) as T;
}

export default useQuery;
