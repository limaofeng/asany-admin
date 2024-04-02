import type {
  FullUserItem,
  PartialUserInfo,
} from 'open-im-sdk-wasm/lib/types/entity';
import type { Dispatch } from 'redux';

import { IMSDK } from '../auth';
import type { UserActionTypes } from '../types/user';
import {
  SET_ADMIN_TOKEN,
  SET_SELF_INFO,
  SET_SELF_INIT_LOADING,
  SET_UNREAD_COUNT,
} from '../types/user';

export const setSelfInfo = (value: PartialUserInfo): UserActionTypes => {
  return {
    type: SET_SELF_INFO,
    payload: value as unknown as FullUserItem,
  };
};

export const setAdminToken = (value: string): UserActionTypes => {
  return {
    type: SET_ADMIN_TOKEN,
    payload: value,
  };
};

export const setSelfInitLoading = (value: boolean): UserActionTypes => {
  return {
    type: SET_SELF_INIT_LOADING,
    payload: value,
  };
};

export const getSelfInfo = () => {
  return (dispatch: React.Dispatch<UserActionTypes>) => {
    dispatch(setSelfInitLoading(true));
    IMSDK.getSelfUserInfo().then((res) => {
      dispatch(setSelfInfo(res.data));
      dispatch(setSelfInitLoading(false));
    });
  };
};

export const setUnReadCount = (value: number): UserActionTypes => {
  return {
    type: SET_UNREAD_COUNT,
    payload: value,
  };
};

export const getUnReadCount = () => {
  return (dispatch: React.Dispatch<UserActionTypes>) => {
    IMSDK.getTotalUnreadMsgCount().then((res) => {
      dispatch(setUnReadCount(res.data));
    });
  };
};

export const getAdminToken = (uid?: string, secret?: string) => {
  return (dispatch: Dispatch) => {
    console.log(dispatch, uid, secret);
    // getAuthToken(uid, secret).then((res) => {
    //   dispatch(setAdminToken(res.data.token));
    // });
  };
};
