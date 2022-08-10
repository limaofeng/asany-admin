import React, { useCallback, useImperativeHandle, useRef } from 'react';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { throttle } from 'throttle-debounce';
import classnames from 'classnames';

import { Spin } from '@/metronic';

type ScrollViewProps = {
  data: any[];
  holdHeight?: number;
  fetchMoreData: () => void;
  hasMore: boolean;
  loading: boolean;
  children: React.ReactNode;
};

const ScrollView = (
  { data, fetchMoreData, hasMore, children, loading, holdHeight = 30 }: ScrollViewProps,
  ref?: React.ForwardedRef<OverlayScrollbars | undefined>,
) => {
  const nodeRef = useRef<OverlayScrollbarsComponent>(null);
  const scrollbar = nodeRef.current?.osInstance();

  const tmp = useRef({ scrollTop: 0, contentHeight: 0 });

  useImperativeHandle(ref, () => scrollbar as OverlayScrollbars | undefined, [scrollbar]);

  const onScroll = useCallback(
    async (e: any) => {
      const loadThreshold = holdHeight ?? 30;

      tmp.current.contentHeight = e.target.scrollHeight;
      tmp.current.scrollTop = e.target.scrollTop;

      if (e.target.scrollTop < loadThreshold) {
        if (loading || !hasMore) return;
        requestAnimationFrame(fetchMoreData);
      }
    },
    [fetchMoreData, hasMore, holdHeight, loading],
  );

  const throttleScroll = throttle(500, onScroll);

  return (
    <OverlayScrollbarsComponent
      ref={nodeRef}
      className="d-flex h-100 flex-column custom-scrollbar pe-9 pt-8"
      options={{
        scrollbars: { autoHide: 'scroll' },
        callbacks: {
          onScroll: throttleScroll,
          onContentSizeChanged: function (args) {
            if (!args) {
              return;
            }
            if (!scrollbar) {
              setTimeout(() => {
                nodeRef.current?.osInstance()?.scroll({ y: '100%' });
              });
              return;
            }
            if (scrollbar.scroll().max.y == 0) {
              scrollbar.scroll({ y: '100%' });
            } else if (!!tmp.current.contentHeight) {
              const diffValue = args.height - tmp.current.contentHeight;
              scrollbar.scroll({
                y: diffValue + tmp.current.scrollTop,
              });
            }
          },
        },
      }}
    >
      {children}
      {hasMore ? (
        <div
          className={classnames(
            'scroll-view-spin',
            'd-flex align-items-center justify-content-center',
            'fs-6',
            {
              'flex-column-fluid': data.length === 0,
              'h-40px': data.length !== 0,
            },
          )}
        >
          <Spin tip="加载中..." indicator="Loading" size="small" />
        </div>
      ) : (
        <div className="con_nomore">没有更多啦~</div>
      )}
    </OverlayScrollbarsComponent>
  );
};

export default React.forwardRef(ScrollView);
