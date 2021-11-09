import React from 'react';
import { useCallback, useMemo } from 'react';

import type { SymbolProps } from './Symbol';

type SymbolGroupProps = {
  maxCount?: number;
  onMoreClick?: () => void;
  children: React.ReactElement<SymbolProps> | React.ReactElement<SymbolProps>[];
};

type MoreSymbolProps = {
  count: number;
  onClick?: () => void;
};

function MoreSymbol(props: MoreSymbolProps) {
  const { count, onClick } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onClick && onClick();
    },
    [onClick],
  );

  return (
    <a
      href="#"
      onClick={handleClick}
      className="symbol symbol-35px symbol-circle"
      data-bs-toggle="modal"
      data-bs-target="#kt_modal_view_users"
    >
      <span
        className="symbol-label bg-dark text-inverse-dark fs-8 fw-bolder"
        data-bs-toggle="tooltip"
        data-bs-trigger="hover"
        title="View more users"
      >
        +{count}
      </span>
    </a>
  );
}

function SymbolGroup(props: SymbolGroupProps) {
  const { onMoreClick, maxCount = 5 } = props;

  const newChildren = useMemo(() => {
    const children = React.Children.toArray(props.children);
    if (children.length <= maxCount) {
      return children;
    }
    const showChildren = children.slice(0, maxCount - 1);
    const moreNumber = children.length - showChildren.length;
    return [
      ...showChildren,
      <MoreSymbol key="more-user" count={moreNumber} onClick={onMoreClick} />,
    ];
  }, [props.children, maxCount, onMoreClick]);

  return <div className="symbol-group symbol-hover mb-3">{newChildren}</div>;
}

export default SymbolGroup;
