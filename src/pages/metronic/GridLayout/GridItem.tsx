import type { CSSProperties } from 'react';
import React, { useMemo } from 'react';

import classnames from 'classnames';
import { isEqual } from 'lodash';

import { useSortItem } from './hooks';
import type { GridItemContentRender, IGridItem } from './typings';
import { injectAnime } from './utils';

export interface SortItemProps {
  data: IGridItem;
  className?: string;
  style?: CSSProperties;
  itemRender: GridItemContentRender;
}

function GridItem({
  data,
  itemRender: ItemRender,
  className,
  style,
  ...props
}: SortItemProps) {
  const [
    {
      style: additionStyle,
      className: additionClassName,
      remove,
      resize,
      update,
    },
    ref,
    drag,
  ] = useSortItem(data);

  const animated = injectAnime(props);

  const styleMerged = useMemo(
    () => ({ ...style, ...additionStyle }),
    [style, additionStyle],
  );
  const classNameMerged = useMemo(
    () => classnames(className, additionClassName),
    [className, additionClassName],
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const animatedMerged = useMemo(() => animated, [animated.key]);

  return React.useMemo(
    () => (
      <ItemRender
        {...props}
        data-resizable={(data as any).moveable?.resizable}
        animated={animatedMerged}
        style={{ ...style, ...additionStyle }}
        className={classnames(className, additionClassName)}
        data={data}
        actions={{ resize, remove, update }}
        drag={drag}
        ref={ref}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [styleMerged, classNameMerged, animatedMerged, data],
  );
}

export default React.memo(GridItem, isEqual);
