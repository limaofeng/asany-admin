import { useCallback, useReducer } from 'react';

import { Icon } from '@asany/icons';

import Form from './Form';

import Button from '../Button';
import { uuid } from '../utils';

type RepeaterItemData = {
  key: string;
};

type RepeaterItemRenderer = (args: {
  remove: () => void;
  size: number;
}) => React.ReactNode;

type RepeaterItemProps = {
  remove: (key: string) => void;
  value: RepeaterItemData;
  size: number;
  children: RepeaterItemRenderer;
};

function RepeaterItem(props: RepeaterItemProps) {
  const { remove, value, children, size } = props;

  const handleRemove = useCallback(() => {
    remove(value.key);
  }, [remove, value]);

  return (
    <div className="form-group d-flex align-items-center flex-wrap gap-5">
      <Form component={false}>{children({ remove: handleRemove, size })}</Form>
    </div>
  );
}

enum FormRepeaterKind {
  NEW = 'NEW',
  REMOVE = 'REMOVE',
}

type FormRepeaterAction = {
  type: FormRepeaterKind;
  payload?: any;
};

type FormRepeaterState = {
  items: RepeaterItemData[];
};

function reducer(_state: FormRepeaterState, action: FormRepeaterAction) {
  console.log('action', action);
  if (action.type === FormRepeaterKind.NEW) {
    console.log('..... NEW', _state);
    return { ..._state, items: [..._state.items, { key: uuid() }] };
  }
  if (action.type === FormRepeaterKind.REMOVE) {
    return {
      ..._state,
      items: _state.items.filter((item) => item.key !== action.payload),
    };
  }

  return _state;
}

type FormRepeaterProps = {
  children: RepeaterItemRenderer;
};

function FormRepeater(props: FormRepeaterProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, { items: [] });

  const handleClick = useCallback(() => {
    dispatch({ type: FormRepeaterKind.NEW });
  }, []);

  const handleRemove = useCallback((key: string) => {
    dispatch({ type: FormRepeaterKind.REMOVE, payload: key });
  }, []);

  const { items } = state;

  return (
    <div>
      <div className="form-group">
        <div
          data-repeater-list="kt_ecommerce_add_category_conditions"
          className="d-flex flex-column gap-3"
        >
          {items.map((item) => (
            <RepeaterItem
              key={item.key}
              size={items.length}
              value={item}
              remove={handleRemove}
            >
              {children}
            </RepeaterItem>
          ))}
        </div>
      </div>
      <div className="form-group mt-5">
        <Button onClick={handleClick}>
          <Icon name="Duotune/arr087" className="svg-icon-2" />
          Add another condition
        </Button>
      </div>
    </div>
  );
}

export default FormRepeater;
