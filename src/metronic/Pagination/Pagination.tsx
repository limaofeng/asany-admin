import { useCallback, useEffect, useState } from 'react';

import classnames from 'classnames';

import PaginationInner from './PaginationInner';

type PaginationProps = {
  className?: string;
  current?: number;
  pageSize?: number;
  total?: number;
  size?: 'sm' | 'lg';
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  onChange?: (page: number, pageSize: number) => void;
};

function Pagination(props: PaginationProps) {
  const { className, total = 0, onChange, showSizeChanger } = props;

  const [current, setCurrent] = useState(props.current || 0);
  const [pageSize, setPageSize] = useState(props.pageSize || 10);

  const pCurrent = props.current;
  useEffect(() => {
    setCurrent(pCurrent || 0);
  }, [pCurrent]);

  useEffect(() => {
    if (!props.pageSize) {
      return;
    }
    setPageSize(props.pageSize!);
  }, [props.pageSize]);

  const handleChange = useCallback(
    (p: number, ps: number) => {
      setCurrent(p);
      onChange && onChange(p, ps);
    },
    [onChange],
  );

  return (
    <div className={classnames('d-flex flex-stack flex-wrap', className)}>
      {showSizeChanger && (
        <div className="fs-6 fw-bold text-gray-700">
          Showing {current} to {Math.min(current * pageSize, total)} of {total}{' '}
          entries
        </div>
      )}
      <PaginationInner
        current={current}
        total={total}
        pageSize={pageSize || 10}
        onChange={handleChange}
      />
    </div>
  );
}

export default Pagination;
