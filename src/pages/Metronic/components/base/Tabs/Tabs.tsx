import React, { useCallback, useMemo, useState } from 'react';

import classnames from 'classnames';

import TabPane from './TabPane';

interface TabsProps {
  defaultActiveKey?: string;
  children: React.ReactElement[];
}

function Tabs(props: TabsProps) {
  const { children, defaultActiveKey } = props;

  const panes = useMemo(() => {
    return React.Children.map(children, (item) => ({
      id: item.key as string,
      name: item.props.tab,
      content: item,
    }));
  }, [children]);

  console.log('panes', panes);

  const [activeKey, setActiveKey] = useState<string>(defaultActiveKey || panes[0].id);

  const handleSelect = useCallback(
    (key: string) => (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setActiveKey(key);
    },
    [],
  );

  return (
    <div>
      <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
        {panes.map((item) => (
          <li key={item.id} className="nav-item">
            <a
              onClick={handleSelect(item.id)}
              href={`#${item.id}`}
              className={classnames('nav-link', { active: activeKey == item.id })}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {panes.map((item) => React.cloneElement(item.content, { active: activeKey == item.id }))}
      </div>
    </div>
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
