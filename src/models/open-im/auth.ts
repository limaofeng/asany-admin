import { useCallback, useEffect, useReducer, useState } from 'react';

import { useModel } from '@umijs/max';
import { getSDK } from 'open-im-sdk-wasm';
import { CbEvents } from 'open-im-sdk-wasm/lib/constant';
import type { FullUserItem } from 'open-im-sdk-wasm/lib/types/entity';
import { InitAndLoginConfig } from 'open-im-sdk-wasm/lib/types/params';

import { getSelfInfo, getUnReadCount, setUnReadCount } from './actions/user';
import type { UserActionTypes, UserState } from './types/user';
import {
  SET_ADMIN_TOKEN,
  SET_SELF_INFO,
  SET_SELF_INIT_LOADING,
  SET_UNREAD_COUNT,
} from './types/user';

export const IMSDK = getSDK();

const initialState: UserState = {
  unReadCount: 0,
  selfInfo: {} as FullUserItem,
  adminToken: '',
  selfInitLoading: true,
};

function reducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case SET_UNREAD_COUNT:
      return { ...state, unReadCount: action.payload };
    case SET_SELF_INFO:
      return { ...state, selfInfo: { ...state.selfInfo, ...action.payload } };
    case SET_ADMIN_TOKEN:
      return { ...state, adminToken: action.payload };
    case SET_SELF_INIT_LOADING:
      return { ...state, selfInitLoading: action.payload };
    default:
      return state;
  }
}

export default function useChatModel() {
  const currentUser = useModel(
    '@@initialState',
    (model) => model.initialState?.currentUser,
  );

  const [state, dispatch] = useReducer(reducer, initialState);
  const [status, setStatus] = useState<
    'init' | 'login.success' | 'login.failure'
  >('init');

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

  const handleUserTokenExpired = useCallback((event: any) => {
    // token过期...
    console.log('token过期...', event);
  }, []);

  const handleUnreadMessageCountChanged = useCallback((event: any) => {
    dispatch(setUnReadCount(Number(event.data)));
  }, []);

  useEffect(() => {
    IMSDK.on(CbEvents.OnConnectFailed, handleConnectFailed);
    IMSDK.on(CbEvents.OnConnectSuccess, handleConnectSuccess);

    IMSDK.on(CbEvents.OnConnecting, handleConnecting);

    IMSDK.on(CbEvents.OnKickedOffline, handleKickedOffline);
    IMSDK.on(CbEvents.OnUserTokenExpired, handleUserTokenExpired);

    IMSDK.on(
      CbEvents.OnTotalUnreadMessageCountChanged,
      handleUnreadMessageCountChanged,
    );

    return () => {
      IMSDK.off(CbEvents.OnConnectFailed, handleConnectFailed);
      IMSDK.off(CbEvents.OnConnectSuccess, handleConnectSuccess);

      IMSDK.off(CbEvents.OnConnecting, handleConnecting);

      IMSDK.off(CbEvents.OnKickedOffline, handleKickedOffline);
      IMSDK.off(CbEvents.OnUserTokenExpired, handleUserTokenExpired);

      IMSDK.off(
        CbEvents.OnTotalUnreadMessageCountChanged,
        handleUnreadMessageCountChanged,
      );
    };
  }, [
    handleConnectFailed,
    handleConnectSuccess,
    handleConnecting,
    handleKickedOffline,
    handleUnreadMessageCountChanged,
    handleUserTokenExpired,
  ]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const config: InitAndLoginConfig = {
      userID: currentUser.uid, // 用户ID
      token: currentUser.imToken, // 用户token
      platformID: 5, // 平台号
      apiAddr: process.env.OPEN_IM_API_URL!, //
      wsAddr: process.env.OPEN_IM_WS_URL!, // jssdk server ws地址
    };

    IMSDK.login(config)
      .then((res) => {
        setStatus('login.success');
        console.log('login', res);
        getSelfInfo()(dispatch);
        // getCveList(cveDispatch);
        // dispatch(getFriendList());
        // dispatch(getRecvFriendApplicationList());
        // dispatch(getSentFriendApplicationList());
        // dispatch(getGroupList());
        // dispatch(getRecvGroupApplicationList());
        // dispatch(getSentGroupApplicationList());
        getUnReadCount()(dispatch);
        // dispatch(getBlackList());
        // getAdminToken()(dispatch);
      })
      .catch((err) => {
        setStatus('login.failure');
        console.log('login failed...', err);
      });

    return () => {
      IMSDK.logout()
        .then((res) => {
          setStatus('init');
          console.log('logout suc...', res);
        })
        .catch((err) => {
          console.log('logout failed...', err);
        });
    };
  }, [currentUser]);

  return {
    status,
    state,
  };
}
