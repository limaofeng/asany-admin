import type { CSSProperties } from 'react';
import { useCallback, useEffect } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import AsideSecondary from '../Aside/AsideSecondary';
import AsideWorkspace from '../Aside/Secondary/AsideWorkspace';

import { MicroAppActionKind, useMicroApp } from './MicroAppContext';

import { Button } from '@/metronic';
import { useLayout } from '@/layouts/LayoutContext';

type AppSidebarProps = {
  children: React.ReactNode;
  width?: number;
  collapsible?: boolean;
  header?: React.ReactNode;
  className?: string;
};

function AppSidebar(props: AppSidebarProps) {
  const { className, header, children, collapsible = true, width = 280 } = props;

  const layout = useLayout();

  const { dispatch } = useMicroApp();

  useEffect(() => {
    layout.aside.width(width + 100);
    dispatch({ type: MicroAppActionKind.AsideWidth, payload: width });
  }, [layout.aside, dispatch, width]);

  return (
    <div className={classnames('app-aside aside', className)}>
      <AsideSecondary>
        <AsideWorkspace header={header} resizeable className="app-sidebar">
          {children}
        </AsideWorkspace>
      </AsideSecondary>
      {collapsible && <Toggle className="start-100 end-0" />}
    </div>
  );
}

type ToggleProps = {
  style?: CSSProperties;
  className: string;
};

function Toggle(props: ToggleProps) {
  const {
    dispatch,
    state: {
      aside: { minimize },
    },
  } = useMicroApp();

  const handleAsideToggle = useCallback(() => {
    dispatch({ type: MicroAppActionKind.AsideToggle });
  }, [dispatch]);

  return (
    <Button
      style={{ marginBottom: '1.35rem', zIndex: 105, ...props.style }}
      onClick={handleAsideToggle}
      activeColor="primary"
      className={classnames(
        'micro-app-aside-toggle',
        'btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex',
        props.className,
        { active: minimize },
      )}
    >
      <Icon name="Duotune/arr063" className="svg-icon-2 rotate-180" />
    </Button>
  );
}

AppSidebar.Toggle = Toggle;

export default AppSidebar;