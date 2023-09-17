import { useCallback } from 'react';

import type { RouteComponentProps } from 'react-router';

import { useScreensQuery } from './hooks';

import { Card } from '@/metronic';
import type { FactoryScreen } from '@/types';

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

  return (
    <div className="fples_screen_list">
      <h1>屏幕列表</h1>
      <hr />
      <div className="fples_screen_list_container">
        {screens.map((screen) => (
          <Card hoverable className="screen_card hover-scale" key={screen.id}>
            <Card.Header>
              <Card.Title>
                #{screen.id} {screen.description}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div onClick={() => handleClick(screen)} className="screen-thumbnail">
                <p>{screen.description}</p>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ScreenList;
