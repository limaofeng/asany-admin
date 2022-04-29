import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { isEqual } from 'lodash';

import Popover from '../Popover';
import Tabs from '../Tabs';
import type { AreaData } from '../hooks/useAreas';
import useAreas from '../hooks/useAreas';

import './style/index.scss';

type AreaType = 'province' | 'city' | 'district' | 'street';

type Address = {
  province?: string;
  city?: string;
  district?: string;
  street?: string;
};

export type AreaValueType = string | string[] | Address;

export type AreaPickerProps = {
  value?: AreaValueType;
  onChange?: (value: AreaValueType, areas: AreaData[]) => void;
  className?: string;
  size?: 'xs' | 'sm' | 'lg';
  ends?: AreaType;
  placeholder?: string;
  solid?: boolean;
  transparent?: boolean;
  bordered?: boolean;
  resultType?: 'object' | 'array' | 'string';
};

// type AreaData = {
//   id: string;
//   code: string;
//   type: string;
//   name: string;
//   description: string;
//   index: number;
//   parent: {
//     id: string;
//   };
//   children: AreaData[];
// };

type AreaContentProps = {
  areas: AreaData[][];
  onSelect: (selectedKeys: string[], writed?: boolean) => void;
  selectedKeys: string[];
  ends: AreaType;
  onClose: () => void;
};

function AreaContent(props: AreaContentProps) {
  const { areas, onSelect, onClose, ends } = props;

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
        if (data.type != ends) {
          state.current.activeKey = `level_${level + 1}`;
          forceRender();
        } else {
          onClose();
        }
        return;
      }
      state.current.selectedKeys = state.current.selectedKeys.splice(0, level);
      state.current.selectedKeys.push(data.code);
      if (data.type == ends) {
        onSelect(state.current.selectedKeys, true);
      } else {
        state.current.activeKey = `level_${level + 1}`;
        onSelect(state.current.selectedKeys);
      }
    },
    [ends, onClose, onSelect],
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
    if (_item.type == ends) {
      state.current.activeKey = `level_${props.selectedKeys.length - 1}`;
    }
    forceRender();
  }, [props.selectedKeys, ends]);

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

function initResultType(value?: AreaValueType) {
  if (!value || Array.isArray(value)) {
    return 'array';
  }
  if (typeof value == 'string') {
    return 'string';
  }
  return 'object';
}

function AreaPicker(props: AreaPickerProps) {
  const {
    className,
    size,
    solid,
    placeholder,
    ends = 'street',
    transparent,
    bordered = true,
    resultType = initResultType(props.value),
    onChange,
  } = props;

  const state = useRef<{
    value: string[];
    tabs: AreaData[][];
    popover: boolean;
    selectedItems: AreaData[];
    _selectedItems: AreaData[];
  }>({
    value: [],
    tabs: [],
    popover: false,
    selectedItems: [],
    _selectedItems: [],
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [areas, { waiting, loading, loadAddress }] = useAreas();

  useEffect(() => {
    if (!props.value) {
      return;
    }
    if (resultType == 'object') {
      const areaObj = props.value as Address;
      const _newValue = [areaObj.province, areaObj.city, areaObj.district, areaObj.street].filter(
        (it) => !!it,
      );
      if (!isEqual(state.current.value, _newValue)) {
        state.current.value = _newValue as any;
        forceRender();
      }
      return;
    }
    if (resultType == 'array') {
      if (!isEqual(state.current.value, props.value)) {
        state.current.value = props.value as any;
        forceRender();
      }
      return;
    }
    loadAddress(props.value as string).then((address) => {
      state.current.value = address.codes;
      forceRender();
    });
  }, [loadAddress, props.value, resultType]);

  const loadTabs = useCallback(
    async (_value: string[], writed?: boolean) => {
      let parentData = areas;
      const _tabs = [parentData];
      const _selectedItems: AreaData[] = [];
      for (const code of _value) {
        const _data = parentData.find((t) => t.code == code)!;
        _selectedItems.push(_data);
        if (_data.type == ends) {
          break;
        }
        const _children = await _data.getChildren();
        _tabs.push((parentData = _children));
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

        if (onChange) {
          let retValue: any = newValue;
          if (resultType == 'string') {
            retValue = newValue[newValue.length - 1];
          } else if (resultType == 'object') {
            retValue = {};
            for (const _area of _selectedItems) {
              retValue[_area.type] = _area.code;
            }
          }
          onChange(retValue, _selectedItems);
        }
      }
      forceRender();
    },
    [areas, ends, onChange, resultType],
  );

  const handleSelect = useCallback(
    (keys: string[], writed) => {
      loadTabs(keys, writed);
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

  const { value, tabs, selectedItems, popover } = state.current;

  useEffect(() => {
    if (!areas.length) {
      return;
    }
    if (!value.length) {
      loadTabs([]);
      return;
    }
    loadTabs(value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waiting, value.join('-')]);

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
          ends={ends}
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
