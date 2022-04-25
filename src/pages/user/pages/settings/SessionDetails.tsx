import { Icon } from '@asany/icons';
import { Link } from 'umi';

import worldMap from '../../assets/world_map.svg';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card } from '@/metronic';

function SessionDetails() {
  return (
    <ContentWrapper className="page-settings-sessions-details" footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>会话详情</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="user-session-details rounded border border-secondary w-800px p-5">
            <div className=" d-flex flex-row">
              <div className="flex-column-fluid d-flex flex-column">
                <div className="d-flex flex-row">
                  <span className="session-state-indicator mt-3 rounded recent" />
                  <div className="device-icon-container">
                    <Icon className="svg-icon-2hx" name={`Bootstrap/laptop`} />
                  </div>
                  <div className="session-info">
                    <strong>
                      上海 <span>67.230.185.83</span>
                    </strong>
                    <div className="text-small text-gray-800">
                      您当前的会话 / 最后访问时间 2022年 3月 15日
                    </div>
                  </div>
                </div>
                <div className="seen-in text-gray-800">访问位置可能位于 中国, 美国</div>
                <div className="mt-4">
                  <p className="mb-4 text-gray-700">
                    <strong className="text-gray-900">设备:</strong>
                    <br />
                    iOS iPhone, Safari
                  </p>
                  <p className="mb-4 text-gray-700">
                    <strong className="text-gray-900">最后的位置:</strong>
                    <br />
                    美国, 加利福尼亚州, 洛杉矶
                  </p>
                  <p className="mb-4 text-gray-700">
                    <strong className="text-gray-900">登录于:</strong>
                    <br />
                    <time>2022年3月28日</time>
                    <br />
                    美国, 加利福尼亚州, 洛杉矶
                  </p>
                </div>
              </div>
              <div>
                <Button
                  as={Link}
                  to="/settings/sessions/833633957"
                  className="btn-session-details"
                  variant="danger"
                  type="solid"
                >
                  撤销会话
                </Button>
              </div>
            </div>
            <div className="map-container mt-4 rounded-2 overflow-hidden">
              <img src={worldMap} />
            </div>
          </div>
          <Button to="/settings/sessions" as={Link} type="link" className="mt-2">
            查看所有会话
          </Button>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default SessionDetails;
