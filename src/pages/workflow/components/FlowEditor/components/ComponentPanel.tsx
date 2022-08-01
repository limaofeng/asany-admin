import React, { useCallback, useEffect, useState } from 'react';

import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { useDrag } from 'react-dnd';
import type { CreateDragObjectFunc, IComponentDefinition } from '@asany/sunmao';
import { useSymbols } from '@asany/sunmao';
import { generateUUID, useEditorSelector } from '@asany/sunmao';

const { Panel } = Collapse;

interface ComponentItemProps extends IComponentDefinition {
  name: string;
  title?: string;
  type: string;
  createDragObject: CreateDragObjectFunc;
}

function ComponentItem(props: ComponentItemProps) {
  const { name, title, cover, createDragObject } = props;
  const item = createDragObject(props);
  const [, drag] = useDrag({
    item: () => ({
      ...item,
      id: generateUUID(),
    }),
    type: item.type,
    collect: (monitor: any) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <li>
      <div className="component-icon" ref={drag}>
        <img src={cover} alt={title} />
      </div>
      <div className="component-info">{title || name}</div>
    </li>
  );
}

function ComponentPanel() {
  const template = useEditorSelector((state) => state.project.data.template);

  const groups = useSymbols(template);

  const [activeKey, setActiveKey] = useState<string[]>(groups.map((item) => item.title));

  const handleCollapse = useCallback((keys: string | string[]) => {
    setActiveKey(typeof keys === 'string' ? [keys] : keys);
  }, []);

  useEffect(() => {
    setActiveKey(groups.map((item) => item.title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups.map((item) => item.title).join(',')]);

  return (
    <div className="componet-list-wrap">
      <Collapse
        bordered={false}
        activeKey={activeKey}
        // tslint:disable-next-line:jsx-no-lambda
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-compactness-collapse"
        onChange={handleCollapse}
      >
        {groups.map((group) => (
          <Panel header={group.title} key={group.title}>
            <ul className="component-content show-list">
              {group.components.map((item) => (
                <ComponentItem
                  key={item.name}
                  {...item}
                  createDragObject={group.createDragObject}
                  type={group.type}
                />
              ))}
            </ul>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default React.memo(ComponentPanel);
