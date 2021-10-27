import type { DOMAttributes } from 'react';
import { useCallback, useState } from 'react';
import { useEffect, useMemo, useRef } from 'react';

import classnames from 'classnames';
import autosize from 'autosize';

type AutoSize = {
  minRows?: number;
};

interface TextAreaProps extends DOMAttributes<HTMLTextAreaElement> {
  className?: string;
  autoSize?: boolean | AutoSize;
  placeholder?: string;
  solid?: boolean;
  value?: string;
  bordered?: boolean;
  onPressEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
function TextArea(props: TextAreaProps) {
  const { autoSize, solid, bordered = true, onPressEnter, onChange, ...textareaProps } = props;

  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(props.value || '');

  useEffect(() => {
    if (!autoSize) {
      return;
    }
    const ele = ref.current!;
    autosize(ele);
    return () => {
      autosize.destroy(ele);
    };
  }, [autoSize]);

  const minRows = useMemo(() => {
    if (!autoSize) {
      return undefined;
    }
    return typeof autoSize == 'boolean' ? 1 : autoSize?.minRows || 1;
  }, [autoSize]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange ? onChange(e) : setValue(e.target.value);
    },
    [onChange],
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key == 'Enter') {
        onPressEnter && onPressEnter(e);
      }
    },
    [onPressEnter],
  );

  return (
    <textarea
      {...textareaProps}
      ref={ref}
      rows={minRows}
      value={onChange ? props.value || '' : value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      className={classnames('form-control', {
        'form-control-solid': solid,
        'form-control-borderless': !bordered,
      })}
    />
  );
}

export default TextArea;
