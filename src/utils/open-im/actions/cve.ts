import type { ConversationItem } from 'open-im-sdk/types';

import { im } from '../../../models/open-im/auth';
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
  im.getAllConversationList().then((res: any) => {
    dispatch(setCveList(JSON.parse(res.data)));
    dispatch(setCveInitLoading(false));
  });
};