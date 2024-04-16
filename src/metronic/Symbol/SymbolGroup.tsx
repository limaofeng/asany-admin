import React, { useCallback, useMemo } from 'react';

import classnames from 'classnames';

import type { SymbolProps, SymbolSize } from './typings';
import { useSymbolSize } from './utils';

type SymbolGroupProps = {
  maxCount?: number;
  className?: string;
  shape?: 'circle' | 'square';
  size?: SymbolSize;
  more?: React.ReactElement<typeof MoreSymbol>;
  onMoreClick?: () => void;
  children: React.ReactElement<SymbolProps> | React.ReactElement<SymbolProps>[];
};

type MoreSymbolProps = {
  count: number;
  shape?: 'circle' | 'square';
  size?: SymbolSize;
  className?: string;
  title?: string;
  labelClassName?: string;
  onClick?: () => void;
};

export function MoreSymbol(props: MoreSymbolProps) {
  const {
    count,
    shape,
    onClick,
    size,
    className,
    labelClassName,
    title = '查看更多',
  } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onClick && onClick();
    },
    [onClick],
  );

  const sizeClass = useSymbolSize(size);

  return (
    <a
      href="#"
      onClick={handleClick}
      className={classnames('symbol', className, sizeClass, {
        'symbol-circle': shape === 'circle',
        'symbol-square': shape === 'square',
      })}
      data-bs-toggle="modal"
      data-bs-target="#kt_modal_view_users"
    >
      <span
        className={classnames('symbol-label', labelClassName)}
        title={title}
      >
        +{count}
      </span>
    </a>
  );
}

function SymbolGroup(props: SymbolGroupProps) {
  const { more, size, shape, onMoreClick, maxCount = 5, className } = props;

  const newChildren = useMemo(() => {
    const children = React.Children.toArray(props.children).map((item) =>
      React.cloneElement(item as any, {
        size: (item as any).props.size || size,
        shape,
      }),
    );
    if (children.length <= maxCount) {
      if (maxCount === children.length + 1 && more) {
        return [
          ...children,
          React.cloneElement(more as any, { key: 'more-user', size, shape }),
        ];
      }
      return children;
    }
    const showChildren = children.slice(0, maxCount - 1);
    const moreNumber = children.length - showChildren.length;
    if (!more) {
      return showChildren;
    }
    return [
      ...showChildren,
      React.cloneElement(more as any, { size, shape }) || (
        <MoreSymbol
          key="more-user"
          shape={shape}
          size={size}
          count={moreNumber}
          onClick={onMoreClick}
        />
      ),
    ];
  }, [props.children, maxCount, more, onMoreClick, size, shape]);

  return (
    <div className={classnames('symbol-group symbol-hover', className)}>
      {newChildren}
    </div>
  );
}

export default SymbolGroup;
