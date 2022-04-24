import { useCallback, useMemo, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { gql, useLazyQuery, useQuery } from '@apollo/client';

import { Popover } from '../../base/Popover';
import { Tabs } from '../../base/Tabs';

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
    index
    parent {
      id
    }
  }
}
`);

type AreaPickerProps = {
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
  areas: AreaData[];
};

function AreaContent(props: AreaContentProps) {
  const { areas } = props;

  const treeData = useMemo(
    () =>
      tree(
        (areas || []).map((item) => ({ ...item })),
        {
          pidKey: 'parent.id',
          sort: (l, r) => l.index - r.index,
          converter: (item) => ({ ...item }),
        },
      ) as AreaData[],
    [areas],
  );

  const [fetchChildren] = useLazyQuery(QUERY_DICTS, {
    fetchPolicy: 'cache-and-network',
  });

  const state = useRef<{
    value?: string;
    tabs: AreaData[][];
    selectedKeys: string[];
    activeKey: string;
  }>({ tabs: [treeData], selectedKeys: [], activeKey: 'level_0' });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleClick = useCallback(
    (data: AreaData, level: number) => async () => {
      const items = state.current.tabs[level];
      const _data = items.find((item) => item.code == data.code)!;

      if (_data.type == 'street') {
        state.current.value = data.code;
        state.current.selectedKeys = state.current.selectedKeys.splice(0, level);
        state.current.selectedKeys.push(data.code);
      } else {
        if (!_data.children) {
          const { data: loadData } = await fetchChildren({
            variables: {
              filter: {
                parent: _data.id,
              },
            },
          });
          _data.children = loadData.dicts;
        }
        state.current.tabs = state.current.tabs.splice(0, level + 1);
        state.current.selectedKeys = state.current.selectedKeys.splice(0, level);
        console.log('tabs', state.current.tabs);
        state.current.tabs.push(_data.children);
        state.current.selectedKeys.push(_data.code);
        state.current.activeKey = `level_${level + 1}`;
      }
      forceRender();
      console.log(data);
    },
    [fetchChildren],
  );

  if (!state.current.activeKey && treeData.length) {
    state.current.activeKey = treeData[0].type;
  }

  const { tabs, selectedKeys, activeKey } = state.current;

  const handleChange = useCallback((key: string) => {
    state.current.activeKey = key;
    forceRender();
  }, []);

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
                <li key={item.id} className={classnames({ 'long-area': item.name.length > 6 })}>
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
  const { className, size, solid, placeholder, transparent, bordered = true } = props;

  const { data } = useQuery(QUERY_DICTS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      filter: {
        type_in: ['province', 'city', 'district', 'street'],
        level_lte: 2,
      },
    },
  });

  return (
    <Popover
      trigger="click"
      overlayClassName="overlay-no-arrow area-picker-overlay"
      placement="bottom-start"
      content={<AreaContent areas={data?.dicts} />}
    >
      <div
        placeholder={placeholder}
        className={classnames('area-picker form-control', className, {
          [`form-control-${size}`]: !!size,
          'form-control-solid': solid,
          'form-control-transparent': transparent,
          'form-control-borderless': !bordered,
        })}
      />
    </Popover>
  );
}

export default AreaPicker;
