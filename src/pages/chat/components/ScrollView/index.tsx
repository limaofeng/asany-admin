import type { FC } from 'react';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { throttle } from 'throttle-debounce';

import { Loading } from '../Loading';

type ScrollViewProps = {
  data: any[];
  fetchMoreData: () => void;
  hasMore: boolean;
  loading: boolean;
  height?: number;
  holdHeight?: number;
  children: React.ReactNode;
};

const ScrollView: FC<ScrollViewProps> = ({
  data,
  fetchMoreData,
  hasMore,
  children,
  loading,
  height,
  holdHeight,
}) => {
  const onScroll = async (e: any) => {
    const loadThreshold = 0 - e.target.scrollHeight + e.target.offsetHeight + (holdHeight ?? 30);
    if (e.target.scrollTop < loadThreshold && e.target.scrollTop !== 0) {
      if (loading || !hasMore) return;
      requestAnimationFrame(fetchMoreData);
    }
  };

  const throttleScroll = throttle(500, onScroll);

  /*
      <div
      onScroll={throttleScroll}
      id="scr_container"
      style={{ height: height ?? '100%' }}
      className={styles.con}
    >
  */

  return (
    <OverlayScrollbarsComponent
      className="d-flex h-100 flex-column custom-scrollbar pe-9 pt-8"
      onScroll={throttleScroll}
      options={{
        scrollbars: { autoHide: 'scroll' },
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

export default ScrollView;
