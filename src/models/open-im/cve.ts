import { useEffect, useReducer } from 'react';

import { useModel } from 'umi';

import { getCveList } from './actions/cve';
import type { CveActionTypes, CveState } from './types/cve';
import { SET_CUR_CVE, SET_CVE_INIT_LOADING, SET_CVE_LIST } from './types/cve';

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

  return { state, dispatch };
}

export default useCveModel;
