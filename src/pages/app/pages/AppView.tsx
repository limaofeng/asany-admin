import type { RouteComponentProps } from 'react-router';
import Icon from '@asany/icons';

import { useAppQuery } from '../hooks';

import { ContentWrapper, Navbar } from '@/pages/Metronic/components/page';
import { CountUp, Nav, Stat, Symbol } from '@/pages/Metronic/components';

type AppViewProps = RouteComponentProps<{ id: string }> & {
  children: React.ReactNode;
};

function AppView(props: AppViewProps) {
  const {
    children,
    location: { pathname },
    match: {
      params: { id },
    },
  } = props;

  const { data = {} } = useAppQuery({ variables: { id } });

  const app = data.app;

  const navActiveKey = pathname.split('/')[3];

  return (
    <ContentWrapper
      header={{
        title: '应用详情',
      }}
    >
      <Navbar>
        <Navbar.Title>
          <span className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{app?.name}</span>
        </Navbar.Title>
        <Navbar.Description>{app?.description}</Navbar.Description>
        <Navbar.Cover>
          <img
            className="mw-50px mw-lg-75px"
            src="/assets/media/svg/brand-logos/volicity-9.svg"
            alt="image"
          />
        </Navbar.Cover>
        <Navbar.Toolbar>
          {/* <Button
            as={Link}
            className="me-3"
            size="sm"
            variantStyle="background"
            variant="light"
            activeStyle="text"
            activeColor="primary"
            to="/cms/articles/new"
          >
            新建信息
          </Button>
          <Button onClick={handleNewChannel} className="me-3" size="sm">
            添加子栏目
          </Button>
          <NewArticleChannelModal
            // onSuccess={refetch}
            data={{ parent: channel?.id }}
            visible={visible}
            onCancel={handleCloseNewChannel}
          /> */}
        </Navbar.Toolbar>
        <Navbar.Body>
          <div className="d-flex flex-wrap">
            <Stat className="min-w-125px py-3 px-4 me-6 mb-3" label="Due Date">
              <div className="d-flex align-items-center">
                <div className="fs-4 fw-bolder">29 Jan, 2021</div>
              </div>
            </Stat>
            <Stat className="min-w-125px py-3 px-4 me-6 mb-3" label="Open Tasks">
              <Icon name="Duotune/arr065" className="svg-icon-3 svg-icon-danger me-2" />
              <CountUp className="fs-4 fw-bolder" value={75}>
                100
              </CountUp>
            </Stat>
            <Stat className="min-w-125px py-3 px-4 me-6 mb-3" label="Budget Spent">
              <Icon name="Duotune/arr066" className="svg-icon-3 svg-icon-success me-2" />
              <CountUp className="fs-4 fw-bolder" value={15000} prefix="$">
                0
              </CountUp>
            </Stat>
          </div>
          <Symbol.Group>
            {[
              { avatar: '', name: 'Alan Warden' },
              { avatar: '/assets/media/avatars/150-12.jpg', name: 'Michael Eberon' },
              { avatar: '/assets/media/avatars/150-13.jpg', name: 'Michelle Swanston' },
              { avatar: '/assets/media/avatars/150-5.jpg', name: 'Francis Mitcham' },
              { avatar: '', name: 'Susan Redwood' },
              { avatar: '/assets/media/avatars/150-3.jpg', name: 'Melody Macy' },
              { avatar: '', name: 'Perry Matthew' },
              { avatar: '/assets/media/avatars/150-7.jpg', name: 'Barry Walter' },
              { avatar: '', name: 'Peter' },
            ].map((item) => (
              <Symbol.Avatar
                size={35}
                shape="circle"
                key={item.name}
                src={item.avatar}
                alt={item.name}
              />
            ))}
          </Symbol.Group>
        </Navbar.Body>
        <Navbar.Footer className="h-45px">
          <Nav selectedKey={navActiveKey} className="fs-5 fw-bolder">
            <Nav.Item key="overview" href={`/apps/${id}/overview`}>
              概览
            </Nav.Item>
            <Nav.Item key="menus" href={`/apps/${id}/menus`}>
              菜单
            </Nav.Item>
            <Nav.Item key="routes" href={`/apps/${id}/routes`}>
              路由
            </Nav.Item>
            <Nav.Item key="settings" href={`/apps/${id}/settings`}>
              设置
            </Nav.Item>
          </Nav>
        </Navbar.Footer>
      </Navbar>
      {children}
    </ContentWrapper>
  );
}

export default AppView;
