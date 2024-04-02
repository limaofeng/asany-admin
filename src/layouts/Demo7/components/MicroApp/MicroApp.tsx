import React, { useCallback } from 'react';

import classnames from 'classnames';
import styled from 'styled-components';

import AppSidebar from './AppSidebar';
import { AppProvider, useMicroApp } from './MicroAppContext';

type AppContainerProps = {
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

type MicroAppContainerProps = {
  minimize: boolean;
  width: number;
};

const MicroAppContainer = styled.div<MicroAppContainerProps>`
  --root-aside-width: ${(props) =>
    props.minimize ? '100px' : `${props.width}px`};
  --met-aside-width: ${(props) =>
    props.minimize ? '100px' : `${props.width}px`};
`;

function AppContainer(props: AppContainerProps) {
  const { children, className } = props;

  const {
    state: {
      aside: { minimize, width },
    },
  } = useMicroApp();

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <MicroAppContainer
      minimize={minimize}
      width={width}
      className={classnames(
        'micro-app-container page-full-content',
        className,
        {
          'aside-minimize': minimize,
        },
      )}
      onContextMenu={handleContextMenu}
    >
      {children}
    </MicroAppContainer>
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
