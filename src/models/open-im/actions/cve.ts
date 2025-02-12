import type { ConversationItem } from '@openim/wasm-client-sdk';

import { IMSDK } from '../auth';
import type { CveActionTypes } from '../types/cve';
import { SET_CUR_CVE, SET_CVE_INIT_LOADING, SET_CVE_LIST } from '../types/cve';

export const setCveList = (value: ConversationItem[]): CveActionTypes => {
  return {
    type: SET_CVE_LIST,
    payload: value,
  };
};

export const setCurCve = (value: ConversationItem | null): CveActionTypes => {
  return {
    type: SET_CUR_CVE,
    payload: value,
  };
};

export const setCveInitLoading = (value: boolean): CveActionTypes => {
  return {
    type: SET_CVE_INIT_LOADING,
    payload: value,
  };
};

export const getCveList = (dispatch: React.Dispatch<any>) => {
  dispatch(setCveInitLoading(true));
  IMSDK.getAllConversationList().then((res) => {
    dispatch(setCveList(res.data));
    dispatch(setCveInitLoading(false));
  });
};
