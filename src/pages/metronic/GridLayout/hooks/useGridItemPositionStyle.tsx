import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

import useSortableSelector from '../GridLayoutProvider';
import type { IGridItem, IGridItemLayout, Position } from '../typings';
import { calcGridItemPosition } from '../utils';

export function perc(num: number): string {
  return num * 100 + '%';
}

function setTopLeft({ top, left, width, height }: Position) {
  return {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
    position: 'absolute',
  };
}

function setTransform({ top, left, width, height }: Position) {
  // Replace unitless items with px
  const translate = `translate(${left}px,${top}px)`;
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: `${width}px`,
    height: `${height}px`,
    position: 'absolute',
  };
}

const createStyle = (
  pos: Position,
  containerWidth: number,
  usePercentages: boolean,
  useCSSTransforms: boolean,
): CSSProperties => {
  let style: any;
  if (useCSSTransforms) {
    style = setTransform(pos);
  } else {
    style = setTopLeft(pos);
    if (usePercentages) {
      style.left = perc(pos.left / containerWidth);
      style.width = perc(pos.width / containerWidth);
    }
  }
  return style;
};

function useGridItemPositionStyle(_: IGridItem, layout: IGridItemLayout) {
  const containerWidth = useSortableSelector((state) => state.containerWidth);
  const containerPadding = useSortableSelector((state) => state.containerPadding);
  const margin = useSortableSelector((state) => state.margin);
  const cols = useSortableSelector((state) => state.cols);
  const rowHeight = useSortableSelector((state) => state.rowHeight);
  const maxRows = useSortableSelector((state) => state.maxRows);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!containerWidth || !layout) {
      return;
    }
    const position = calcGridItemPosition(
      {
        containerWidth,
        containerPadding,
        margin,
        cols,
        rowHeight,
        maxRows,
      },
      layout,
    );
    const _style = createStyle(position, containerWidth, false, false);
    // console.log('newLayout to css', layout.y, _style.top, JSON.stringify(layout))
    setStyle(_style);
  }, [
    containerWidth,
    containerPadding,
    margin,
    cols,
    rowHeight,
    maxRows,
    layout?.w,
    layout?.h,
    layout?.x,
    layout?.y,
    layout,
  ]);
  return style;
}

export default useGridItemPositionStyle;
