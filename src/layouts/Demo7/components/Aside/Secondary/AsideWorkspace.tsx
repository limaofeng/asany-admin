import { useEffect } from 'react';

import classnames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { useLayout } from '../../../../LayoutContext';

import MenuBar from './MenuBar';

type AsideWorkspaceProps = {
  header?: React.ReactNode;
  className?: string;
  width?: number;
  children: React.ReactNode;
  collapsible?: boolean;
  resizeable?: boolean;
};

function AsideWorkspace(props: AsideWorkspaceProps) {
  const { className, width = 280, children, collapsible = true, header } = props;

  const layout = useLayout();

  useEffect(() => {
    layout.aside.width(width + 100);
  }, [layout.aside, width]);

  useEffect(() => {
    layout.aside.collapsible(collapsible);
  }, [layout.aside, collapsible]);

  // useEffect(() => {
  //   layout.aside.collapsible(!!resizeable);
  // }, [layout.aside, resizeable]);

  return (
    <div className={classnames('aside-workspace', className)}>
      {header}
      <OverlayScrollbarsComponent
        className="d-flex h-100 flex-column custom-scrollbar"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        {children}
      </OverlayScrollbarsComponent>
    </div>
  );
}

AsideWorkspace.MenuBar = MenuBar;

export default AsideWorkspace;
