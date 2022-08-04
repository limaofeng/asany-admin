import React, { useContext, useReducer } from 'react';

import { cloneDeep } from 'lodash';

type MicroAppState = {
  aside: {
    minimize: boolean;
    width: number;
  };
};

type MicroAppStoreContext = {
  state: MicroAppState;
  dispatch: React.Dispatch<MicroAppAction>;
};

const default_state: MicroAppState = {
  aside: {
    minimize: false,
    width: 280,
  },
};

const AppContext = React.createContext<MicroAppStoreContext>({
  state: default_state,
  dispatch: (() => {}) as any,
});

type AppProviderProps = {
  children: React.ReactNode;
};

export enum MicroAppActionKind {
  AsideToggle = 'ASIDE_TOGGLE',
  AsideWidth = 'ASIDE_WIDTH',
}

type MicroAppAction = {
  type: MicroAppActionKind;
  payload?: any;
};

function reducer(state: MicroAppState, action: MicroAppAction): MicroAppState {
  switch (action.type) {
    case 'ASIDE_TOGGLE':
      state.aside.minimize = !state.aside.minimize;
      return { ...state };
    case 'ASIDE_WIDTH':
      state.aside.width = action.payload;
      return { ...state };
    default:
      throw new Error();
  }
}

export const AppProvider = (props: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, cloneDeep(default_state));
  return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};

export const useMicroApp = () => {
  return useContext(AppContext);
};
