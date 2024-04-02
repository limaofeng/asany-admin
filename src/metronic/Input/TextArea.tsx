import type { CSSProperties, DOMAttributes } from 'react';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import autosize from 'autosize';
import classnames from 'classnames';

import * as format from '../utils/format';
import * as KTUtil from '../utils/KTUtil';

type AutoSize = {
  minRows?: number;
  maxRows?: number;
};

interface TextAreaProps extends DOMAttributes<HTMLTextAreaElement> {
  className?: string;
  autoSize?: boolean | AutoSize;
  placeholder?: string;
  solid?: boolean;
  value?: string;
  bordered?: boolean;
  showCount?: boolean;
  maxLength?: number;
  style?: CSSProperties;
  onPressEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

type TextAreaRef = {
  value: () => void;
};

function TextArea(
  props: TextAreaProps,
  eref: React.ForwardedRef<TextAreaRef | null>,
) {
  const {
    autoSize,
    solid,
    bordered = true,
    onPressEnter,
    onChange,
    className,
    showCount,
    maxLength,
    style,
    ...textareaProps
  } = props;

  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(props.value || '');
  const [maxHeight, setMaxHeight] = useState<number>();
  const [css, setCss] = useState<CSSProperties>({});

  useImperativeHandle(eref, () => ({
    value() {},
  }));

  useEffect(() => {
    if (!autoSize) {
      return;
    }
    const ele = ref.current!;

    if (typeof autoSize === 'object' && Object.hasOwn(autoSize, 'maxRows')) {
      const height = parseFloat(KTUtil.css(ele, 'height')!);
      if (!isNaN(height)) {
        const lineHeight = parseFloat(KTUtil.css(ele, 'line-height')!);
        setMaxHeight(
          height + (autoSize.maxRows! - autoSize.minRows!) * lineHeight,
        );
      }
    }

    autosize(ele);
    return () => {
      autosize.destroy(ele);
    };
  }, [autoSize]);

  useEffect(() => {
    const ele = ref.current!;
    setCss({
      width: parseInt(KTUtil.css(ele, 'width')!, 10),
      paddingRight: parseInt(KTUtil.css(ele, 'padding-right')!, 10),
      paddingBottom: parseInt(KTUtil.css(ele, 'padding-bottom')!, 10),
    });
  }, []);

  const minRows = useMemo(() => {
    if (!autoSize) {
      return undefined;
    }
    return typeof autoSize === 'boolean' ? 1 : autoSize?.minRows || 1;
  }, [autoSize]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
      onChange ? onChange(e) : setValue(e.target.value);
    },
    [onChange],
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        onPressEnter && onPressEnter(e);
      }
    },
    [onPressEnter],
  );

  const _showCount = format.showCount(props.value || value);

  return (
    <div
      className={classnames('input-textarea', className, {
        'input-textarea-show-count': showCount && maxLength,
      })}
    >
      <textarea
        {...textareaProps}
        ref={ref}
        style={{ ...style, maxHeight }}
        rows={minRows}
        value={onChange ? props.value || '' : value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className={classnames('form-control', {
          'form-control-solid': solid,
          'form-control-borderless': !bordered,
        })}
      />
      {showCount && maxLength && (
        <div
          style={{ right: css.paddingRight, bottom: css.paddingBottom }}
          className={classnames('show-count', {
            'beyond-limit': _showCount > maxLength,
          })}
        >
          {_showCount} / {maxLength}
        </div>
      )}
    </div>
  );
}

const TextAreaForwardRef = React.forwardRef(TextArea);

export default TextAreaForwardRef;
