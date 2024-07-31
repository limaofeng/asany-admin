import { useMemo } from 'react';

import { apolloClient, tokenHelper, useAppClientId } from '@umijs/max';

import { delay } from '@/utils';

import { LoginByUsernameDocument, LoginByWeixinDocument } from './api';

const buildLoginWithWeixin = (clientId: string) =>
  async function loginWithWeixin(authCode: string) {
    const {
      data: { login },
    } = await delay(
      apolloClient.mutate({
        mutation: LoginByWeixinDocument,
        variables: {
          clientId,
          authCode,
        },
        fetchPolicy: 'no-cache',
      }),
      1000,
    );
    localStorage.setItem('credentials', login.token);
    tokenHelper.setToken(login.token);
    return login;
  };

const buildLoginWithUsername = (clientId: string) =>
  async function loginWithUsername(username: string, password: string) {
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
  };

export default function useLogin() {
  const clientId = useAppClientId();
  const loginWithUsername = useMemo(
    () => buildLoginWithUsername(clientId),
    [clientId],
  );
  const loginWithWeixin = useMemo(
    () => buildLoginWithWeixin(clientId),
    [clientId],
  );

  return { loginWithUsername, loginWithWeixin };
}
