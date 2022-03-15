import React, { useCallback, useMemo, useState } from 'react';

import classnames from 'classnames';

import TabPane from './TabPane';

import './style.scss';

interface TabsProps {
  className?: string;
  activeKey?: string;
  defaultActiveKey?: string;
  children: React.ReactElement[];
  onChange?: (activeKey: string) => void;
}

function Tabs(props: TabsProps) {
  const { children, className, onChange } = props;

  const panes = useMemo(() => {
    return React.Children.map(children, (item) => ({
      id: item.key as string,
      name: item.props.tab,
      content: item,
    }));
  }, [children]);

  const [activeKey, setActiveKey] = useState<string>(
    props.activeKey || props.defaultActiveKey || panes[0].id,
  );

  const handleSelect = useCallback(
    (key: string) => (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setActiveKey(key);
      onChange && onChange(key);
    },
    [onChange],
  );

  return (
    <div className="tabs-container">
      <ul className={classnames('nav nav-tabs nav-line-tabs', className)}>
        {panes.map((item) => (
          <li key={item.id} className="nav-item">
            {React.isValidElement(item.name) ? (
              React.cloneElement(item.name as any, {
                onClick: handleSelect(item.id),
                className: classnames((item.name as any).props.className, {
                  active: activeKey == item.id,
                }),
              })
            ) : (
              <a
                onClick={handleSelect(item.id)}
                href={`#${item.id}`}
                className={classnames('nav-link', { active: activeKey == item.id })}
              >
                {item.name}
              </a>
            )}
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
