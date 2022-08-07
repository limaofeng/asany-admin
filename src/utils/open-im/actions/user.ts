import type { Dispatch } from 'redux';

// import { getAuthToken } from '../../api/admin';
import { im } from '../../../models/open-im/auth';
import type { FullUserItem, PartialUserItem } from '../sdk/types';
import type { UserActionTypes } from '../types/user';
import { SET_ADMIN_TOKEN, SET_SELF_INFO, SET_SELF_INIT_LOADING } from '../types/user';

export const setSelfInfo = (value: PartialUserItem): UserActionTypes => {
  return {
    type: SET_SELF_INFO,
    payload: value as FullUserItem,
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
  return (dispatch: Dispatch) => {
    dispatch(setSelfInitLoading(true));
    im.getSelfUserInfo().then((res) => {
      dispatch(setSelfInfo(JSON.parse(res.data)));
      dispatch(setSelfInitLoading(false));
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
