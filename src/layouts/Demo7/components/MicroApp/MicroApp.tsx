import React from 'react';

import classnames from 'classnames';

import AppSidebar from './AppSidebar';
import { AppProvider, useMicroApp } from './MicroAppContext';

type AppContainerProps = {
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

function AppContainer(props: AppContainerProps) {
  const { children, className } = props;

  const {
    state: {
      aside: { minimize },
    },
  } = useMicroApp();

  return (
    <div
      className={classnames('micro-app-container page-full-content', className, {
        'aside-minimize': minimize,
      })}
    >
      {children}
    </div>
  );
}

function App(props: AppContainerProps) {
  const { children, className } = props;

  return (
    <AppProvider>
      <AppContainer className={className}>{children}</AppContainer>
    </AppProvider>
  );
}

App.Sidebar = AppSidebar;

export default App;
