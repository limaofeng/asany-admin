import type { CurrentUser } from './.umi/app/typings';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
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
