import { useCallback, useEffect, useReducer, useState } from 'react';

import { useModel } from 'umi';
import { CbEvents, OpenIMSDK } from 'open-im-sdk';
import { getSDK } from 'open-im-sdk-wasm';
import type { FullUserItem, InitConfig } from 'open-im-sdk/types';

import { getSelfInfo, getUnReadCount, setUnReadCount } from '@/utils/open-im/actions/user';
import type { UserActionTypes, UserState } from '@/utils/open-im/types/user';
import { SET_ADMIN_TOKEN, SET_SELF_INFO, SET_SELF_INIT_LOADING } from '@/utils/open-im/types/user';
import { SET_UNREAD_COUNT } from '@/utils/open-im/types/user';

export const im = new OpenIMSDK();

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
  const currentUser = useModel('@@initialState', (model) => model.initialState?.currentUser);

  const [state, dispatch] = useReducer(reducer, initialState);
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

  const handleUserTokenExpired = useCallback((event: any) => {
    // token过期...
    console.log('token过期...', event);
  }, []);

  const handleUnreadMessageCountChanged = useCallback((event: any) => {
    dispatch(setUnReadCount(Number(event.data)));
  }, []);

  useEffect(() => {
    im.on(CbEvents.ONCONNECTFAILED, handleConnectFailed);
    im.on(CbEvents.ONCONNECTSUCCESS, handleConnectSuccess);

    im.on(CbEvents.ONCONNECTING, handleConnecting);

    im.on(CbEvents.ONKICKEDOFFLINE, handleKickedOffline);
    im.on(CbEvents.ONUSERTOKENEXPIRED, handleUserTokenExpired);

    im.on(CbEvents.ONTOTALUNREADMESSAGECOUNTCHANGED, handleUnreadMessageCountChanged);

    return () => {
      im.off(CbEvents.ONCONNECTFAILED, handleConnectFailed);
      im.off(CbEvents.ONCONNECTSUCCESS, handleConnectSuccess);

      im.off(CbEvents.ONCONNECTING, handleConnecting);

      im.off(CbEvents.ONKICKEDOFFLINE, handleKickedOffline);
      im.off(CbEvents.ONUSERTOKENEXPIRED, handleUserTokenExpired);

      im.off(CbEvents.ONTOTALUNREADMESSAGECOUNTCHANGED, handleUnreadMessageCountChanged);
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
    const IMSDK = getSDK('/assets/plugins/custom/open-im-sdk/openIM.wasm');

    const config: InitConfig = {
      userID: currentUser.uid, // 用户ID
      token: currentUser.imToken, // 用户token
      url: process.env.OPEN_IM_URL!, // jssdk server ws地址
      platformID: 5, // 平台号
    };

    IMSDK.login({
      platformID: 5,
      apiAddr: process.env.OPEN_IM_API_URL!,
      wsAddr: process.env.OPEN_IM_WS_URL!,
      userID: currentUser.uid,
      token: currentUser.imToken,
    }).then((res) => {
      console.log(res);
    });

    im.login(config)
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
      im.logout()
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
