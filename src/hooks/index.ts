import { ApolloError } from '@apollo/client';
import { apolloClient, tokenHelper } from '@umijs/max';

import type { CurrentUser } from '@/types';
import { sleep } from '@/utils';

import { LogoutDocument, ViewerDocument } from './api';

export function tokenExists() {
  const token = localStorage.getItem('credentials');
  if (!tokenHelper.withToken() && token) {
    tokenHelper.setToken(token);
  }
  return !!token;
}

export async function loadCurrentuser(): Promise<CurrentUser | undefined> {
  if (!tokenExists()) {
    return undefined;
  }
  try {
    const {
      data: { viewer },
    } = await apolloClient.query({
      query: ViewerDocument,
      fetchPolicy: 'no-cache',
    });
    return viewer;
  } catch (error) {
    const needLogIn = (error as ApolloError).graphQLErrors.some(
      (item) => item.extensions.code === '401001',
    );
    if (needLogIn) {
      localStorage.removeItem('credentials');
      tokenHelper.resetToken();
    }
    throw error;
  }
}

export async function logout() {
  try {
    await Promise.all([
      apolloClient.mutate({
        mutation: LogoutDocument,
        fetchPolicy: 'no-cache',
      }),
      sleep(300),
    ]);
  } finally {
    localStorage.removeItem('credentials');
    tokenHelper.resetToken();
  }
}

export { default as useCurrentuser } from './useCurrentuser';
export { default as useEnquire } from './useEnquire';
export { default as useLogin } from './useLogin';
export { default as useLogout } from './useLogout';
