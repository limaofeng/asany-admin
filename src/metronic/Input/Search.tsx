import { useCallback } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';

import type { InputProps } from './Input';
import Input from './Input';

type SearchProps = InputProps & {
  onSearch?: (value: string) => void;
};

const sizes = {
  sm: {
    boxClassName: 'my-1',
    iconClassName: 'svg-icon-3 ms-2',
    inputClassName: 'ps-9',
  },
  lg: {
    boxClassName: 'my-1',
    iconClassName: 'svg-icon-1 ms-4',
    inputClassName: 'ps-12',
  },
  middle: {
    boxClassName: 'my-1',
    iconClassName: 'svg-icon-1 ms-3',
    inputClassName: 'ps-13',
  },
};

function Search({ size, className, onSearch, ...props }: SearchProps) {
  const sizeClass = sizes[size || 'middle'];

  const handleSearch = useCallback(
    (e) => {
      onSearch && onSearch(e.target.value);
    },
    [onSearch],
  );

  return (
    <Input
      prefix={
        <Icon
          name="Duotune/gen021"
          className={classnames('position-absolute', sizeClass.iconClassName)}
        />
      }
      className={classnames(className, sizeClass.inputClassName)}
      boxClassName={sizeClass.boxClassName}
      size={size}
      onPressEnter={handleSearch}
      {...props}
    />
  );
}

export default Search;
