import { useCallback, useEffect, useMemo, useState } from 'react';

import classnames from 'classnames';
import { Pagination as BsPagination } from 'react-bootstrap';

import './style/Pagination.scss';

type PaginationInnerProps = {
  current: number;
  total: number;
  pageSize: number;
  className?: string;
  onChange?: (page: number, pageSize: number) => void;
  size?: 'sm' | 'lg';
};

interface EllipsisProps {
  forward: 'left' | 'right';
  onClick: (e: React.MouseEvent) => void;
}

function Ellipsis(props: EllipsisProps) {
  const { onClick, forward } = props;

  return (
    <li className="page-item ellipsis">
      <a onClick={onClick} className="page-link">
        <span className={classnames('page-fast-forward', { 'double-right': forward === 'right' })}>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" />
          </svg>
        </span>
        <span className="page-link-ellipsis">•••</span>
      </a>
    </li>
  );
}

function getTotalPage(total: number, pageSize: number) {
  return parseInt(String(total / pageSize), 10) + (total % pageSize ? 1 : 0);
}

function PaginationInner(props: PaginationInnerProps) {
  const { total, pageSize, className, size, onChange } = props;

  const [current, setCurrent] = useState(props.current);

  const totalPage = useMemo(() => getTotalPage(total, pageSize), [total, pageSize]);

  const handleClick = useCallback(
    (page: number) => (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (page > 0) {
        onChange ? onChange(page, pageSize) : setCurrent(page);
      }
    },
    [onChange, pageSize],
  );

  const pCurrent = props.current;
  useEffect(() => {
    setCurrent(pCurrent);
  }, [pCurrent]);

  const pages = useMemo(() => {
    const pageNumbers: number[] = [];

    let start = Math.min(Math.max(1, current - 2), Math.max(totalPage - 4, 1));
    let end = Math.max(Math.min(totalPage, current + 2), Math.min(5, totalPage));
    if (start == 2) {
      end--;
      start--;
    } else if (totalPage - end == 1) {
      end++;
      start++;
    }
    pageNumbers.push(...Array.from({ length: end - start + 1 }, (v, k) => k + start));
    if (start > 2) {
      pageNumbers.unshift(-0);
    }
    if (start != 1) {
      pageNumbers.unshift(1);
    }
    if (end < totalPage - 1) {
      pageNumbers.push(0);
    }
    if (end != totalPage) {
      pageNumbers.push(totalPage);
    }
    const _pageNumbers = new Set(pageNumbers);
    return [..._pageNumbers].map((page, index, array) => {
      const _page = index ? array[index - 1] + 1 : index;
      if (page === 0 && _page < current) {
        return (
          <Ellipsis
            key="double-left"
            forward="left"
            onClick={handleClick(Math.max(current - 5, 1))}
          />
        );
      } else if (page === 0 && _page > current) {
        return (
          <Ellipsis
            key="double-right"
            forward="right"
            onClick={handleClick(Math.min(current + 5, totalPage))}
          />
        );
      }
      return (
        <BsPagination.Item onClick={handleClick(page)} key={page} active={page == current}>
          {page}
        </BsPagination.Item>
      );
    });
  }, [current, totalPage, handleClick]);

  return (
    <BsPagination className={className} size={size}>
      <li className={classnames('page-item previous', { disabled: current == 1 })}>
        <a onClick={handleClick(Math.max(current - 1, 1))} className="page-link">
          <i className="previous" />
        </a>
      </li>
      {pages}
      <li className={classnames('page-item next', { disabled: current == totalPage })}>
        <a onClick={handleClick(Math.min(current + 1, totalPage))} className="page-link">
          <i className="next" />
        </a>
      </li>
    </BsPagination>
  );
}

export default PaginationInner;
