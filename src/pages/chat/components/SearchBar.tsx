import { useCallback, useState } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import { Input } from '@/metronic';

type SearchBarProps = {
  className?: string;
  onSearch: (value: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch, className } = props;
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value);
      onSearch(e.target.value);
    },
    [onSearch],
  );

  return (
    <div
      className={classnames(
        'cve-searchbar ps-6 pe-6 d-flex justify-content-sm-between align-items-center',
        className,
      )}
    >
      <Input.Search
        solid
        size="lg"
        boxClassName="flex-row-fluid me-2"
        value={value}
        onChange={handleChange}
        placeholder="搜索..."
      />
      <a className={classnames('cve-searchbar-actions')}>
        <Icon className={classnames('svg-icon-2x svg-icon-dark')} name="Duotune/arr087" />
      </a>
    </div>
  );
}

export default SearchBar;
