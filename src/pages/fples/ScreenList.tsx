import { useCallback } from 'react';

import type { RouteComponentProps } from 'react-router';

import { useScreensQuery } from './hooks';
import ScreenDetails from './ScreenDetails';

import { Button, Card, Modal } from '@/metronic';
import type { FactoryScreen } from '@/types';
import { logout } from '@/hooks';

type ScreenListProps = RouteComponentProps<any>;

function ScreenList(props: ScreenListProps) {
  const { history } = props;
  const { data: { screens = [] } = {} } = useScreensQuery({
    fetchPolicy: 'network-only',
  });

  console.log('data', screens);

  const handleClick = useCallback(
    (screen: FactoryScreen) => {
      history.push(`/screens/${screen.id}`);
    },
    [history],
  );

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      history.replace('/login');
    } catch (e) {
      Modal.error({
        content: '退出失败，请重试.',
      });
    }
  }, [history]);

  return (
    <div className="fples_screen_list">
      <h1 className="header">
        <div className="header-title">设备列表</div>
        <div className="header-tools">
          <Button onClick={handleLogout} variant="light" color="muted">
            退出
          </Button>
        </div>
      </h1>
      <hr />
      <div className="fples_screen_list_container">
        {screens.map((screen) => (
          <Card hoverable className="screen_card hover-scale" key={screen.id}>
            <Card.Header>
              <Card.Title>
                #{screen.id} {screen.boundIp}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div onClick={() => handleClick(screen)} className="screen-thumbnail">
                <ScreenDetails {...props} screen={screen} />
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ScreenList;
