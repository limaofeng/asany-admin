import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { isEqual } from 'lodash';

import type { AreaData, Region } from '../hooks/useAreas';
import useAreas from '../hooks/useAreas';
import Popover from '../Popover';
import Tabs from '../Tabs';

import './style/index.scss';

type AreaType = 'province' | 'city' | 'district' | 'street';

export type AreaValueType = string | string[] | Region;

type RegionSelectionEnds = AreaType | ((area: AreaData) => boolean);

type TabType = { key: string; name: string; items: AreaData[] };

export type AreaPickerProps = {
  value?: AreaValueType;
  onChange?: (value: AreaValueType, areas: AreaData[]) => void;
  className?: string;
  size?: 'xs' | 'sm' | 'lg';
  filter?: (area: AreaData) => boolean;
  ends?: RegionSelectionEnds;
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
  areas: TabType[];
  onSelect: (selectedKeys: string[], writed?: boolean) => void;
  selectedKeys: string[];
  ends: (area: AreaData) => boolean;
  onClose: () => void;
};

function AreaContent(props: AreaContentProps) {
  const { areas, onSelect, onClose, ends } = props;

  const state = useRef<{
    value?: string;
    tabs: TabType[];
    selectedKeys: string[];
    activeKey: string;
  }>({ tabs: areas, selectedKeys: props.selectedKeys, activeKey: 'level_0' });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.tabs = areas;

  const handleClick = useCallback(
    (data: AreaData, level: number) => async () => {
      if (state.current.selectedKeys[level] === data.code) {
        if (!ends(data)) {
          state.current.activeKey = `level_${level + 1}`;
          forceRender();
        } else {
          onClose();
        }
        return;
      }
      state.current.selectedKeys = state.current.selectedKeys.splice(0, level);
      state.current.selectedKeys.push(data.code);
      if (ends(data)) {
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
    const _item = items?.items.find(
      (t) => t.code === props.selectedKeys[props.selectedKeys.length - 1],
    );
    if (!_item) {
      return;
    }
    if (ends(_item)) {
      state.current.activeKey = `level_${props.selectedKeys.length - 1}`;
    }
    forceRender();
  }, [props.selectedKeys, ends]);

  return (
    <div>
      <Tabs
        activeKey={activeKey}
        onChange={handleChange}
        className="nav-line-tabs-2x"
      >
        {tabs.map((tab, i) => (
          <Tabs.TabPane key={tab.key} tab={tab.name}>
            <ul className="ui-area-content-list">
              {tab.items.map((item) => (
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
  if (typeof value === 'string') {
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
    filter: areaFilter = () => true,
    ends = 'street',
    transparent,
    bordered = true,
    resultType = initResultType(props.value),
    onChange,
  } = props;

  const state = useRef<{
    value: string[];
    tabs: TabType[];
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

  const [areas, { waiting, loading, loadRegion }] = useAreas();

  useEffect(() => {
    if (!props.value) {
      return;
    }
    if (resultType === 'object') {
      const areaObj = props.value as Region;
      const _newValue = [
        areaObj.province,
        areaObj.city,
        areaObj.district,
        areaObj.street,
      ].filter((it) => !!it);
      if (!isEqual(state.current.value, _newValue)) {
        state.current.value = _newValue as any;
        forceRender();
      }
      return;
    }
    if (resultType === 'array') {
      if (!isEqual(state.current.value, props.value)) {
        state.current.value = props.value as any;
        forceRender();
      }
      return;
    }
    loadRegion(props.value as string).then((address) => {
      state.current.value = address.codes!;
      forceRender();
    });
  }, [loadRegion, props.value, resultType]);

  const isEnds = useCallback(
    (area: AreaData) => {
      if (typeof ends === 'string') {
        return ends === area.type;
      }
      return ends(area);
    },
    [ends],
  );

  const loadTabs = useCallback(
    async (_value: string[], writed?: boolean) => {
      let level = 0;
      let parentData: TabType = {
        key: `level_${level}`,
        name: '请选择',
        items: areas.filter(areaFilter),
      };
      const _tabs: TabType[] = [parentData];
      const _selectedItems: AreaData[] = [];
      for (const code of _value) {
        const _data = parentData.items.find((t) => t.code === code)!;
        _selectedItems.push(_data);
        if (isEnds(_data)) {
          break;
        }
        const _children = await _data.getChildren();
        level++;
        parentData.name = _data.name;
        _tabs.push(
          (parentData = {
            key: `level_${level}`,
            name: '请选择',
            items: _children.filter(areaFilter),
          }),
        );
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
          if (resultType === 'string') {
            retValue = newValue[newValue.length - 1];
          } else if (resultType === 'object') {
            retValue = {};
            for (const _area of _selectedItems) {
              retValue[_area.type] = _area.code;
              retValue[_area.type + 'Name'] = _area.name;
            }
          }
          onChange(retValue, _selectedItems);
        }
      }
      forceRender();
    },
    [areaFilter, areas, isEnds, onChange, resultType],
  );

  const handleSelect = useCallback(
    (keys: string[], writed?: boolean) => {
      loadTabs(keys, writed);
    },
    [loadTabs],
  );

  const handleVisibleChange = useCallback((visible: boolean) => {
    if (state.current.popover === visible) {
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
  }, [areas.length, waiting, value.join('-')]);

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
          ends={isEnds}
          onSelect={handleSelect}
          onClose={handleClose}
          selectedKeys={selectedKeys}
        />
      }
    >
      <div
        data-placeholder={
          !selectedItems.length && loading ? '加载数据中...' : placeholder
        }
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
