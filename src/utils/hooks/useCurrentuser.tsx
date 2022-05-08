import { useModel } from 'umi';

function useCurrentuser() {
  const { initialState, loading, error } = useModel('@@initialState');

  return { data: initialState?.currentUser, loading, error };
}

export default useCurrentuser;
