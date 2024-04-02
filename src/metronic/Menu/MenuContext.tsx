import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';

import EventEmitter from 'events';

import type {
  ClickEvent,
  EventCallback,
  MenuEvent,
  OpenCallback,
  SelectEvent,
} from './typings';

type MenuData = {
  key: string;
  icon?: string | React.ReactNode;
  path: string;
  title?: string | React.ReactNode;
};

export type SelectableType = 'MenuItem' | 'AllMenu';

type MenuState = {
  accordion: boolean;
  dropdown?: boolean;
  selectable: SelectableType;
  menus?: Map<string, MenuData>;
  selectedKeys: string[];
  openKeys: string[];
};

type MenuAction = {
  type: 'select' | 'trigger' | 'openKeys' | 'selectedKeys';
  payload?: any;
};

type UnsubscribeFunc = () => void;

type SubscribeCallback = () => void;

export type DispatchWithoutAction = (action: MenuAction) => void;

const reducer = (state: MenuState, action: MenuAction) => {
  if (action.type === 'select') {
    return { ...state, selectedKeys: [action.payload] };
  }
  if (action.type === 'openKeys') {
    return { ...state, openKeys: action.payload };
  }
  if (action.type === 'selectedKeys') {
    return { ...state, selectedKeys: action.payload };
  }
  if (action.type === 'trigger') {
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

const MENU_EVENT_CLICK = 'click';

const MENU_EVENT_SELECT = 'select';

const MENU_EVENT_OPEN_CHANGE = 'open-change';

type MENU_EVENT_NAMES =
  | typeof MENU_EVENT_SELECT
  | typeof MENU_EVENT_OPEN_CHANGE
  | typeof MENU_EVENT_CLICK;

class MenuStoreContext {
  private _eventEmitter = new EventEmitter();
  private _state: MenuState;
  private _listeners: SubscribeCallback[] = [];
  constructor(state: MenuState) {
    this._state = state;
  }
  getState() {
    return this._state;
  }
  subscribe(callback: SubscribeCallback): UnsubscribeFunc {
    this._listeners.unshift(callback);
    return this.unsubscribe(callback);
  }
  unsubscribe(callback: SubscribeCallback): UnsubscribeFunc {
    return () => {
      const index = this._listeners.indexOf(callback);
      if (index > -1) {
        this._listeners.splice(index, 1);
      }
    };
  }
  on<E extends MenuEvent>(
    eventName: MENU_EVENT_NAMES,
    callback: EventCallback<E> | OpenCallback,
  ) {
    this._eventEmitter.on(eventName, callback);
    return () => this.off(eventName, callback);
  }
  off<E extends MenuEvent>(
    eventName: MENU_EVENT_NAMES,
    callback: EventCallback<E> | OpenCallback,
  ) {
    this._eventEmitter.off(eventName, callback);
  }
  dispatchSubscribe() {
    this._listeners.forEach((listener) => listener());
  }
  openChange(openKey: string, closeKeys: string[]) {
    this.dispatch({
      type: 'trigger',
      payload: {
        openKey,
        closeKeys,
      },
    });
    this._eventEmitter.emit(MENU_EVENT_OPEN_CHANGE, this._state.openKeys);
  }
  select(key: string, e: React.MouseEvent) {
    const item = this._state.menus?.get(key);
    if (!item) {
      return;
    }
    const event: SelectEvent = {
      key,
      keyPath: item.path,
      item,
      selectedKeys: this._state.selectedKeys,
      domEvent: e,
    };
    this._eventEmitter.emit(MENU_EVENT_CLICK, event);
    this._eventEmitter.emit(MENU_EVENT_SELECT, event);
    if (event.returnValue) {
      this.dispatch({
        type: 'select',
        payload: key,
      });
    }
  }
  dispatch(action: MenuAction) {
    this._state = reducer(this._state, action);
    this.dispatchSubscribe();
  }
  removeMenuData(key: string) {
    this._state.menus!.delete(key);
  }
  addMenuData(key: string, data: MenuData) {
    this._state.menus!.set(key, data);
  }
}

const MenuContext = React.createContext<MenuStoreContext>({} as any);

export interface MenuProviderProps {
  children: React.ReactNode;
  selectedKeys?: string[];
  openKeys?: string[];
  state: MenuState;
  onClick?: EventCallback<ClickEvent>;
  onSelect?: EventCallback<SelectEvent>;
  onOpenChange?: OpenCallback;
}

const initializer = (state: MenuState): any => {
  return new MenuStoreContext({ ...state, menus: new Map<string, MenuData>() });
};

function useStore(initState: MenuState): MenuStoreContext {
  const [store] = useState(initializer.bind(undefined, initState));
  return store;
}

export type Selector<Selected> = (state: MenuState) => Selected;
export type EqualityFn<Selected> = (
  theNew: Selected,
  latest: Selected,
) => boolean;
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

export function useMenuContext() {
  return useContext<MenuStoreContext>(MenuContext)!;
}

export function MenuProvider(props: MenuProviderProps) {
  const {
    children,
    state,
    openKeys,
    selectedKeys,
    onClick,
    onSelect,
    onOpenChange,
  } = props;
  const store = useStore(state);

  useEffect(() => {
    if (!openKeys) {
      return;
    }
    store.dispatch({ type: 'openKeys', payload: openKeys });
  }, [store, openKeys]);

  useEffect(() => {
    if (!selectedKeys) {
      return;
    }
    store.dispatch({ type: 'selectedKeys', payload: selectedKeys });
  }, [store, selectedKeys]);

  useEffect(() => {
    if (!onClick) {
      return;
    }
    return store.on('click', onClick);
  }, [store, onClick]);

  useEffect(() => {
    if (!onSelect) {
      return;
    }
    return store.on('select', (e: SelectEvent) => {
      const returnValue = onSelect(e);
      e.returnValue = returnValue === false ? false : true;
    });
  }, [store, onSelect]);

  useEffect(() => {
    if (!onOpenChange) {
      return;
    }
    return store.on('open-change', onOpenChange);
  }, [store, onOpenChange]);

  return useMemo(
    () => <MenuContext.Provider value={store}>{children}</MenuContext.Provider>,
    [children, store],
  );
}
