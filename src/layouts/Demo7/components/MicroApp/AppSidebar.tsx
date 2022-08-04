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

  const {
    dispatch,
    state: {
      aside: { minimize },
    },
  } = useMicroApp();

  useEffect(() => {
    layout.aside.width(width + 100);
    dispatch({ type: MicroAppActionKind.AsideWidth, payload: width });
  }, [layout.aside, dispatch, width]);

  const handleAsideToggle = useCallback(() => {
    dispatch({ type: MicroAppActionKind.AsideToggle });
  }, [dispatch]);

  return (
    <div className={classnames('app-aside aside', className)}>
      <AsideSecondary>
        <AsideWorkspace header={header} resizeable className="app-sidebar">
          {children}
        </AsideWorkspace>
      </AsideSecondary>
      {collapsible && (
        <Button
          style={{ marginBottom: '1.35rem', zIndex: 10 }}
          onClick={handleAsideToggle}
          activeColor="primary"
          className={classnames(
            'btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex',
            { active: minimize },
          )}
        >
          <Icon name="Duotune/arr063" className="svg-icon-2 rotate-180" />
        </Button>
      )}
    </div>
  );
}

export default AppSidebar;
