import { useCallback, useEffect, useReducer, useRef } from 'react';

import { useModel } from '@umijs/max';
import { CbEvents } from 'open-im-sdk-wasm/lib/constant';
import {
  ConversationItem,
  WsResponse,
} from 'open-im-sdk-wasm/lib/types/entity';

import { getCveList, setCurCve, setCveList } from './actions/cve';
import { IMSDK } from './auth';
import type { CveActionTypes, CveState } from './types/cve';
import { SET_CUR_CVE, SET_CVE_INIT_LOADING, SET_CVE_LIST } from './types/cve';

// import { cveSort } from '@/utils/open-im/utils/im';

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

const cveSort = (cveList: ConversationItem[]) => {
  const arr: string[] = [];
  const filterArr = cveList.filter(
    (c) => !arr.includes(c.conversationID) && arr.push(c.conversationID),
  );
  filterArr.sort((a, b) => {
    if (a.isPinned === b.isPinned) {
      const aCompare =
        a.draftTextTime! > a.latestMsgSendTime!
          ? a.draftTextTime!
          : a.latestMsgSendTime!;
      const bCompare =
        b.draftTextTime! > b.latestMsgSendTime!
          ? b.draftTextTime!
          : b.latestMsgSendTime!;
      if (aCompare > bCompare) {
        return -1;
      } else if (aCompare < bCompare) {
        return 1;
      } else {
        return 0;
      }
    } else if (a.isPinned && !b.isPinned) {
      return -1;
    } else {
      return 1;
    }
  });
  return filterArr;
};

function useCveModel() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginStatus = useModel('open-im.auth', (_state) => _state.status);

  useEffect(() => {
    if (loginStatus !== 'login.success') {
      dispatch(setCveList([]));
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
    const idx = changes.findIndex(
      (c) => c.conversationID === tmpCurCve?.conversationID,
    );
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
    IMSDK.on(CbEvents.OnConversationChanged, conversationChnageHandler);
    IMSDK.on(CbEvents.OnNewConversation, newConversationHandler);
    return () => {
      IMSDK.off(CbEvents.OnConversationChanged, conversationChnageHandler);
      IMSDK.off(CbEvents.OnNewConversation, newConversationHandler);
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
