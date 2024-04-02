import { useModel } from '@umijs/max';

function useCurrentuser() {
  const { initialState, loading, error } = useModel('@@initialState');

  return { data: initialState?.currentUser, loading, error };
}

export default useCurrentuser;
