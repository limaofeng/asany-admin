import { useState } from 'react';

import classnames from 'classnames';
import Icon from '@asany/icons';
import { useQuery } from '@apollo/client';
import type { RouteComponentProps } from 'react-router';

import { QUEERY_ARTICLE_CHANNEL } from './gql/article.gql';

import { Button, Card, CountUp, Nav, Table } from '@/pages/Metronic/components/base';
import { Modal, User } from '@/pages/Metronic/components';
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

  const [showNewUserModal, setShowNewUserModal] = useState(false);
  // const handleOpenNewUserModal = () => {
  //   setShowNewUserModal(true);
  // };
  const handleCloseShowNewUserModal = () => {
    setShowNewUserModal(false);
  };

  console.log(props);

  const { data, loading } = useQuery(QUEERY_ARTICLE_CHANNEL, {
    variables: { id },
  });

  if (loading) {
    return <></>;
  }

  const { channel } = data;

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
            className="me-3"
            size="sm"
            variantStyle="background"
            variant="light"
            activeStyle="text"
            activeColor="primary"
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
      <Modal
        centered
        footer={null}
        visible={showNewUserModal}
        onCancel={handleCloseShowNewUserModal}
        dialogClassName="mw-650px"
      >
        {/*--begin::Heading--*/}
        <div className="text-center mb-13">
          {/*--begin::Title--*/}
          <h1 className="mb-3">Browse Users</h1>
          {/*--end::Title--*/}
          {/*--begin::Description--*/}
          <div className="text-muted fw-bold fs-5">
            If you need more info, please check out our
            <a href="#" className="link-primary fw-bolder">
              Users Directory
            </a>
            .
          </div>
          {/*--end::Description--*/}
        </div>
        {/*--end::Heading--*/}
        {/*--begin::Users--*/}
        <div className="mb-15">
          {/*--begin::List--*/}
          <div className="mh-375px scroll-y me-n7 pe-7">
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/media/avatars/150-1.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Emma Smith
                    <span className="badge badge-light fs-8 fw-bold ms-2">Art Director</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">e.smith@kpmg.com.au</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$23,000</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Melody Macy
                    <span className="badge badge-light fs-8 fw-bold ms-2">Marketing Analytic</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">melody@altbox.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$50,500</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/media/avatars/150-26.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Max Smith
                    <span className="badge badge-light fs-8 fw-bold ms-2">Software Enginer</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">max@kt.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$75,900</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/media/avatars/150-4.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Sean Bean
                    <span className="badge badge-light fs-8 fw-bold ms-2">Web Developer</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">sean@dellito.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$10,500</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/media/avatars/150-15.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Brian Cox
                    <span className="badge badge-light fs-8 fw-bold ms-2">UI/UX Designer</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">brian@exchange.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$20,000</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <span className="symbol-label bg-light-warning text-warning fw-bold">M</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Mikaela Collins
                    <span className="badge badge-light fs-8 fw-bold ms-2">Head Of Marketing</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">mikaela@pexcom.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$9,300</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/media/avatars/150-8.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Francis Mitcham
                    <span className="badge badge-light fs-8 fw-bold ms-2">Software Arcitect</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">f.mitcham@kpmg.com.au</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$15,000</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <span className="symbol-label bg-light-danger text-danger fw-bold">O</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Olivia Wild
                    <span className="badge badge-light fs-8 fw-bold ms-2">System Admin</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">olivia@corpmail.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$23,000</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <span className="symbol-label bg-light-primary text-primary fw-bold">N</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Neil Owen
                    <span className="badge badge-light fs-8 fw-bold ms-2">Account Manager</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">owen.neil@gmail.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$45,800</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/media/avatars/150-6.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Dan Wilson
                    <span className="badge badge-light fs-8 fw-bold ms-2">Web Desinger</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">dam@consilting.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$90,500</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <span className="symbol-label bg-light-danger text-danger fw-bold">E</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Emma Bold
                    <span className="badge badge-light fs-8 fw-bold ms-2">Corporate Finance</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">emma@intenso.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$5,000</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/assets/media/avatars/150-7.jpg" />
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Ana Crown
                    <span className="badge badge-light fs-8 fw-bold ms-2">
                      Customer Relationship
                    </span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">ana.cf@limtel.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$70,000</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
            {/*--begin::User--*/}
            <div className="d-flex flex-stack py-5">
              {/*--begin::Details--*/}
              <div className="d-flex align-items-center">
                {/*--begin::Avatar--*/}
                <div className="symbol symbol-35px symbol-circle">
                  <span className="symbol-label bg-light-info text-info fw-bold">A</span>
                </div>
                {/*--end::Avatar--*/}
                {/*--begin::Details--*/}
                <div className="ms-6">
                  {/*--begin::Name--*/}
                  <a
                    href="#"
                    className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary"
                  >
                    Robert Doe
                    <span className="badge badge-light fs-8 fw-bold ms-2">Marketing Executive</span>
                  </a>
                  {/*--end::Name--*/}
                  {/*--begin::Email--*/}
                  <div className="fw-bold text-muted">robert@benko.com</div>
                  {/*--end::Email--*/}
                </div>
                {/*--end::Details--*/}
              </div>
              {/*--end::Details--*/}
              {/*--begin::Stats--*/}
              <div className="d-flex">
                {/*--begin::Sales--*/}
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-dark">$45,500</div>
                  <div className="fs-7 text-muted">Sales</div>
                </div>
                {/*--end::Sales--*/}
              </div>
              {/*--end::Stats--*/}
            </div>
            {/*--end::User--*/}
          </div>
          {/*--end::List--*/}
        </div>
        {/*--end::Users--*/}
        {/*--begin::Notice--*/}
        <div className="d-flex justify-content-between">
          {/*--begin::Label--*/}
          <div className="fw-bold">
            <label className="fs-6">Adding Users by Team Members</label>
            <div className="fs-7 text-muted">
              If you need more info, please check budget planning
            </div>
          </div>
          {/*--end::Label--*/}
          {/*--begin::Switch--*/}
          <label className="form-check form-switch form-check-custom form-check-solid">
            <input className="form-check-input" type="checkbox" value="" checked={true} />
            <span className="form-check-label fw-bold text-muted">Allowed</span>
          </label>
          {/*--end::Switch--*/}
        </div>
        {/*--end::Notice--*/}
      </Modal>
      <Card clssName="mt-6 mt-xl-9" headerClassName="mt-5">
        <Card.Title className="flex-column">
          <h3 className="fw-bolder mb-1">Project Spendings</h3>
          <div className="fs-6 text-gray-400">Total $260,300 sepnt so far</div>
        </Card.Title>
        <Card.Toolbar>
          {/*--begin::Select--*/}
          <div className="me-6 my-1">
            <select
              id="kt_filter_year"
              name="year"
              data-control="select2"
              data-hide-search="true"
              className="w-125px form-select form-select-solid form-select-sm"
            >
              <option value="All" selected={true}>
                All time
              </option>
              <option value="thisyear">This year</option>
              <option value="thismonth">This month</option>
              <option value="lastmonth">Last month</option>
              <option value="last90days">Last 90 days</option>
            </select>
          </div>
          {/*--end::Select--*/}
          {/*--begin::Select--*/}
          <div className="me-4 my-1">
            <select
              id="kt_filter_orders"
              name="orders"
              data-control="select2"
              data-hide-search="true"
              className="w-125px form-select form-select-solid form-select-sm"
            >
              <option value="All" selected={true}>
                All Orders
              </option>
              <option value="Approved">Approved</option>
              <option value="Declined">Declined</option>
              <option value="In Progress">In Progress</option>
              <option value="In Transit">In Transit</option>
            </select>
          </div>
          {/*--end::Select--*/}
          {/*--begin::Search--*/}
          <div className="d-flex align-items-center position-relative my-1">
            <Icon name="Duotune/gen021" className="svg-icon-3 position-absolute ms-3" />
            <input
              type="text"
              id="kt_filter_search"
              className="form-control form-control-solid form-select-sm w-150px ps-9"
              placeholder="Search Order"
            />
          </div>
          {/*--end::Search--*/}
        </Card.Toolbar>
        <Card.Body className="pt-0">
          <Table
            pagination={{ total: 80, current: 5 }}
            dataSource={[{ name: 'x' }, { name: 'x3' }, { name: 'x2' }, { name: 'x1' }]}
            columns={[
              {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },
            ]}
          />
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default ArticleChannel;
