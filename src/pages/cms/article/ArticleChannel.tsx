import { useRef } from 'react';

import classnames from 'classnames';
import Icon from '@asany/icons';
import { useQuery } from '@apollo/client';
import type { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { QUEERY_ARTICLE_CHANNEL } from './gql/article.gql';
import ArticleList from './ArticleList';

import { Button, CountUp, Nav } from '@/pages/Metronic/components/base';
import { User } from '@/pages/Metronic/components';
import { ContentWrapper, Navbar } from '@/pages/Metronic/components/page';

type ArticleChannelProps = RouteComponentProps<{ id: string }>;

type StatProps = {
  label: string;
  className: string;
  children: React.ReactNode;
};

function Stat(props: StatProps) {
  const { label, children, className } = props;
  return (
    <div className={classnames('border border-gray-300 border-dashed rounded', className)}>
      <div className="d-flex align-items-center">{children}</div>
      <div className="fw-bold fs-6 text-gray-400">{label}</div>
    </div>
  );
}

function ArticleChannel(props: ArticleChannelProps) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const temp = useRef({});

  const { data, loading } = useQuery(QUEERY_ARTICLE_CHANNEL, {
    variables: { id },
  });

  const { channel } = data || { channel: temp.current };

  if (!loading) {
    temp.current = channel;
  }

  return (
    <ContentWrapper
      header={{
        title: '新闻动态',
      }}
    >
      <Navbar>
        <Navbar.Title>
          <span className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">
            {channel.name}
          </span>
        </Navbar.Title>
        <Navbar.Description>{channel.description}</Navbar.Description>
        <Navbar.Cover>
          <img
            className="mw-50px mw-lg-75px"
            src="/assets/media/svg/brand-logos/volicity-9.svg"
            alt="image"
          />
        </Navbar.Cover>
        <Navbar.Toolbar>
          <Button
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
          <Button className="me-3" size="sm">
            添加子栏目
          </Button>
          <a
            href="#"
            className="btn btn-sm btn-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_new_target"
          >
            Add Target
          </a>
          {/*--begin::Menu--*/}
          <div className="me-0">
            <button
              className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              <i className="bi bi-three-dots fs-3" />
            </button>
            {/*--begin::Menu 3--*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
              data-kt-menu="true"
            >
              {/*--begin::Heading--*/}
              <div className="menu-item px-3">
                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                  Payments
                </div>
              </div>
              {/*--end::Heading--*/}
              {/*--begin::Menu item--*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  Create Invoice
                </a>
              </div>
              {/*--end::Menu item--*/}
              {/*--begin::Menu item--*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link flex-stack px-3">
                  Create Payment
                  <i
                    className="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    title="Specify a target name for future usage and reference"
                  />
                </a>
              </div>
              {/*--end::Menu item--*/}
              {/*--begin::Menu item--*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  Generate Bill
                </a>
              </div>
              {/*--end::Menu item--*/}
              {/*--begin::Menu item--*/}
              <div
                className="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-end"
              >
                <a href="#" className="menu-link px-3">
                  <span className="menu-title">Subscription</span>
                  <span className="menu-arrow" />
                </a>
                {/*--begin::Menu sub--*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*--begin::Menu item--*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Plans
                    </a>
                  </div>
                  {/*--end::Menu item--*/}
                  {/*--begin::Menu item--*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Billing
                    </a>
                  </div>
                  {/*--end::Menu item--*/}
                  {/*--begin::Menu item--*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Statements
                    </a>
                  </div>
                  {/*--end::Menu item--*/}
                  {/*--begin::Menu separator--*/}
                  <div className="separator my-2" />
                  {/*--end::Menu separator--*/}
                  {/*--begin::Menu item--*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3">
                      {/*--begin::Switch--*/}
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        {/*--begin::Input--*/}
                        <input
                          className="form-check-input w-30px h-20px"
                          type="checkbox"
                          value="1"
                          checked={true}
                          name="notifications"
                        />
                        {/*--end::Input--*/}
                        {/*--end::Label--*/}
                        <span className="form-check-label text-muted fs-6">Recuring</span>
                        {/*--end::Label--*/}
                      </label>
                      {/*--end::Switch--*/}
                    </div>
                  </div>
                  {/*--end::Menu item--*/}
                </div>
                {/*--end::Menu sub--*/}
              </div>
              {/*--end::Menu item--*/}
              {/*--begin::Menu item--*/}
              <div className="menu-item px-3 my-1">
                <a href="#" className="menu-link px-3">
                  Settings
                </a>
              </div>
              {/*--end::Menu item--*/}
            </div>
            {/*--end::Menu 3--*/}
          </div>
          {/*--end::Menu--*/}
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
          <User.Users
            size={8}
            users={[
              { avatar: '', name: 'Alan Warden' },
              { avatar: '/assets/media/avatars/150-12.jpg', name: 'Michael Eberon' },
              { avatar: '/assets/media/avatars/150-13.jpg', name: 'Michelle Swanston' },
              { avatar: '/assets/media/avatars/150-5.jpg', name: 'Francis Mitcham' },
              { avatar: '', name: 'Susan Redwood' },
              { avatar: '/assets/media/avatars/150-3.jpg', name: 'Melody Macy' },
              { avatar: '', name: 'Perry Matthew' },
              { avatar: '/assets/media/avatars/150-7.jpg', name: 'Barry Walter' },
              { avatar: '', name: 'Peter' },
            ]}
          />
        </Navbar.Body>
        <Navbar.Footer className="h-55px">
          <Nav selectedKey="settings">
            <Nav.Item key="article">文章</Nav.Item>
            <Nav.Item key="settings">设置</Nav.Item>
          </Nav>
        </Navbar.Footer>
      </Navbar>
      <ArticleList />
    </ContentWrapper>
  );
}

export default ArticleChannel;