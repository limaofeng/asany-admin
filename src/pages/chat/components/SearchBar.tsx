import { useCallback, useState } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import { Input } from '@/metronic';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value);
      onSearch(e.target.value);
    },
    [onSearch],
  );

  return (
    <div className="cve-searchbar ps-6 pe-6 pt-8 d-flex align-items-center">
      <Input.Search
        solid
        size="lg"
        boxClassName="flex-column-fluid"
        value={value}
        onChange={handleChange}
        placeholder="搜索..."
      />
      <a className={classnames('cve-searchbar-actions ms-4')}>
        <Icon className={classnames('svg-icon-2x svg-icon-dark')} name="Duotune/arr087" />
      </a>
    </div>
  );
}

export default SearchBar;
