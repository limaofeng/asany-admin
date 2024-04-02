import { ChangeEvent, useCallback, useState } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';

import type { InputProps } from './Input';
import Input from './Input';

type SearchProps = InputProps & {
  iconClassName?: string;
  onSearch?: (value: string) => void;
};

const sizes: {
  [key: string]: {
    boxClassName: string;
    iconClassName: string;
    inputClassName: string;
  };
} = {
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
    iconClassName: 'svg-icon-3 ms-3',
    inputClassName: 'ps-13',
  },
};

function Search({
  size,
  className,
  onSearch,
  iconClassName,
  ...props
}: SearchProps) {
  const sizeClass = sizes[size || 'middle'];
  const [value, setValue] = useState(props.value || '');

  const handleValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSearch = useCallback(
    (e: any) => {
      onSearch && onSearch(e.target.value);
    },
    [onSearch],
  );

  return (
    <div
      className={classnames(
        'd-flex align-items-center position-relative',
        sizeClass.boxClassName,
        props.boxClassName,
      )}
    >
      <Icon
        name="Duotune/gen021"
        className={classnames(
          'position-absolute',
          iconClassName || sizeClass.iconClassName,
        )}
      />
      <Input
        className={classnames(className, sizeClass.inputClassName)}
        size={size}
        value={value}
        onChange={handleValueChange}
        onPressEnter={handleSearch}
        {...props}
      />
    </div>
  );
}

export default Search;
