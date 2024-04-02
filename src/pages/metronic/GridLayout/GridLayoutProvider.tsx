import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';

import { EventEmitter } from 'events';

import update from 'immutability-helper';
import { isEqual } from 'lodash';

import type {
  CompactType,
  IGridItem,
  IGridItemLayout,
  IGridLayoutState,
  ISortableContext,
  SortableAction,
  SortableSubscribeCallback,
} from './typings';
import { SortableActionType } from './typings';
import {
  assign,
  calcWH,
  calcXY,
  compact,
  generateUUID,
  getAllCollisions,
  getCompactType,
  moveElement,
  synchronizeLayoutWithChildren,
  useDeepCompareEffect,
} from './utils';

export const SortableStoreContext = React.createContext<ISortableContext>({
  getState: () => ({}),
  subscribe: () => {},
} as any);

interface GridLayoutProviderProps {
  items: IGridItem[];
  layout: IGridItemLayout[];
  deps: readonly any[];
  children: React.ReactNode;
  preventCollision: boolean;
  verticalCompact?: boolean;
  compactType?: CompactType;
  margin: [number, number];
  cols: number;
  rowHeight: number;
  maxRows: number;
  containerPadding: [number, number];
  preview: boolean;
  draggable: boolean;
}

export const useSortableStore = () => useContext(SortableStoreContext);

export const useSortableState = () => {
  return useSortableStore().getState();
};

export const useEventManager = () => {
  return useSortableStore().eventEmitter;
};

export const useSortableDispatch = () => {
  return useSortableStore().dispatch;
};

export type Selector<Selected> = (state: IGridLayoutState) => Selected;
export type EqualityFn<Selected> = (
  theNew: Selected,
  latest: Selected,
) => boolean;

const defaultEqualityFn = (a: any, b: any) => a === b;

/**
 * 模仿 Redux 的 useSortableSelector
 * @param selector
 * @param equalityFn
 */
export default function useSortableSelector<Selected>(
  selector: Selector<Selected>,
  equalityFn: EqualityFn<Selected> = defaultEqualityFn,
) {
  const store = useSortableStore();
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
  useEffect(() => {
    const unsubscribe = store.subscribe(checkForUpdates);
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return selectedState;
}

function useStore(
  _items: IGridItem[],
  _layout: IGridItemLayout[],
  _preventCollision: boolean,
  _verticalCompact: boolean,
  _compactType: CompactType,
  _margin: [number, number],
  _cols: number,
  _rowHeight: number,
  _maxRows: number,
  _containerPadding: [number, number],
  preview: boolean,
  draggable: boolean,
): ISortableContext {
  const prevStore = useSortableStore();
  const [SORTABLE_ID] = useState(generateUUID());
  const [state, dispatch] = useReducer<
    React.ReducerWithoutAction<IGridLayoutState>
  >(
    ((_state: IGridLayoutState, action: SortableAction): IGridLayoutState => {
      // console.log('Sortable State', state.id, action.type, action.payload);
      if (action.type === SortableActionType.UPDATE_PREVIEW) {
        return update(_state, {
          preview: {
            $set: action.payload,
          },
        });
      }
      if (action.type === SortableActionType.UPDATE_ID) {
        return update(_state, {
          id: {
            $set: action.payload,
          },
        });
      }
      if (action.type === SortableActionType.register) {
        const data = action.payload;
        const item = _state.items.find((_item) => _item.id == data.id)!;
        assign(item, data);
        return { ..._state };
      }
      if (action.type === SortableActionType.move) {
        const { id, position } = action.payload;
        const prevLayout = _state.layout.map((l) => ({ ...l }));
        const itemLayout = prevLayout.find((item) => item.id == id)!;
        if (!itemLayout) {
          return _state;
        }
        const { x, y } = calcXY(
          {
            margin: _state.margin,
            cols: _state.cols,
            rowHeight: _state.rowHeight,
            maxRows: _state.maxRows,
            containerPadding: _state.containerPadding,
            containerWidth: _state.containerWidth,
          },
          position.top,
          position.left,
          itemLayout.w,
          itemLayout.h,
        );
        const isUserAction = true;
        const layout = moveElement(
          prevLayout,
          itemLayout,
          x,
          y,
          isUserAction,
          _state.preventCollision,
          _state.compactType,
          _state.cols,
        );

        const newLayout = compact(
          layout,
          getCompactType(_state.verticalCompact, _state.compactType),
          _state.cols,
        );

        console.log('move', _state.layout.length, newLayout.length);
        if (isEqual(newLayout, _state.layout)) {
          return _state;
        }

        return update(_state, {
          layout: {
            $set: newLayout,
          },
        });
      }
      if (action.type === SortableActionType.resize) {
        const { id, width, height } = action.payload;
        const {
          layout,
          cols,
          containerPadding,
          preventCollision,
          containerWidth,
          margin,
          maxRows,
          rowHeight,
        } = _state;
        const l = layout.find((item) => item.id == id)!;
        const {
          x,
          y,
          maxW = Infinity,
          minW = 0,
          maxH = Infinity,
          minH = 0,
        } = l;
        let { w, h } = calcWH(
          {
            cols,
            containerPadding,
            containerWidth,
            margin,
            maxRows,
            rowHeight,
          },
          width,
          height,
          x,
          y,
        );
        w = Math.min(w, cols - x);
        w = Math.max(w, 1);
        w = Math.max(Math.min(w, maxW), minW);
        h = Math.max(Math.min(h, maxH), minH);

        let hasCollisions;
        if (preventCollision) {
          const collisions = getAllCollisions(layout, { ...id, w, h }).filter(
            (layoutItem) => layoutItem.id !== l.id,
          );
          hasCollisions = collisions.length > 0;
          if (hasCollisions) {
            let leastX = Infinity,
              leastY = Infinity;
            collisions.forEach((layoutItem) => {
              if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
              if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
            });

            if (Number.isFinite(leastX)) l.w = leastX - l.x;
            if (Number.isFinite(leastY)) l.h = leastY - l.y;
          }
        }

        if (!hasCollisions) {
          l.w = w;
          l.h = h;
        }

        return update(_state, {
          layout: {
            $set: compact(
              layout,
              getCompactType(_state.verticalCompact, _state.compactType),
              cols,
            ),
          },
        });
      }
      if (action.type === SortableActionType.remove) {
        const { items, layout } = _state;
        const item = action.payload;
        const itemIndex = items.findIndex((data) => data.id == item.id);
        if (itemIndex == -1) {
          return _state;
        }
        return update(_state, {
          items: {
            $splice: [[itemIndex, 1]],
          },
          layout: {
            $set: synchronizeLayoutWithChildren(
              layout.filter((data) => data.id != item.id),
              _state.cols,
              getCompactType(_state.verticalCompact, _state.compactType),
            ),
          },
        });
      }
      if (action.type === SortableActionType.moveIn) {
        const {
          layout: itemLayout,
          item: { sortable, rect, ...item },
        } = action.payload;

        // console.log('moveIn', action.payload, itemLayout, item);

        const newState = update(_state, {
          items: {
            $push: [item],
          },
          layout: {
            $push: [itemLayout],
            // $set: synchronizeLayoutWithChildren([...state.layout, itemLayout], state.cols, state.compactType),
          },
        });
        return newState;
      }
      if (action.type === SortableActionType.resizing) {
        return update(_state, {
          backup: {
            $set: { items: [..._state.items], layout: [..._state.layout] },
          },
          resizing: {
            $set: action.payload,
          },
        });
      }
      if (action.type === SortableActionType.resizeStop) {
        return update(_state, {
          backup: {
            $set: undefined,
          },
          resizing: {
            $set: undefined,
          },
          logs: {
            $set: [],
          },
        });
      }
      if (action.type === SortableActionType.dragging) {
        // console.log('handleReset backup', state.id, state.backup);
        return update(_state, {
          backup: {
            $set: { items: [..._state.items], layout: [..._state.layout] },
          },
          dragging: {
            $set: action.payload,
          },
        });
      }
      if (action.type === SortableActionType.drop) {
        return update(_state, {
          backup: {
            $set: undefined,
          },
          dragging: {
            $set: undefined,
          },
          logs: {
            $set: [],
          },
        });
      }
      if (action.type === SortableActionType.reset) {
        const { items, backup } = _state;
        if (!backup) {
          return _state;
        }
        return update(_state, {
          items: {
            $set: backup.items.map((item) => {
              const original = items.find((x) => x.id == item.id);
              return original || item;
            }),
          },
          layout: {
            $set: backup.layout,
          },
          backup: {
            $set: undefined,
          },
          dragging: {
            $set: undefined,
          },
          logs: {
            $set: [],
          },
        });
      }
      if (action.type === SortableActionType.moving) {
        return update(_state, {
          moving: {
            $set: action.payload,
          },
        });
      }
      if (action.type === SortableActionType.containerWidth) {
        return update(_state, {
          containerWidth: {
            $set: action.payload,
          },
        });
      }
      if (action.type == SortableActionType.init) {
        return { ..._state, ...action.payload };
      }
      return _state;
    }) as any,
    {
      items: _items,
      layout: synchronizeLayoutWithChildren(_layout, _cols, 'vertical'),
      preventCollision: _preventCollision,
      verticalCompact: _verticalCompact,
      compactType: _compactType,
      logs: [],
      id: SORTABLE_ID,
      moving: false,
      preview: !!preview,
      draggable,
      containerWidth: 0,
      margin: _margin,
      cols: _cols,
      rowHeight: _rowHeight,
      maxRows: _maxRows,
      containerPadding: _containerPadding,
    } as any,
  );
  const [listeners] = useState<SortableSubscribeCallback[]>([]);
  const handleUnsubscribe = (callback: SortableSubscribeCallback) => () => {
    const index = listeners.indexOf(callback);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
  const handleSubscribe = useCallback(
    (callback: SortableSubscribeCallback) => {
      listeners.push(callback);
      return handleUnsubscribe(callback);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [listeners],
  );
  const handleDispatchSubscribe = useCallback(() => {
    for (const listener of listeners) {
      listener();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const initStore: ISortableContext = {
    getState: () => state,
    dispatch,
    eventEmitter: prevStore.eventEmitter || new EventEmitter(),
    subscribe: handleSubscribe,
  };
  const [store] = useState(initStore);

  const parentId = useSortableSelector((_state) => _state.id);
  useEffect(() => {
    if (!parentId) {
      return;
    }
    (dispatch as any)({
      type: SortableActionType.UPDATE_ID,
      payload: parentId + '/' + SORTABLE_ID,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentId]);

  const parentPreview = useSortableSelector((_state) => _state.preview);

  useEffect(() => {
    if (parentPreview == undefined) {
      (dispatch as any)({
        type: SortableActionType.UPDATE_PREVIEW,
        payload: preview,
      });
      return;
    }
    (dispatch as any)({
      type: SortableActionType.UPDATE_PREVIEW,
      payload: parentPreview,
    });
  }, [preview, parentPreview]);

  useEffect(() => {
    store.getState = () => state;
    handleDispatchSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const outside = _items.map(
    ({ _originalSortable, _sortable, _rect, ...item }: any) => item,
  );
  useDeepCompareEffect(() => {
    const _state = store.getState();
    const inside = _state.items.map(
      ({ _originalSortable, _sortable, _rect, ...item }) => item,
    );
    if (isEqual(inside, outside)) {
      return;
    }
    const newlayout = synchronizeLayoutWithChildren(
      _layout,
      _cols,
      getCompactType(_verticalCompact, _compactType),
    );
    console.log('isOverCurrent Change items', state.id, _layout, newlayout);
    (dispatch as any)({
      type: SortableActionType.init,
      payload: {
        items: outside.map((item) => {
          const data = state.items.find((x) => x.id == item.id);
          if (!data) {
            return item;
          }
          const { _originalSortable, _sortable, _rect, ...prevData } = data;
          return isEqual(prevData, item)
            ? data
            : assign(
                {
                  ...data,
                  get _rect() {
                    return data?._rect;
                  },
                },
                item,
              );
        }),
        layout: newlayout,
        backup: [],
        logs: [],
        moving: false,

        draggable,
        id: state.id,
        cols: _cols,
        verticalCompact: _verticalCompact,
        compactType: _compactType,
        rowHeight: _rowHeight,
        margin: _margin,
        containerPadding: _containerPadding,
      },
    });
  }, [outside, _layout]);
  useDeepCompareEffect(() => {
    const _state = store.getState();
    const newlayout = synchronizeLayoutWithChildren(
      _state.layout,
      _cols,
      getCompactType(_verticalCompact, _compactType),
    );
    console.log(
      'isOverCurrent Change Layout',
      state.id,
      newlayout,
      getCompactType(_verticalCompact, _compactType),
    );
    (dispatch as any)({
      type: SortableActionType.init,
      payload: {
        layout: newlayout,
        backup: [],
        logs: [],
        moving: false,
        preview: !!preview,
        draggable,
        id: state.id,
        cols: _cols,
        verticalCompact: _verticalCompact,
        compactType: _compactType,
        rowHeight: _rowHeight,
        margin: _margin,
        containerPadding: _containerPadding,
      },
    });
  }, [
    _cols,
    _verticalCompact,
    _compactType,
    _rowHeight,
    _margin,
    _containerPadding,
  ]);
  return store;
}

export const GridLayoutProvider = (props: GridLayoutProviderProps) => {
  const {
    deps = [],
    items,
    layout,
    children,
    preventCollision,
    verticalCompact = true,
    compactType = 'vertical',
    margin,
    cols,
    rowHeight,
    maxRows,
    containerPadding,
    preview,
    draggable,
  } = props;
  const store = useStore(
    items,
    layout,
    preventCollision,
    verticalCompact,
    compactType,
    margin,
    cols,
    rowHeight,
    maxRows,
    containerPadding,
    preview,
    draggable,
  );
  return useMemo(
    () => (
      <SortableStoreContext.Provider value={store}>
        {children}
      </SortableStoreContext.Provider>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
};
