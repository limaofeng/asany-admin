import React, { useCallback, useEffect, useMemo, useState } from 'react';

import classnames from 'classnames';

import TabPane from './TabPane';

import './style.scss';

interface TabsProps {
  className?: string;
  activeKey?: string;
  tabPosition?: 'left' | 'top';
  type?: 'tabs' | 'pills-custom' | 'pills' | 'line-tabs';
  renderContainer?: boolean;
  defaultActiveKey?: string;
  children: React.ReactElement | React.ReactElement[];
  onChange?: (activeKey: string) => void;
  renderTabBar?: (props: TabBarProps) => React.ReactElement;
}

type TabBarProps = {
  id: string;
  key: string;
  active: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
};

function TabBar(props: TabBarProps) {
  const { className, active, children, onClick } = props;
  return (
    <li key={props.id} className="nav-item">
      <a onClick={onClick} className={classnames('nav-link', className, { active })}>
        {children}
      </a>
    </li>
  );
}

function Tabs(props: TabsProps) {
  const {
    children,
    className,
    onChange,
    tabPosition = 'top',
    type = 'tabs',
    renderContainer = true,
  } = props;

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

  console.log('activeKey', activeKey);

  const handleSelect = useCallback(
    (key: string) => (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onChange ? onChange(key) : setActiveKey(key);
    },
    [onChange],
  );

  useEffect(() => {
    if (!props.activeKey) {
      return;
    }
    setActiveKey(props.activeKey!);
  }, [props.activeKey]);

  const _renderTabBar = props.renderTabBar;
  const renderTabBar = useCallback(
    (_props: TabBarProps) => {
      if (_renderTabBar) {
        return _renderTabBar(_props);
      }
      return <TabBar {..._props} />;
    },
    [_renderTabBar],
  );

  const body = (
    <>
      <ul
        key="nav-tabs"
        className={classnames('nav ', className, {
          'nav-tabs': type == 'tabs',
          'nav-line-tabs': type == 'line-tabs',
          'nav-pills': type == 'pills',
          'nav-pills nav-pills-custom': type == 'pills-custom',
          'nav-pills flex-row flex-md-column  border-bottom-0': tabPosition == 'left',
        })}
      >
        {panes.map((item) =>
          renderTabBar({
            id: item.id,
            key: item.id,
            className: classnames({
              active: activeKey == item.id,
            }),
            active: activeKey == item.id,
            onClick: handleSelect(item.id),
            children: item.name,
          }),
        )}
      </ul>
      <div key="tab-content" className="tab-content">
        {panes.map((item) => React.cloneElement(item.content, { active: activeKey == item.id }))}
      </div>
    </>
  );

  if (!renderContainer) {
    return body;
  }

  return (
    <div
      className={classnames('tabs-container', {
        'd-flex flex-column flex-md-row': tabPosition == 'left',
      })}
    >
      {body}
    </div>
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
