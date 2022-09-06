import type { CSSProperties } from 'react';
import { useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';

import { useStore } from 'react-flow-renderer';
import { useReactFlow } from 'react-flow-renderer';
import { Icon } from '@asany/icons';
import { useClickAway } from 'react-use';
import classnames from 'classnames';

import { useQuickControls } from '../FlowContext';
import { nodeTypeGroups } from '../nodeTypes';

type QuickControlsProps = {
  flowContainer: React.RefObject<HTMLDivElement>;
};

function QuickControls(props: QuickControlsProps) {
  const container = useRef<HTMLDivElement>(null);

  const zoom = useStore((s) => s.transform[2]);
  const [{ visible, rect }, { hide }] = useQuickControls();
  const { project } = useReactFlow();

  const flowContainer = props.flowContainer;

  useClickAway(container, () => {
    hide();
  });

  const style = useMemo((): CSSProperties => {
    if (!visible || !flowContainer.current || !container.current || !rect) {
      return { transform: `translate(0px, 0px)`, opacity: 0, pointerEvents: 'unset' };
    }
    const { top, left } = flowContainer.current.getBoundingClientRect();
    const height = container.current.getBoundingClientRect().height;

    const { x: clientX, y: clientY, width: rectWidth, height: rectHeight } = rect;

    if (zoom != 1) {
      const scale = zoom < 1 ? ((100 / zoom) * (1 - zoom)) / 100 + 1 : 100 / zoom / 100;
      const position = project({
        x: clientX + rectWidth - left + 10,
        y: clientY - top + rectHeight / 2 - height / 2,
      });
      console.log('scale', zoom, scale);
      return {
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transformOrigin: '0 0',
      };
    }
    const position = project({
      x: clientX + rectWidth - left,
      y: clientY - top + rectHeight / 2 - height / 2,
    });
    return { transform: `translate(${position.x}px, ${position.y}px)` };
  }, [flowContainer, project, rect, visible, zoom]);

  const body = (
    <div ref={container} className="quick-controls" style={style}>
      <div className="quick-controls-arrow">
        <span className="quick-controls-arrow-content" />
      </div>
      {nodeTypeGroups.quick.map((data) => (
        <div
          key={data.type}
          className={classnames('flow-node-type', `quick-controls__node-${data.type}`)}
        >
          <div className="flow-node-type-icon">
            <Icon name={data.icon} />
          </div>
          <div className="flow-node-type-label">{data.name}</div>
        </div>
      ))}
      <div className="flow-node-type-separator" />
      <div className="flow-node-type">
        <div className="flow-node-type-icon">
          <Icon name="Bootstrap/gear" />
        </div>
        <div className="flow-node-type-label">设置</div>
      </div>
    </div>
  );

  const viewport = document.querySelector('.react-flow__viewport');

  if (!viewport) {
    return <React.Fragment />;
  }

  return ReactDOM.createPortal(body, viewport);
}

export default QuickControls;
