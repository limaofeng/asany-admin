import { useCallback, useEffect, useReducer, useRef } from 'react';

import { useModel } from 'umi';
import type { ConversationItem, WsResponse } from 'open-im-sdk/types';
import { CbEvents } from 'open-im-sdk';

import { im } from './auth';

import type { CveActionTypes, CveState } from '@/utils/open-im/types/cve';
import { SET_CUR_CVE, SET_CVE_INIT_LOADING, SET_CVE_LIST } from '@/utils/open-im/types/cve';
import { getCveList, setCurCve, setCveList } from '@/utils/open-im/actions/cve';
import { cveSort } from '@/utils/open-im/utils/im';

const initialState: CveState = {
  cves: [],
  curCve: null,
  cveInitLoading: true,
};

function reducer(state = initialState, action: CveActionTypes) {
  switch (action.type) {
    case SET_CVE_LIST:
      return { ...state, cves: action.payload };
    case SET_CUR_CVE:
      return { ...state, curCve: action.payload };
    case SET_CVE_INIT_LOADING:
      return { ...state, cveInitLoading: action.payload };
    default:
      return state;
  }
}

function useCveModel() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginStatus = useModel('open-im.auth', (_state) => _state.status);

  useEffect(() => {
    if (loginStatus != 'login.success') {
      return;
    }
    getCveList(dispatch);
  }, [loginStatus]);

  const { cves, curCve } = state;

  const temp = useRef({ cves, curCve });
  temp.current.cves = cves;
  temp.current.curCve = curCve;

  const conversationChnageHandler = useCallback((data: WsResponse) => {
    const tmpCves = temp.current.cves;
    const tmpCurCve = temp.current.curCve;
    let filterArr: ConversationItem[] = [];
    const changes: ConversationItem[] = JSON.parse(data.data);
    const chids = changes.map((ch) => ch.conversationID);
    filterArr = tmpCves.filter((tc) => !chids.includes(tc.conversationID));
    const idx = changes.findIndex((c) => c.conversationID === tmpCurCve?.conversationID);
    if (idx !== -1) dispatch(setCurCve(changes[idx]));
    const result = [...changes, ...filterArr];
    dispatch(setCveList(cveSort(result)));
  }, []);

  const newConversationHandler = useCallback((data: WsResponse) => {
    const tmpCves = temp.current.cves;
    const news: ConversationItem[] = JSON.parse(data.data);
    const result = [...news, ...tmpCves];
    dispatch(setCveList(cveSort(result)));
  }, []);

  useEffect(() => {
    im.on(CbEvents.ONCONVERSATIONCHANGED, conversationChnageHandler);
    im.on(CbEvents.ONNEWCONVERSATION, newConversationHandler);
    return () => {
      im.off(CbEvents.ONCONVERSATIONCHANGED, conversationChnageHandler);
      im.off(CbEvents.ONNEWCONVERSATION, newConversationHandler);
    };
  }, [cves, curCve, conversationChnageHandler, newConversationHandler]);

  return {
    state,
    dispatch,
    actions: {
      setCurCve: useCallback((cve: ConversationItem | null) => {
        dispatch(setCurCve(cve));
      }, []),
    },
  };
}

export default useCveModel;
