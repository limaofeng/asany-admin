import React from 'react';

import classnames from 'classnames';

import { AppProvider, useMicroApp } from './MicroAppContext';
import AppSidebar from './AppSidebar';

type AppContainerProps = {
  children: React.ReactNode;
};

function AppContainer(props: AppContainerProps) {
  const { children } = props;

  const {
    state: {
      aside: { minimize },
    },
  } = useMicroApp();

  return (
    <div
      className={classnames('micro-app-container page-full-content', {
        'aside-minimize': minimize,
      })}
    >
      {children}
    </div>
  );
}

function App(props: AppContainerProps) {
  const { children } = props;

  return (
    <AppProvider>
      <AppContainer>{children}</AppContainer>
    </AppProvider>
  );
}

App.Sidebar = AppSidebar;

export default App;
