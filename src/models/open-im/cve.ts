import { useCallback, useEffect, useReducer } from 'react';

import { useModel } from 'umi';
import type { ConversationItem } from 'open-im-sdk/types';

import type { CveActionTypes, CveState } from '@/utils/open-im/types/cve';
import { SET_CUR_CVE, SET_CVE_INIT_LOADING, SET_CVE_LIST } from '@/utils/open-im/types/cve';
import { getCveList, setCurCve } from '@/utils/open-im/actions/cve';

const initialState: CveState = {
  cves: [],
  curCve: null,
  cveInitLoading: true,
};

function reducer(state = initialState, action: CveActionTypes) {
  console.log('reducer', state, action);

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

  console.log('im cve state: ', state);

  const loginStatus = useModel('open-im.auth', (_state) => _state.status);

  useEffect(() => {
    if (loginStatus != 'login.success') {
      return;
    }
    getCveList(dispatch);
  }, [loginStatus]);

  return {
    state,
    dispatch,
    actions: {
      setCurCve: useCallback((cve: ConversationItem) => {
        console.log('cve:', cve);
        dispatch(setCurCve(cve));
      }, []),
    },
  };
}

export default useCveModel;
