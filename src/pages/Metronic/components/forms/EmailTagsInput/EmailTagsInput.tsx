import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import classnames from 'classnames';
import Icon from '@asany/icons';

import { uuid } from '../../utils';

import { sleep } from '@/utils';

import './style.scss';

const EMAIL = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;

const HAS_DETAILS = /<([^<>]+)>$/;

function parseMail(text: string) {
  if (HAS_DETAILS.test(text)) {
    const lestIndex = text.lastIndexOf('<');
    const name = text.substring(0, lestIndex);
    const emailExpArray = HAS_DETAILS.exec(text);
    if ((name && name.includes('<')) || !emailExpArray || !EMAIL.test(emailExpArray![1])) {
      // ?
      return {
        name: text,
        address: '',
        invalid: true,
      };
    }
    return {
      name: name,
      address: emailExpArray[1],
      invalid: false,
    };
  }
  if (!EMAIL.test(text)) {
    return {
      name: text,
      address: '',
      invalid: true,
    };
  }
  return {
    name: '',
    address: text,
    invalid: false,
  };
}

type EmailTagData = {
  id: string;
  name: string;
  address: string;
  invalid?: boolean;
};

type EmailTagsInputProps = {
  transparent?: boolean;
  className?: string;
};

type EmailTagEditingProps = {
  value?: string;
  onChange: (value: string) => void;
  onPrev: () => void;
  onNext: () => void;
  onDelete: () => void;
};

type EmailTagEditingRef = {
  focus: () => void;
  select: () => void;
  setValue: (value: string) => void;
};

const EmailTagEditing = React.forwardRef(function EmailTagEditing(
  props: EmailTagEditingProps,
  ref: React.ForwardedRef<EmailTagEditingRef | null>,
) {
  const { value, onChange, onPrev, onNext, onDelete } = props;
  const input = useRef<HTMLSpanElement>(null);

  console.log('onDelete', onDelete);

  const handleBlur = useCallback(async () => {
    const name = input.current!.textContent!;
    if (!name || props.value == name) {
      return;
    }
    await onChange(name);
    return true;
  }, [onChange, props.value]);

  const handleKeyDown = useCallback(
    async (e: React.KeyboardEvent) => {
      console.log('----=----', e.key);
      if (e.key == 'Backspace') {
        if (!input.current!.textContent) {
          onPrev();
          e.preventDefault();
          e.stopPropagation();
        }
      } else if (e.key == 'ArrowLeft') {
        const selection = window.getSelection();
        console.log(e, selection);
        if (selection?.focusOffset == 0) {
          e.preventDefault();
          e.stopPropagation();
          if (await handleBlur()) {
            onPrev();
          }
          onPrev();
        }
      } else if (e.key == 'ArrowRight') {
        const selection = window.getSelection();
        console.log(e, selection);
        if (selection?.focusOffset == input.current?.textContent?.length) {
          e.preventDefault();
          e.stopPropagation();
          if (!(await handleBlur())) {
            onNext();
          }
        }
      } else if (e.key == 'Enter') {
        const name = input.current!.textContent!;
        if (!name) {
          return;
        }
        // console.log('保存', name);
        e.preventDefault();
        e.stopPropagation();
        onChange(name);
        // input.current!.innerHTML = '';
      } else if (e.key == 'Escape') {
        const name = input.current!.textContent!;
        if (!name) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        onChange(name);
      }
    },
    [handleBlur, onChange, onNext, onPrev],
  );

  useImperativeHandle(ref, () => ({
    focus() {
      console.log('---===--- 2', input.current);
      input.current?.focus();
    },
    select() {
      const range = document.createRange();
      range.selectNodeContents(input.current!);
      window.getSelection()!.removeAllRanges();
      window.getSelection()!.addRange(range);
    },
    setValue(v: string) {
      input.current!.innerHTML = v;
    },
  }));

  useEffect(() => {
    if (input.current && value !== input.current.textContent) {
      input.current.textContent = value || '';
    }
  }, [value]);

  return (
    <span
      ref={input}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      dangerouslySetInnerHTML={{ __html: value! }}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      contentEditable
      className="standard"
    />
  );
});

type EmailTagProps = {
  data: EmailTagData;
  editing: boolean;
  selected: boolean;
  onClick: (data: EmailTagData) => void;
  onDoubleClick: (data: EmailTagData) => void;
  onEnter: () => void;
} & EmailTagEditingProps;

const EmailTag = React.forwardRef(function EmailTag(
  props: EmailTagProps,
  ref: React.ForwardedRef<EmailTagEditingRef | null>,
) {
  const {
    data,
    onChange,
    selected,
    onClick,
    onPrev,
    onNext,
    onEnter,
    onDelete,
    onDoubleClick,
    editing,
  } = props;
  const input = useRef<EmailTagEditingRef | any>(null);

  const { invalid = !EMAIL.test(data.address) } = data;

  // console.log('data', selected, data);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onClick(data);
    },
    [data, onClick],
  );

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onDoubleClick(data);
    },
    [data, onDoubleClick],
  );

  const handleChange = useCallback(
    (name: string) => {
      onChange(name);
    },
    [onChange],
  );

  const value = useMemo(() => {
    let _value = data.name || '';
    if (data.address) {
      if (_value) {
        _value += ` <${data.address}>`;
      } else {
        _value = data.address;
      }
    }
    return _value;
  }, [data]);

  useEffect(() => {
    if (!editing) {
      return;
    }
    input.current?.focus();
    process.nextTick(() => {
      input.current?.select();
    });
  }, [editing]);

  useImperativeHandle(ref, () => ({
    focus() {
      console.log('---===--- 1', input.current);
      input.current?.focus();
    },
    select() {},
    setValue(v: string) {
      console.log(v);
    },
  }));

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      console.log('handleKeyDown', e.key);
      if (e.key == 'ArrowLeft') {
        onPrev();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == 'ArrowRight') {
        onNext();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == 'Backspace') {
        onDelete();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == 'Enter') {
        onEnter();
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [onDelete, onEnter, onNext, onPrev],
  );

  if (editing) {
    return (
      <EmailTagEditing
        ref={input}
        value={value}
        onDelete={props.onDelete}
        onChange={handleChange}
        onPrev={props.onPrev}
        onNext={props.onNext}
      />
    );
  }

  return (
    <span
      tabIndex={-1}
      ref={input}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      className={classnames('email-tag', { selected, invalid })}
    >
      <span className="token-content">{data.name || data.address}</span>
      <Icon name="Duotune/arr071" />
    </span>
  );
});

type EmailTagsInputState = {
  status: 'input' | 'editing' | 'active';
  selectedKey?: string;
  activeIndex: number;
  tags: (EmailTagData | 'input')[];
};

function EmailTagsInput(props: EmailTagsInputProps) {
  const { className, transparent } = props;

  const container = useRef<HTMLDivElement>(null);
  const input = useRef<EmailTagEditingRef>(null);

  const state = useRef<EmailTagsInputState>({
    activeIndex: -1,
    status: 'input',
    tags: [
      { name: 'xxxxx', address: 'limaofeng@msn.com', id: uuid() },
      { name: 'xxxxx', address: '', id: uuid() },
      { name: 'xxxxx', address: '253161354@qq.cn', id: uuid() },
      { name: 'xxxxx', address: 'xxx@163.cn', id: uuid() },
      { name: 'xxxxx', address: 'xxx@111.sd', id: uuid() },
      { name: 'xxxxx', address: '', id: uuid() },
      { name: 'xxxxx', address: '', id: uuid() },
      'input',
    ],
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleClick = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    state.current.selectedKey = undefined;
    let inputIndex = state.current.tags.findIndex((item) => item === 'input');
    if (inputIndex == -1) {
      state.current.tags.push('input');
      forceRender();
    }

    const element: HTMLDivElement = e.target as HTMLDivElement;
    const rect = element.getBoundingClientRect();

    // console.log('handleClick', e.pageX - rect.x, e.pageY - rect.y, rect, e.pageX, e.pageY);

    const x = e.pageX - rect.x;
    const y = e.pageY - rect.y;

    const starting = { x1: 0, y1: 0 };
    const index = Array.from(container.current!.childNodes)
      .filter((item) => (item as HTMLElement).classList.contains('email-tag'))
      .findIndex((item: any) => {
        const itemRect: DOMRect = item.getBoundingClientRect();
        const x1 = itemRect.x - rect.x;
        const y1 = itemRect.y - rect.y;

        const x2 = x1 + itemRect.width;
        const y2 = y1 + itemRect.height;

        console.log({ x, y }, starting);

        if (x1 < starting.x1) {
          if (x > starting.x1 && y > starting.y1) {
            return true;
          }
          starting.x1 = 0;
          starting.y1 = y1;
        }

        if (x > starting.x1 && y > starting.y1 && x < x1 && y < y2) {
          return true;
        }

        starting.x1 = x2;
        starting.y1 = y1;

        return false;
      });

    inputIndex = state.current.tags.findIndex((item) => item === 'input');
    // console.log('inputIndex', inputIndex, 'index', index);

    if (inputIndex != -1) {
      state.current.tags.splice(inputIndex, 1);
    }

    if (index != -1) {
      state.current.tags.splice(index, 0, 'input');
    } else {
      state.current.tags.push('input');
    }

    state.current.activeIndex = state.current.tags.findIndex((item) => item === 'input');
    forceRender();
    process.nextTick(async () => {
      while (!input.current) {
        await sleep(60);
      }
      input.current?.focus();
    });
  }, []);

  const removeInput = useCallback(() => {
    state.current.tags = state.current.tags.filter((item) => item !== 'input');
  }, []);

  const handleFocus = useCallback(async () => {
    while (!input.current) {
      await sleep(60);
    }
    process.nextTick(async () => {
      input.current!.focus();
    });
  }, []);

  const handlePrev = useCallback(async () => {
    const { tags, activeIndex } = state.current;

    const prevData = tags[activeIndex];

    if (prevData == 'input') {
      const nextActiveIndex = Math.max(0, activeIndex - 1);
      const data = tags[nextActiveIndex];
      if (data == 'input') {
        if (nextActiveIndex == 0) {
          return;
        }
        throw new Error('未知错误');
      }
      state.current.status = 'active';
      state.current.selectedKey = data.id;
      console.log('data', data, state.current.selectedKey, state.current.tags);
      state.current.activeIndex = nextActiveIndex;
      removeInput();
      forceRender();
      await handleFocus();
    } else {
      state.current.status = 'input';
      state.current.selectedKey = undefined;
      state.current.tags.splice(activeIndex, 0, 'input');
      state.current.activeIndex = state.current.tags.findIndex((item) => item == 'input');
      forceRender();
      await handleFocus();
    }
  }, [handleFocus, removeInput]);

  const handleNext = useCallback(async () => {
    const { tags, activeIndex } = state.current;

    const prevData = tags[activeIndex];

    if (prevData == 'input') {
      const nextActiveIndex = Math.min(tags.length - 1, activeIndex + 1);
      const data = tags[nextActiveIndex];
      if (data == 'input') {
        if (nextActiveIndex == activeIndex) {
          return;
        }
        throw new Error('未知错误');
      }
      state.current.status = 'active';
      state.current.selectedKey = data.id;
      removeInput();
      state.current.activeIndex = state.current.tags.findIndex(
        (item) => item != 'input' && item.id == data.id,
      );
      forceRender();
      await handleFocus();
    } else {
      state.current.status = 'input';
      const nextActiveIndex = Math.min(tags.length, activeIndex + 1);
      state.current.selectedKey = undefined;
      state.current.tags.splice(nextActiveIndex, 0, 'input');
      state.current.activeIndex = state.current.tags.findIndex((item) => item == 'input');
      forceRender();
      await handleFocus();
    }
  }, [handleFocus, removeInput]);

  const handleChange = useCallback(
    (index: number) => (value: string) => {
      console.log('保存', index, state.current.activeIndex);
      const current = state.current.tags[index];
      if (current == 'input') {
        state.current.tags.splice(index, 0, { ...parseMail(value), id: uuid() });
        state.current.status = 'input';
        state.current.activeIndex = state.current.tags.findIndex((item) => item == 'input');
        input.current!.setValue('');
      } else {
        state.current.status = 'active';
        state.current.tags.splice(index, 1, { ...parseMail(value), id: current.id });
      }
      forceRender();
    },
    [],
  );

  const handleItemClick = useCallback(
    (data: EmailTagData) => {
      console.log('handleItemClick', data);
      state.current.status = 'active';
      state.current.selectedKey = data.id;
      removeInput();
      state.current.activeIndex = state.current.tags.findIndex(
        (item) => item != 'input' && item.id === state.current.selectedKey,
      );
      forceRender();
    },
    [removeInput],
  );

  const handleDelete = useCallback(async () => {
    const { activeIndex } = state.current;
    state.current.status = 'input';
    state.current.selectedKey = undefined;
    state.current.tags.splice(activeIndex, 1, 'input');
    forceRender();
    while (!input.current) {
      await sleep(60);
    }
    process.nextTick(() => {
      console.log('.....', state.current.tags, input.current);
      input.current?.focus();
    });
  }, []);

  const handleEnter = useCallback(() => {
    state.current.status = 'editing';
    removeInput();
    forceRender();
  }, [removeInput]);

  const handleItemDoubleClick = useCallback(() => {
    handleEnter();
  }, [handleEnter]);

  const { tags, selectedKey, status } = state.current;

  return (
    <div
      ref={container}
      onClick={handleClick}
      className={classnames('email-tags-input', 'form-control', className, {
        'form-control-transparent': transparent,
      })}
    >
      {tags.map((item, index) => {
        if (item == 'input') {
          return (
            <EmailTagEditing
              onPrev={handlePrev}
              onNext={handleNext}
              onDelete={handleDelete}
              ref={input}
              key={item}
              onChange={handleChange(index)}
            />
          );
        } else {
          return (
            <EmailTag
              ref={item.id == selectedKey ? input : undefined}
              onPrev={handlePrev}
              onNext={handleNext}
              onDelete={handleDelete}
              onEnter={handleEnter}
              data={item}
              onChange={handleChange(index)}
              editing={item.id == selectedKey && status == 'editing'}
              onClick={handleItemClick}
              onDoubleClick={handleItemDoubleClick}
              key={item.id}
              selected={item.id == selectedKey}
            />
          );
        }
      })}
    </div>
  );
}

export default EmailTagsInput;
