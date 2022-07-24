import React, { useCallback, useRef } from 'react';

import { numberFormat, ScrubbableControl } from '@asany/sunmao';

import type { CompactType } from '../../GridLayout';

export type GridLayoutOptions = {
  verticalCompact: boolean;
  compactType: CompactType;
  containerPadding: [number, number];
  cols: number;
  rowHeight: number;
  margin: [number, number];
};

interface GridLayoutSettingsProps {
  value: GridLayoutOptions;
  onChange: (value: GridLayoutOptions) => void;
}

function GridLayoutSettings(props: GridLayoutSettingsProps) {
  const { value, onChange } = props;
  const state = useRef<GridLayoutOptions>(value);
  state.current = value;

  const handleCols = useCallback(
    (_value: number) => {
      onChange && onChange({ ...state.current, cols: _value });
    },
    [onChange],
  );

  const handleRowHeight = useCallback(
    (_value: number) => {
      onChange && onChange({ ...state.current, rowHeight: _value });
    },
    [onChange],
  );

  const handleContaineradding = useCallback(
    (_value: number) => {
      onChange && onChange({ ...state.current, containerPadding: [_value, _value] });
    },
    [onChange],
  );

  const handleMargin = useCallback(
    (_value: number) => {
      onChange && onChange({ ...state.current, margin: [_value, _value] });
    },
    [onChange],
  );

  return (
    <div className="grid-layout-settings design-rows design-colums content-col asanyeditor-auto-layout">
      {/* <SegmentedControl
        options={[
          { value: 'noCompact', icon: 'GridMove', label: '任意拖拽' },
          { value: 'vertical', icon: 'VectorArrowRight', label: '垂直方向' },
          { value: 'horizontal', icon: 'VectorArrowButtom', label: '水平方向' },
        ]}
        value={value?.verticalCompact ? value?.compactType : 'noCompact'}
        onChange={handleCompactType}
      /> */}
      <ScrubbableControl
        className="grid-column"
        format={numberFormat}
        value={value?.cols}
        onChange={handleCols}
        icon="GridColumn"
        label="列数"
      />
      <ScrubbableControl
        className="row-height"
        format={numberFormat}
        value={value?.rowHeight}
        onChange={handleRowHeight}
        icon="RowHeight"
        label="行高"
      />
      <ScrubbableControl
        className="container-padding"
        format={numberFormat}
        value={value?.containerPadding[0]}
        onChange={handleContaineradding}
        icon="VectorPadding"
        label="容器内边距"
      />
      <ScrubbableControl
        className="margin"
        format={numberFormat}
        value={value?.margin[0]}
        onChange={handleMargin}
        icon="VectorPadding"
        label="格子边距"
      />
    </div>
  );
}

export default React.memo(GridLayoutSettings);
