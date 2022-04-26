import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { isEqual } from 'lodash';

import Popover from '../Popover';
import Tabs from '../Tabs';

import { tree } from '@/utils';

import './style/index.scss';

const QUERY_DICTS = gql(`
query dicts($filter: DictFilter){
  dicts(
    filter:$filter
  ) {
    id
    code
    type
    name
    path
    index
    parent {
      id
    }
  }
}
`);

const QUERY_DICT = gql(`
query dict($code: String){
  dict(code: $code, type: "street") {
    id
    code
    type
    name
    path
  }
}
`);

type AreaPickerProps = {
  value?: string | string[];
  onChange?: (value: string[], areas: AreaData[]) => void;
  className?: string;
  size?: 'xs' | 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  transparent?: boolean;
  bordered?: boolean;
};

type AreaData = {
  id: string;
  code: string;
  type: string;
  name: string;
  description: string;
  index: number;
  parent: {
    id: string;
  };
  children: AreaData[];
};

type AreaContentProps = {
  areas: AreaData[][];
  onSelect: (selectedKeys: string[], writed?: boolean) => void;
  selectedKeys: string[];
  onClose: () => void;
};

function AreaContent(props: AreaContentProps) {
  const { areas, onSelect, onClose } = props;

  const state = useRef<{
    value?: string;
    tabs: AreaData[][];
    selectedKeys: string[];
    activeKey: string;
  }>({ tabs: areas, selectedKeys: props.selectedKeys, activeKey: 'level_0' });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.tabs = areas;

  const handleClick = useCallback(
    (data: AreaData, level: number) => async () => {
      if (state.current.selectedKeys[level] == data.code) {
        if (data.type != 'street') {
          state.current.activeKey = `level_${level + 1}`;
          forceRender();
        } else {
          onClose();
        }
        return;
      }
      state.current.selectedKeys = state.current.selectedKeys.splice(0, level);
      state.current.selectedKeys.push(data.code);
      if (data.type != 'street') {
        state.current.activeKey = `level_${level + 1}`;
        onSelect(state.current.selectedKeys);
      } else {
        onSelect(state.current.selectedKeys, true);
      }
    },
    [onClose, onSelect],
  );

  const { tabs, selectedKeys, activeKey } = state.current;

  // console.log('tabs', tabs, areas);

  const handleChange = useCallback((key: string) => {
    // console.log('tab key change', state.current);
    state.current.activeKey = key;
    forceRender();
  }, []);

  useEffect(() => {
    if (!props.selectedKeys.length) {
      state.current.activeKey = `level_0`;
      state.current.selectedKeys = [];
      forceRender();
      return;
    }
    state.current.selectedKeys = props.selectedKeys;
    const items = state.current.tabs[props.selectedKeys.length - 1];
    const _item = items?.find((t) => t.code == props.selectedKeys[props.selectedKeys.length - 1]);
    if (!_item) {
      return;
    }
    if (_item.type == 'street') {
      state.current.activeKey = `level_${props.selectedKeys.length - 1}`;
    }
    forceRender();
  }, [props.selectedKeys]);

  return (
    <div>
      <Tabs activeKey={activeKey} onChange={handleChange} className="nav-line-tabs-2x">
        {tabs.map((items, i) => (
          <Tabs.TabPane
            // eslint-disable-next-line react/no-array-index-key
            key={`level_${i}`}
            tab={items.find((t) => t.code == selectedKeys[i])?.name || '请选择'}
          >
            <ul className="ui-area-content-list">
              {items.map((item) => (
                <li
                  key={item.id}
                  className={classnames({
                    'long-area': item.name.length > 6,
                    'ui-area-current': selectedKeys.includes(item.code),
                  })}
                >
                  <a onClick={handleClick(item, i)}>{item.name}</a>
                </li>
              ))}
            </ul>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
}

function AreaPicker(props: AreaPickerProps) {
  const { className, size, solid, placeholder, transparent, bordered = true, onChange } = props;

  const state = useRef<{
    value: string[];
    tabs: AreaData[][];
    popover: boolean;
    loading: boolean;
    selectedItems: AreaData[];
    _selectedItems: AreaData[];
  }>({
    value: [],
    tabs: [],
    popover: false,
    loading: false,
    selectedItems: [],
    _selectedItems: [],
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [loadStreet, { loading: singleLoading }] = useLazyQuery(QUERY_DICT, {
    fetchPolicy: 'cache-and-network',
  });
  const [fetchChildren, { loading: childrenLoading }] = useLazyQuery(QUERY_DICTS, {
    fetchPolicy: 'cache-and-network',
  });
  const { data, loading: firstLoading } = useQuery<{ dicts: AreaData[] }>(QUERY_DICTS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      filter: {
        type_in: ['province', 'city', 'district', 'street'],
        level_lte: 2,
      },
    },
  });

  useEffect(() => {
    state.current.loading =
      (singleLoading || childrenLoading || firstLoading) && !state.current._selectedItems.length;
    forceRender();
  }, [singleLoading, childrenLoading, firstLoading]);

  const areas = useMemo(
    () =>
      tree(
        (data?.dicts || []).map((item) => ({ ...item })),
        {
          pidKey: 'parent.id',
          sort: (l, r) => l.index - r.index,
          converter: (item) => ({ ...item } as AreaData),
        },
      ),
    [data?.dicts],
  );

  const loadChildren = useCallback(
    async (_data: AreaData) => {
      if (!_data.children) {
        const { data: loadData } = await fetchChildren({
          variables: {
            filter: {
              parent: _data.id,
            },
          },
        });
        _data.children = (loadData?.dicts || [])
          .map((t: AreaData) => ({ ...t }))
          .sort((l: AreaData, r: AreaData) => l.index - r.index);
      }
      return _data.children;
    },
    [fetchChildren],
  );

  useEffect(() => {
    if (!props.value) {
      return;
    }
    if (Array.isArray(props.value)) {
      if (!isEqual(state.current.value, props.value)) {
        state.current.value = props.value;
        forceRender();
      }
      return;
    }
    const abortController = new AbortController();
    loadStreet({
      variables: { code: props.value },
      context: {
        fetchOptions: {
          signal: abortController.signal,
        },
      },
    }).then((result) => {
      state.current.value = result.data.dict.path.split('/').filter((t: any) => !!t);
      forceRender();
    });
    return () => {
      abortController.abort();
    };
  }, [loadStreet, props.value]);

  const loadTabs = useCallback(
    async (_value: string[], abortController?: AbortController, writed?: boolean) => {
      let parentData = areas;

      const _tabs = [parentData];
      const _selectedItems: AreaData[] = [];
      for (const code of _value) {
        const _data = parentData.find((t) => t.code == code)!;
        _selectedItems.push(_data);
        if (abortController && abortController.signal.aborted) {
          return;
        }
        if (_data.type != 'street') {
          const _children = await loadChildren(_data);
          _tabs.push((parentData = _children));
        }
      }
      state.current.tabs = _tabs;
      state.current._selectedItems = _selectedItems;
      if (writed) {
        state.current.selectedItems = _selectedItems;
        state.current.popover = false;

        const newValue = _selectedItems.map((item) => item.code);
        if (!isEqual(state.current.value, newValue)) {
          state.current.value = newValue;
        }
        onChange && onChange(newValue, _selectedItems);
      }
      forceRender();
    },
    [areas, loadChildren, onChange],
  );

  const handleSelect = useCallback(
    (keys: string[], writed) => {
      loadTabs(keys, undefined, writed);
    },
    [loadTabs],
  );

  const handleVisibleChange = useCallback((visible: boolean) => {
    if (state.current.popover == visible) {
      return;
    }
    state.current.popover = visible;
    forceRender();
  }, []);

  const { value, tabs, selectedItems, loading, popover } = state.current;

  useEffect(() => {
    const abortController = new AbortController();
    if (!areas.length) {
      return;
    }
    if (!value.length) {
      loadTabs([], abortController);
      return () => abortController.abort();
    }
    loadTabs(value, abortController, true);
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoading, value.join('-')]);

  const selectedKeys = useMemo(() => {
    return selectedItems.map((item) => item.code);
  }, [selectedItems]);

  const handleClose = useCallback(() => {
    state.current.popover = false;
    forceRender();
  }, []);

  return (
    <Popover
      trigger="click"
      overlayClassName="overlay-no-arrow area-picker-overlay"
      placement="bottom-start"
      visible={popover}
      onVisibleChange={handleVisibleChange}
      content={
        <AreaContent
          areas={tabs}
          onSelect={handleSelect}
          onClose={handleClose}
          selectedKeys={selectedKeys}
        />
      }
    >
      <div
        placeholder={!selectedItems.length && loading ? '加载数据中...' : placeholder}
        className={classnames('area-picker form-control', className, {
          [`form-control-${size}`]: !!size,
          'form-control-solid': solid,
          'form-control-transparent': transparent,
          'form-control-borderless': !bordered,
        })}
      >
        {selectedItems.map((item) => item.name).join('/')}
      </div>
    </Popover>
  );
}

export default AreaPicker;
