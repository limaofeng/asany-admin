import { useCallback, useEffect, useState } from 'react';

import { useModel } from 'umi';
import { CbEvents, OpenIMSDK } from 'open-im-sdk';
import type { InitConfig } from 'open-im-sdk/types';

export const im = new OpenIMSDK();

export default function useChatModel() {
  const currentUser = useModel('@@initialState', (model) => model.initialState?.currentUser);

  const [status, setStatus] = useState<'init' | 'login.success' | 'login.failure'>('init');

  const handleConnectFailed = useCallback((data: any) => {
    console.log('连接失败...', data);
  }, []);

  const handleConnectSuccess = useCallback((data: any) => {
    // 连接成功...
    console.log('连接成功...', data);
  }, []);

  const handleConnecting = useCallback((data: any) => {
    // 连接中...
    console.log('连接中...', data);
  }, []);

  const handleKickedOffline = useCallback((data: any) => {
    // 被踢下线...
    console.log('被踢下线...', data);
  }, []);

  const handleUserTokenExpired = useCallback((data: any) => {
    // token过期...
    console.log('token过期...', data);
  }, []);

  useEffect(() => {
    im.on(CbEvents.ONCONNECTFAILED, handleConnectFailed);
    im.on(CbEvents.ONCONNECTSUCCESS, handleConnectSuccess);

    im.on(CbEvents.ONCONNECTING, handleConnecting);

    im.on(CbEvents.ONKICKEDOFFLINE, handleKickedOffline);
    im.on(CbEvents.ONUSERTOKENEXPIRED, handleUserTokenExpired);

    return () => {
      im.off(CbEvents.ONCONNECTFAILED, handleConnectFailed);
      im.off(CbEvents.ONCONNECTSUCCESS, handleConnectSuccess);

      im.off(CbEvents.ONCONNECTING, handleConnecting);

      im.off(CbEvents.ONKICKEDOFFLINE, handleKickedOffline);
      im.off(CbEvents.ONUSERTOKENEXPIRED, handleUserTokenExpired);
    };
  }, [
    handleConnectFailed,
    handleConnectSuccess,
    handleConnecting,
    handleKickedOffline,
    handleUserTokenExpired,
  ]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const config: InitConfig = {
      userID: currentUser.uid, // 用户ID
      token: currentUser.imToken, // 用户token
      url: process.env.OPEN_IM_URL!, // jssdk server ws地址
      platformID: 5, // 平台号
    };

    im.login(config)
      .then((res) => {
        setStatus('login.success');
        console.log('login', res);
        // dispatch(getSelfInfo());
        // getCveList(cveDispatch);
        // dispatch(getFriendList());
        // dispatch(getRecvFriendApplicationList());
        // dispatch(getSentFriendApplicationList());
        // dispatch(getGroupList());
        // dispatch(getRecvGroupApplicationList());
        // dispatch(getSentGroupApplicationList());
        // dispatch(getUnReadCount());
        // dispatch(getBlackList());
        // dispatch(getAdminToken());
      })
      .catch((err) => {
        setStatus('login.failure');
        console.log('login failed...', err);
      });

    return () => {
      im.logout()
        .then((res) => {
          console.log('logout suc...', res);
        })
        .catch((err) => {
          console.log('logout failed...', err);
        });
    };
  }, [currentUser]);

  console.log('currentUser', currentUser);
  return {
    status,
  };
}
