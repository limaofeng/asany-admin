import { CurrentUser } from './types';

export default function access(initialState: { currentUser?: CurrentUser }) {
  const { currentUser } = initialState || {};
  return {
    anonymous: !currentUser,
    isAuthorized: !!currentUser,
    hasRole: () => {
      if (!currentUser) {
        return false;
      }
      const { authorities } = currentUser;
      return authorities.some((item) => item === 'ROLE_ADMIN');
    },
  };
}
