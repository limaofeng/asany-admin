import React, {
  useCallback,
  useState,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useMemo,
} from 'react';

type MenuData = {
  key: string;
  path: string;
};

export type SelectableType = 'MenuItem' | 'MenuItemOrSubMenu';

type MenuState = {
  accordion: boolean;
  selectable: SelectableType;
  menus?: Map<string, MenuData>;
  selectedKeys: string[];
  openKeys: string[];
};

type MenuAction = {
  type: 'select' | 'trigger' | 'binding' | 'reset';
  payload?: any;
};

type UnsubscribeFunc = () => void;

type SubscribeCallback = () => void;

type SubscribeFunc = (callback: SubscribeCallback) => UnsubscribeFunc;

export type DispatchWithoutAction = (action: MenuAction) => void;

type MenuStoreContext = {
  getState: () => MenuState;
  subscribe: SubscribeFunc;
  dispatch: DispatchWithoutAction;
};

const MenuContext = React.createContext<MenuStoreContext>({} as any);

export interface MenuProviderProps {
  children: React.ReactNode;
  state: MenuState;
}

const reducer = (state: MenuState, action?: MenuAction) => {
  if (action?.type === 'binding') {
    const { key, children } = action?.payload;

    const menus = state.menus!;

    if (key && !menus.has(key)) {
      menus.set(key, { key, path: `${key}/` });
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const ckey of children as string[]) {
      if (!menus.has(ckey)) {
        menus.set(ckey, { key: ckey, path: `${key}/${ckey}/` });
      } else {
        const menu = menus.get(ckey)!;
        const submenus = Array.from(menus.values()).filter((item) =>
          item.path.startsWith(`${menu.key}/`),
        );
        // eslint-disable-next-line no-restricted-syntax
        for (const m of submenus) {
          m.path = `${key}/${m.path}`;
        }
      }
    }

    return { ...state, menus };
  }
  if (action?.type === 'select') {
    return { ...state, selectedKeys: [action.payload] };
  }
  if (action?.type === 'trigger') {
    const { openKey, closeKeys = [] } = action.payload;
    const set = new Set(state.openKeys);
    closeKeys.forEach(set.delete.bind(set));
    if (openKey) {
      set.add(openKey);
    }
    return { ...state, openKeys: Array.from(set) };
  }
  return state;
};

const initializer = (state: MenuState): MenuState => {
  return { ...state, menus: new Map() };
};

function useStore(initState: MenuState): MenuStoreContext {
  const [state, dispatch] = useReducer<React.ReducerWithoutAction<MenuState>, MenuState>(
    reducer,
    initState,
    initializer,
  );
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

export type Selector<Selected> = (state: MenuState) => Selected;
export type EqualityFn<Selected> = (theNew: Selected, latest: Selected) => boolean;
const defaultEqualityFn = (a: any, b: any) => a === b;

export function useSelector<Selected>(
  selector: Selector<Selected>,
  equalityFn: EqualityFn<Selected> = defaultEqualityFn,
) {
  const store = useContext<MenuStoreContext>(MenuContext)!;
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

export function useDispatch() {
  const store = useContext<MenuStoreContext>(MenuContext)!;
  return store.dispatch;
}

export function MenuProvider(props: MenuProviderProps) {
  const { children, state } = props;
  const store = useStore(state);
  return useMemo(
    () => <MenuContext.Provider value={store}>{children}</MenuContext.Provider>,
    [children, store],
  );
}
