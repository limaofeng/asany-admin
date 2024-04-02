import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';

import type { Route } from '@umijs/route-utils/dist/types';

import type { Menu as MenuData } from '@/types';

export type LayoutState = {
  routes: Route[];
  menus: MenuData[];
  aside: {
    pure: boolean;
    width: number;
    menus: MenuData[];
    minimize: boolean;
    collapsible?: boolean;
  };
};

type LayoutAction = {
  type: 'ASIDE_MINIMIZE' | 'ASIDE_WIDTH' | 'ASIDE_COLLAPSIBLE';
  payload?: any;
};

type UnsubscribeFunc = () => void;

type SubscribeCallback = () => void;

type SubscribeFunc = (callback: SubscribeCallback) => UnsubscribeFunc;

export type DispatchWithoutAction = (action: LayoutAction) => void;

type LayoutStoreContext = {
  getState: () => LayoutState;
  subscribe: SubscribeFunc;
  dispatch: DispatchWithoutAction;
};

const LayoutContext = React.createContext<LayoutStoreContext>({
  getState: () => ({
    routes: [],
  }),
  subscribe: () => {},
  dispatch: () => {},
} as any);

export interface LayoutProviderProps {
  children: React.ReactNode;
  state: LayoutState;
}

const reducer = (state: LayoutState, action?: LayoutAction) => {
  if (!action) {
    return state;
  }
  if (action.type === 'ASIDE_MINIMIZE') {
    return { ...state, aside: { ...state.aside, minimize: !!action.payload } };
  }
  if (action.type === 'ASIDE_WIDTH') {
    return { ...state, aside: { ...state.aside, width: action.payload } };
  }
  if (action.type === 'ASIDE_COLLAPSIBLE') {
    return { ...state, aside: { ...state.aside, collapsible: action.payload } };
  }
  return state;
};

const initializer = (state: LayoutState): LayoutState => {
  return { ...state };
};

function useStore(initState: LayoutState): LayoutStoreContext {
  const [state, dispatch] = useReducer<
    React.ReducerWithoutAction<LayoutState>,
    LayoutState
  >(reducer, initState, initializer);
  const [listeners] = useState<SubscribeCallback[]>([]);
  const handleUnsubscribe = (callback: SubscribeCallback) => () => {
    const index = listeners.indexOf(callback);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };

  const handleSubscribe = useCallback(
    (callback: SubscribeCallback) => {
      listeners.unshift(callback);
      return handleUnsubscribe(callback);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [listeners],
  );
  const handleDispatchSubscribe = useCallback(() => {
    listeners.forEach((listener) => listener());
  }, [listeners]);

  const initStore = {
    getState: () => state,
    dispatch,
    subscribe: handleSubscribe,
  };
  const [store] = useState(initStore);
  useEffect(() => {
    store.getState = () => state;
    handleDispatchSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return store;
}

export type Selector<Selected> = (state: LayoutState) => Selected;
export type EqualityFn<Selected> = (
  theNew: Selected,
  latest: Selected,
) => boolean;
const defaultEqualityFn = (a: any, b: any) => a === b;

export interface LayoutApi {
  aside: {
    state: { minimize: boolean };
    minimize: (miniable: boolean) => void;
    width: (w: number) => void;
    collapsible: (b: boolean) => void;
  };
}

export function useLayout(): LayoutApi {
  const store = useContext<LayoutStoreContext>(LayoutContext)!;
  const api = useRef<LayoutApi>({
    aside: {
      get state() {
        return store.getState().aside;
      },
      width(w: number) {
        store.dispatch({ type: 'ASIDE_WIDTH', payload: w });
      },
      minimize(miniable: boolean) {
        store.dispatch({ type: 'ASIDE_MINIMIZE', payload: miniable });
      },
      collapsible(b: boolean) {
        store.dispatch({ type: 'ASIDE_COLLAPSIBLE', payload: b });
      },
    },
  });
  return api.current;
}

function useSelector<Selected>(
  selector: Selector<Selected>,
  equalityFn: EqualityFn<Selected> = defaultEqualityFn,
) {
  const store = useContext<LayoutStoreContext>(LayoutContext)!;
  const [, forceRender] = useReducer((s) => s + 1, 0);
  const latestSelectedState = useRef<Selected>();
  const selectedState = selector(store.getState());
  function checkForUpdates() {
    const newSelectedState = selector(store.getState());
    if (equalityFn(newSelectedState, latestSelectedState.current!)) {
      return;
    }
    latestSelectedState.current = newSelectedState;
    forceRender();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => store.subscribe(checkForUpdates), []);
  return selectedState;
}

export function useLayoutSelector<Selected>(
  selector: Selector<Selected>,
  equalityFn: EqualityFn<Selected> = defaultEqualityFn,
): Selected {
  return useSelector(selector, equalityFn);
}

export function useDispatch() {
  const store = useContext<LayoutStoreContext>(LayoutContext)!;
  return store.dispatch;
}

export function LayoutProvider(props: LayoutProviderProps) {
  const { children, state } = props;
  const store = useStore(state);
  return useMemo(
    () => (
      <LayoutContext.Provider value={store}>{children}</LayoutContext.Provider>
    ),
    [children, store],
  );
}
