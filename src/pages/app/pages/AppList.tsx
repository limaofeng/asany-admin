import { Link } from 'umi';

import { useMyAppsQuery } from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Badge, Card, Col, Progress, Row, Symbol, Tooltip } from '@/metronic';

function AppList() {
  const { data = { apps: [] }, loading } = useMyAppsQuery();

  const apps = data.apps;

  return (
    <ContentWrapper
      header={{
        title: '应用管理',
      }}
      loading={loading}
    >
      <Row gutter={{ default: 6, xl: 9 }}>
        {apps.map((item) => (
          <Col key={item.id} md={6} xl={4}>
            {/*----begin::Card--*/}
            <Card as={Link} to={`/apps/${item.id}`} className="border-hover-primary">
              <Card.Header border={false} className="pt-9">
                <Card.Title className="m-0">
                  <Symbol.Avatar
                    size={50}
                    labelClassName="fs-2"
                    className="bg-light"
                    src="/assets/media/svg/brand-logos/plurk.svg"
                    gap={3}
                  />
                </Card.Title>
                <Card.Toolbar>
                  <Badge lightStyle="primary" className="fw-bolder me-auto px-4 py-3">
                    In Progress
                  </Badge>
                </Card.Toolbar>
              </Card.Header>
              <Card.Body className="p-9">
                <div className="fs-3 fw-bolder text-dark">{item.title}</div>
                <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">{item.description}</p>
                <div className="d-flex flex-wrap mb-5">
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                    <div className="fs-6 text-gray-800 fw-bolder">Sep 22, 2021</div>
                    <div className="fw-bold text-gray-400">Due Date</div>
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                    <div className="fs-6 text-gray-800 fw-bolder">$284,900.00</div>
                    <div className="fw-bold text-gray-400">Budget</div>
                  </div>
                </div>
                <Tooltip title="This project 50% completed">
                  <div className="h-4px w-100 bg-light mb-5">
                    <Progress percent={50} />
                  </div>
                </Tooltip>
                <Symbol.Group maxCount={5}>
                  <Symbol.Avatar
                    labelClassName="fs-2"
                    size={35}
                    shape="circle"
                    src="/assets/media/avatars/150-1.jpg"
                  />
                  <Symbol.Avatar
                    labelClassName="fs-2"
                    size={35}
                    shape="circle"
                    src="/assets/media/avatars/150-2.jpg"
                  />
                  <Symbol.Avatar
                    labelClassName="fs-2"
                    size={35}
                    shape="circle"
                    alt="Susan Redwood"
                  />
                </Symbol.Group>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </ContentWrapper>
  );
}

export default AppList;
