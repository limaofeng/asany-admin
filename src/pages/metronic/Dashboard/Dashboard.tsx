import React, { useCallback, useEffect, useRef } from 'react';

import {
  UIScenaMoveableActionType,
  useBlock,
  useEditorDispatch,
  useEditorSelector,
  useSketch,
} from '@asany/sunmao';
import { isEqual } from 'lodash';

import type { IGridItemLayout } from '../GridLayout';
import GridLayout from '../GridLayout';
import { dragPreview } from '../GridLayout/utils';

import PortalItem from './Widget';
import horizontal from './assets/horizontal.png';
import noCompaction from './assets/no-compact.png';
import vertical from './assets/vertical.png';
import type { GridLayoutOptions } from './properties/GridLayoutSettings';
import GridLayoutSettings from './properties/GridLayoutSettings';
import type { IWidget } from './typings';

export type PortalLayoutType = 'basic' | 'responsive';

import { ContentWrapper } from '@/layouts/components';
import type { ContentWrapperProps } from '@/layouts/components/Content/ContentWrapper';

import './style/index.scss';

const compactionTypes = [
  {
    value: 'none',
    src: noCompaction,
    label: '不压缩',
  },
  {
    value: 'horizontal',
    src: horizontal,
    label: '水平压缩',
  },
  {
    value: 'vertical',
    src: vertical,
    label: '垂直压缩',
  },
];

interface BlockProps {
  widgets: IWidget[];
  layout: IGridItemLayout[];
  compactType: string;
  settings: GridLayoutOptions;
  backgroundColor: string;
}

const defaultPortalState: BlockProps = {
  widgets: [],
  layout: [],
  compactType: 'vertical',
  settings: {
    verticalCompact: true,
    compactType: 'vertical',
    containerPadding: [0, 0],
    cols: 24,
    rowHeight: 60,
    margin: [30, 30],
  },
  backgroundColor: '#f6f6f6',
};

function Dashboard() {
  const state = useRef<BlockProps>(defaultPortalState);
  const dispatch = useEditorDispatch();

  const draggable = useEditorSelector((_state) => _state.mode === 'CONFIG');
  const staticed = useEditorSelector((_state) => _state.mode === 'VIEW');

  const {
    props: otherProps,
    update,
    Provider,
  } = useBlock<BlockProps, ContentWrapperProps>({
    key: `dashboard`,
    icon: '',
    title: '门户组件',
    props: defaultPortalState,
    customizer: {
      fields: [
        {
          name: 'compactType',
          label: '压缩类型',
          type: 'String',
          renderer: {
            component: 'ImagePicker',
            props: {
              images: compactionTypes,
              options: {
                size: '75x63',
              },
            },
          },
        },
        {
          name: 'settings',
          label: '布局网格',
          type: 'JSON',
          renderer: GridLayoutSettings,
        },
        {
          name: 'backgroundColor',
          label: '背景颜色',
          type: 'String',
          renderer: 'ColorPicker',
        },
        {
          name: 'panels',
          label: '面板数组',
          type: 'JSON',
          visible: false,
        },
        {
          name: 'layout',
          label: '布局参数',
          type: 'JSON',
          visible: false,
        },
      ],
    },
  });
  const {
    widgets,
    layout = [],
    compactType,
    backgroundColor,
    settings: {
      // verticalCompact = true,
      // compactType = 'vertical',
      rowHeight = 60,
      margin = [30, 30],
      containerPadding = [10, 10],
      cols = 10,
    },
  } = otherProps;

  const verticalCompact = compactType != 'none';

  // console.log('GridLayoutSettings', otherProps.settings);

  useEffect(() => {
    if (!isEqual(otherProps, state.current)) {
      state.current = otherProps;
    }
  }, [otherProps]);

  const handleUpdate = useCallback(() => {
    update({ ...state.current });
  }, [update]);

  const handleChange = useCallback(
    (_widgets: any, _layout: any) => {
      state.current.widgets = _widgets;
      state.current.layout = _layout;
      handleUpdate();
    },
    [handleUpdate],
  );

  const handleDragStart = useCallback(() => {
    dispatch({ type: UIScenaMoveableActionType.MoveableDisable });
  }, [dispatch]);

  const handleDragStop = useCallback(() => {
    dispatch({ type: UIScenaMoveableActionType.MoveableEnable });
  }, [dispatch]);

  const sketch = useSketch();

  const zoom = useRef(1);
  const _zoom = useEditorSelector((_state) => _state.ui.scena.zoom);
  zoom.current = _zoom;

  return (
    <Provider
      as={ContentWrapper as any}
      header={{
        title: '门户',
      }}
      footer={false}
      className="dashboard"
      style={{ backgroundColor: backgroundColor }}
      deps={[
        widgets,
        verticalCompact,
        compactType,
        rowHeight,
        cols,
        layout,
        margin,
        containerPadding,
        draggable,
        backgroundColor,
      ]}
    >
      <GridLayout
        autoSize={staticed}
        items={widgets}
        accept={[
          'widgets/card',
          'widgets/chart',
          'widgets/tables',
          'widgets/engage',
          'widgets/maps',
        ]}
        draggable={sketch.isDev()}
        onChange={handleChange}
        verticalCompact={verticalCompact}
        compactType={compactType as any}
        layout={layout}
        rowHeight={rowHeight}
        containerPadding={containerPadding}
        margin={margin}
        cols={cols}
        itemRender={PortalItem as any}
        onDragStart={handleDragStart}
        onDragStop={handleDragStop}
        preview={{
          render: dragPreview(
            React.createElement(PortalItem, {
              preview: true,
            } as any),
            {
              scale: () => zoom.current,
            },
          ),
          container: document.body,
        }}
      />
    </Provider>
  );
}

export default React.memo(Dashboard);
