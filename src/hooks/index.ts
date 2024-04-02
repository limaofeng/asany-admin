import { apolloClient, tokenHelper, useAppClientId } from '@umijs/max';

import type { CurrentUser } from '@/types';
import { delay, sleep } from '@/utils';

import { LoginByUsernameDocument, LogoutDocument, ViewerDocument } from './api';

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
  const {
    data: { viewer },
  } = await apolloClient.query({
    query: ViewerDocument,
    fetchPolicy: 'no-cache',
  });
  return viewer;
}

export async function loginWithUsername(username: string, password: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const clientId = useAppClientId();
  const {
    data: { login },
  } = await delay(
    apolloClient.mutate({
      mutation: LoginByUsernameDocument,
      variables: {
        clientId,
        username,
        password,
      },
      fetchPolicy: 'no-cache',
    }),
    1000,
  );
  localStorage.setItem('credentials', login.token);
  tokenHelper.setToken(login.token);
  return login;
}

export async function logout() {
  try {
    await Promise.race([
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
export { default as useLogout } from './useLogout';
