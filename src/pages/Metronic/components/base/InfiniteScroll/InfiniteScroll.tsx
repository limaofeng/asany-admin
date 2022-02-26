import React, { useCallback, useEffect, useImperativeHandle, useReducer, useRef } from 'react';

import { Shortcuts } from '@asany/shortcuts';
import classnames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { debounce } from 'lodash';
import type OverlayScrollbars from 'overlayscrollbars';

import './style.scss';

type Pagination = {
  totalCount: number;
  pageSize: number;
  totalPage: number;
  currentPage: number;
};

type DataLoader = (pages: number) => void;

export type ShortcutEvent = {
  viewport: {
    start: number;
    end: number;
    height: number;
  };
  scrollbar: OverlayScrollbars;
};

type InfiniteScrollProps = {
  pagination: Pagination;
  className?: string;
  itemHeight: number;
  loader: DataLoader;
  onShortcut?: (action: string, e: ShortcutEvent) => void;
  children: (
    startIndex: number,
    endIndex: number,
    e: { pagination: Pagination; isEmpty: boolean; itemHeight: number; size: number },
  ) => React.ReactNode;
};

type InfiniteScrollTemp = {
  pages: number[];
  pageSize: number;
  loader: DataLoader;
  pagination: Pagination;
  itemHeight: number;
  startIndex: number;
  endIndex: number;
};

export type InfiniteScrollRef = {
  viewport: {
    start: number;
    end: number;
    height: number;
  };
  scrollTo: (y: number) => void;
};

function InfiniteScroll(props: InfiniteScrollProps, ref: React.ForwardedRef<InfiniteScrollRef>) {
  const { className, itemHeight, pagination, children: render, loader, onShortcut } = props;

  const scrollbar = useRef<OverlayScrollbarsComponent>(null);
  const temp = useRef<InfiniteScrollTemp>({
    pages: [1],
    pagination,
    itemHeight,
    loader,
    pageSize: 0,
    startIndex: 0,
    endIndex: 0,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  temp.current.loader = loader;
  temp.current.pagination = pagination;
  temp.current.itemHeight = itemHeight;

  const { current: handleLoader } = useRef(
    debounce(async (pages: number[]) => {
      const prev = new Set(pages);
      temp.current.pages.forEach(prev.delete.bind(prev));
      const loadPages = Array.from(prev);
      await Promise.all(loadPages.map(loader));
      // console.log('newPages', pages, loadPages);
      temp.current.pages = pages;
      forceRender();
    }, 120),
  );

  const getPageIndex = useCallback(
    function () {
      const { pagination: p, itemHeight: height } = temp.current;

      const scroll = scrollbar.current!.osInstance()!.scroll();

      const viewport = {
        start: scroll.position.y,
        end: scroll.position.y + scroll.trackLength.y,
        height: scroll.trackLength.y,
      };

      if (p.totalCount == 0) {
        return;
      }

      const pageSize = Math.ceil(scroll.trackLength.y / height);

      const startIndex = Math.floor(viewport.start / height);

      const endIndex = Math.ceil(viewport.end / height);

      const pageIndex = new Set<number>();

      pageIndex.add(Math.max(1, Math.ceil((startIndex - pageSize / 2) / p.pageSize)));
      pageIndex.add(Math.min(p.totalPage, Math.ceil((endIndex + pageSize / 2) / p.pageSize)));

      const newPages = Array.from(pageIndex);

      temp.current.pageSize = pageSize;
      temp.current.startIndex = Math.max(0, startIndex - pageSize);
      temp.current.endIndex = Math.min(p.totalCount, endIndex + pageSize);
      forceRender();
      if (newPages.length) {
        // console.log('newPages', newPages, startIndex, endIndex, pageSize);
        const pages = [];
        for (let i = newPages[0]; i <= newPages[newPages.length - 1]; i++) {
          pages.push(i);
        }
        handleLoader(pages);
      }
    },
    [handleLoader],
  );

  const handleScroll = useCallback(() => {
    getPageIndex();
  }, [getPageIndex]);

  useEffect(() => {
    getPageIndex();
  }, [getPageIndex, itemHeight, pagination]);

  const { startIndex, endIndex, pageSize } = temp.current;

  const isEmpty = (startIndex == 0 && endIndex == 0) || pagination.totalCount == 0;

  useEffect(() => {
    scrollbar.current?.osInstance()?.scroll(0);
  }, [isEmpty]);

  const handleShortcut = useCallback(
    (action, event?: React.KeyboardEvent) => {
      event && event.preventDefault();
      const scroll = scrollbar.current!.osInstance()!.scroll();
      const viewport = {
        start: scroll.position.y,
        end: scroll.position.y + scroll.trackLength.y,
        height: scroll.trackLength.y,
      };
      onShortcut && onShortcut(action, { viewport, scrollbar: scrollbar.current!.osInstance()! });
      process.nextTick(() => {
        handleScroll();
      });
    },
    [handleScroll, onShortcut],
  );

  useImperativeHandle(ref, () => ({
    get viewport() {
      const scroll = scrollbar.current!.osInstance()!.scroll();
      return {
        start: scroll.position.y,
        end: scroll.position.y + scroll.trackLength.y,
        height: scroll.trackLength.y,
      };
    },
    scrollTo: (y: number) => {
      scrollbar.current?.osInstance()?.scroll(y);
    },
  }));

  return (
    <OverlayScrollbarsComponent
      ref={scrollbar}
      className={classnames(className, 'custom-scrollbar')}
      options={{
        scrollbars: { autoHide: 'scroll' },
        callbacks: {
          onScroll: handleScroll,
        },
      }}
    >
      <Shortcuts
        tag={
          <div
            style={{ height: isEmpty ? undefined : itemHeight * pagination.totalCount }}
            className={classnames('infinite-scroll-inner', { empty: isEmpty })}
          />
        }
        name="GENERAL"
        handler={handleShortcut}
      >
        {render(startIndex, endIndex, {
          pagination,
          isEmpty,
          itemHeight,
          size: pageSize,
        })}
      </Shortcuts>
    </OverlayScrollbarsComponent>
  );
}

export default React.forwardRef(InfiniteScroll);
