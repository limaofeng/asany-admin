import React, { useCallback, useEffect, useMemo, useState } from 'react';

import classnames from 'classnames';

import TabPane from './TabPane';

import './style.scss';

interface TabsProps {
  className?: string;
  activeKey?: string;
  tabPosition?: 'left' | 'top';
  defaultActiveKey?: string;
  children: React.ReactElement | React.ReactElement[];
  onChange?: (activeKey: string) => void;
}

function Tabs(props: TabsProps) {
  const { children, className, onChange, tabPosition = 'top' } = props;

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
      onChange ? onChange(key) : setActiveKey(key);
    },
    [onChange],
  );

  useEffect(() => {
    setActiveKey(props.activeKey!);
  }, [props.activeKey]);

  return (
    <div
      className={classnames('tabs-container', {
        'd-flex flex-column flex-md-row': tabPosition == 'left',
      })}
    >
      <ul
        className={classnames('nav nav-tabs', className, {
          'nav-line-tabs': tabPosition == 'top',
          'nav-pills flex-row flex-md-column  border-bottom-0': tabPosition == 'left',
        })}
      >
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
