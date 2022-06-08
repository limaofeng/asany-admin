import { useCallback } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import AsideSecondary from '../Aside/AsideSecondary';
import AsideWorkspace from '../Aside/Secondary/AsideWorkspace';

import { MicroAppActionKind, useMicroApp } from './MicroAppContext';

import { Button } from '@/metronic';

type AppSidebarProps = {
  children: React.ReactNode;
};

function AppSidebar(props: AppSidebarProps) {
  const { children } = props;

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
    <div className={classnames('app-aside aside')}>
      <AsideSecondary>
        <AsideWorkspace resizeable className="app-sidebar app-contacts-sidebar">
          {children}
        </AsideWorkspace>
      </AsideSecondary>
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
    </div>
  );
}

export default AppSidebar;
