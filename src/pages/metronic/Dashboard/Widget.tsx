import React from 'react';

import { useComponent, useReactComponent } from '@asany/sunmao';

import { Card } from '@/metronic';

import type { IWidget } from './typings';

import type { GridItemContentProps } from '../GridLayout';

function Widget(
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scale,
    preview,
    data,
    drag,
    ...props
  }: GridItemContentProps<IWidget> & {
    preview: boolean;
    scale: any;
  },
  ref?: any,
) {
  const info = useComponent(data.component);
  const ReactComponent = useReactComponent(data.component);

  if (!info) {
    return <Card>组件缺失：{data.component}</Card>;
  }

  const newProps = {
    ...props,
    id: data.id,
    data,
    onRefReady: (_ref: any) => {
      if (!_ref || !ref) {
        return;
      }
      if (Object.hasOwn(ref, 'current')) {
        ref.current = _ref;
      } else if (typeof ref === 'function') {
        ref(_ref);
      }
      drag(_ref);
    },
  };

  if (preview) {
    return React.createElement(ReactComponent, newProps);
  }

  return React.createElement(info.component as React.ComponentType<any>, {
    ...newProps,
    [`data-resizable`]: info.moveable?.resizable,
  });
}

export default React.forwardRef(Widget);
