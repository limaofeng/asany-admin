import { useCallback, useEffect, useState } from 'react';

import classnames from 'classnames';

import PaginationInner from '../Pagination/PaginationInner';

export interface PaginationProps {
  className?: string;
  current: number;
  pageSize?: number;
  total: number;
  size?: 'sm' | 'lg';
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  onChange?: (page: number, pageSize: number) => void;
}

function getTotalPage(total: number, pageSize: number) {
  return parseInt(String(total / pageSize), 10) + (total % pageSize ? 1 : 0);
}

function Pagination(props: PaginationProps) {
  const {
    className,
    total,
    size,
    onChange,
    showSizeChanger = false,
    pageSizeOptions = [10, 20, 50, 100],
  } = props;

  const [current, setCurrent] = useState(props.current);
  const [pageSize, setPageSize] = useState(props.pageSize || 10);

  const handlePageSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newPageSize = parseInt(e.target.value, 10);
      if (onChange) {
        onChange(getTotalPage(current * pageSize, newPageSize), newPageSize);
      } else {
        setPageSize((prevPageSize) => {
          setCurrent(getTotalPage(current * prevPageSize, newPageSize));
          return newPageSize;
        });
      }
    },
    [current, onChange, pageSize],
  );

  const pCurrent = props.current;
  useEffect(() => {
    setCurrent(pCurrent);
  }, [pCurrent]);

  const handleChange = useCallback(
    (p: number, ps: number) => {
      setCurrent(p);
      onChange && onChange(p, ps);
    },
    [onChange],
  );

  useEffect(() => {
    if (!props.pageSize) {
      return;
    }
    setPageSize(props.pageSize!);
  }, [props.pageSize]);

  return (
    <div className={classnames('row')}>
      <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
        <div className="dataTables_length">
          {showSizeChanger && (
            <label>
              <select
                onChange={handlePageSizeChange}
                className="form-select pe-12 form-select-sm form-select-solid"
              >
                {pageSizeOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      </div>
      <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
        <PaginationInner
          size={size}
          current={current}
          total={total}
          pageSize={pageSize}
          className={className}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Pagination;
