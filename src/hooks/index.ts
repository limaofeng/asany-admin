import { apolloClient, clientId, tokenHelper } from 'umi';

import { LoginByUsernameDocument, LogoutDocument, ViewerDocument } from './api';

import type { CurrentUser } from '@/types';
import { delay, sleep } from '@/utils';

export async function loadCurrentuser(): Promise<CurrentUser> {
  const token = localStorage.getItem('credentials');
  if (!tokenHelper.withToken() && token) {
    tokenHelper.setToken(token);
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
