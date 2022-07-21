import React from 'react';

import { useReactComponent } from 'sunmao';

import type { GridItemContentProps } from '../GridLayout';

import type { IWidget } from './typings';

function Widget({ data, drag, update, ...props }: GridItemContentProps<IWidget>, ref?: any) {
  const ReactComponent = useReactComponent(data.component);
  return <ReactComponent {...props} update={update} id={data.id} onRefReady={drag(ref!)} />;
}

// interface PortalItemBodyProps {
//   children: React.ReactElement;
//   onChange: (value: string) => void;
// }

// function PortalItemBody(props: PortalItemBodyProps) {
//   const { onChange } = props;

//   const ref = useRef(null);
//   const [{ isOverCurrent }, drop] = useDrop({
//     accept: 'component',
//     canDrop: (item: any) => {
//       return !!item.component;
//     },
//     drop(item: any, monitor) {
//       const didDrop = monitor.didDrop();
//       if (didDrop) {
//         return;
//       }
//       if (isOverCurrent && !didDrop) {
//         onChange(item.component);
//       }
//     },
//     collect: (monitor) => ({
//       item: monitor.getItem(),
//       isOver: monitor.isOver(),
//       isOverCurrent: monitor.isOver({ shallow: true }),
//     }),
//   });

//   // let backgroundColor;
//   // if (isOverCurrent) {
//   //   backgroundColor = 'rgba(0, 101, 0, 0.10)';
//   // }

//   drop(ref);
//   return (
//     <div ref={ref} className="portal-item-body">
//       <div className="portal-item-body-child">{props.children}</div>
//     </div>
//   );
// }

export default React.forwardRef(Widget);
