import React, { useCallback, useRef } from 'react';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { throttle } from 'throttle-debounce';
import useMergedRef from '@react-hook/merged-ref';

import { Loading } from '../Loading';

type ScrollViewProps = {
  data: any[];
  fetchMoreData: () => void;
  hasMore: boolean;
  loading: boolean;
  height?: number;
  children: React.ReactNode;
};

const ScrollView = (
  { data, fetchMoreData, hasMore, children, loading, height }: ScrollViewProps,
  ref?: React.ForwardedRef<OverlayScrollbarsComponent | undefined>,
) => {
  const onScroll = useCallback(
    async (e: any) => {
      if (e.target.scrollTop === 0) {
        if (loading || !hasMore) return;
        requestAnimationFrame(fetchMoreData);
      }
    },
    [fetchMoreData, hasMore, loading],
  );

  const nodeRef = useRef<OverlayScrollbarsComponent>();

  const multiRef = useMergedRef(nodeRef, ref!);

  const throttleScroll = throttle(500, onScroll);

  return (
    <OverlayScrollbarsComponent
      ref={multiRef}
      className="d-flex h-100 flex-column custom-scrollbar pe-9 pt-8"
      options={{
        scrollbars: { autoHide: 'scroll' },
        callbacks: {
          onScroll: throttleScroll,
        },
      }}
    >
      {children}
      {hasMore ? (
        <Loading
          style={{ backgroundColor: 'transparent' }}
          size={data.length === 0 ? 'large' : 'small'}
          height={data.length === 0 ? `${height}px` ?? '600px' : '60px'}
        />
      ) : (
        <div className="con_nomore">没有更多啦~</div>
      )}
    </OverlayScrollbarsComponent>
  );
};

export default React.forwardRef(ScrollView);
