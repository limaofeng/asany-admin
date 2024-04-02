import { useCallback } from 'react';

import Tags from '@yaireo/tagify/dist/react.tagify';
import classnames from 'classnames';

type TagifyProps = {
  value?: string;
  onChange?: (value?: string) => void;
  className?: string;
  size?: 'xs' | 'sm' | 'lg';
  accept?: string;
  space?: string;
  placeholder?: string;
  solid?: boolean;
  transparent?: boolean;
  bordered?: boolean;
};

function Tagify(props: TagifyProps) {
  const {
    className,
    // placeholder = '选择上传文件',
    size,
    solid,
    transparent,
    bordered,
  } = props;

  const onChange = useCallback((e) => {
    console.log(
      'CHANGED:',
      e.detail.tagify.value, // Array where each tag includes tagify's (needed) extra properties
      e.detail.tagify.getCleanValue(), // Same as above, without the extra properties
      e.detail.value, // a string representing the tags
    );
  }, []);

  return (
    <Tags
      className={classnames('form-control', className, {
        [`form-control-${size}`]: !!size,
        'form-control-solid': solid,
        'form-control-transparent': transparent,
        'form-control-borderless': !bordered,
      })}
      // tagifyRef={tagifyRef} // optional Ref object for the Tagify instance itself, to get access to  inner-methods
      // settings={settings}  // tagify settings object
      defaultValue="a,b,c"
      // {...tagifyProps}   // dynamic props such as "loading", "showDropdown:'abc'", "value"
      onChange={onChange}
    />
  );
}

export default Tagify;
