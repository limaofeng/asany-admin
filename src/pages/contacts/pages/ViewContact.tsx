import { useCallback, useMemo } from 'react';

import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import { useContactQuery } from '../hooks';
import type { ContactRouteParams } from '../typings';

import { Button, Card, Dropdown, Menu, Symbol, Tabs } from '@/pages/Metronic/components';
import type { Contact } from '@/types';

type ViewContactProps = RouteComponentProps<ContactRouteParams> & {
  contact: Contact;
};

function ViewContact(props: ViewContactProps) {
  const { match } = props;

  const { id } = match.params;

  const { data } = useContactQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id,
    },
  });

  const contact = useMemo(() => {
    return data?.contact || props.contact;
  }, [data?.contact, props.contact]);

  const handleClick = useCallback((e) => {
    console.log('xxx', e);
  }, []);

  return (
    <Card flush>
      <Card.Header className="pt-7">
        <Card.Title>
          <Icon name="Duotune/com005" className="svg-icon-1 me-2" />
          <h2>联系人详情</h2>
        </Card.Title>
        <Card.Toolbar className="gap-3">
          {/* <Button size="sm" variant="light" activeColor="light-primary">
            <Icon name="Duotune/com012" className="svg-icon-2" />
            Chat
          </Button>
          <Button size="sm" variant="light" activeColor="light-primary">
            <Icon name="Duotune/com007" className="svg-icon-2" />
            Message
          </Button> */}
          <Dropdown
            overlay={
              <Menu
                onClick={handleClick}
                className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4"
              >
                <Menu.Item key="edit" className="px-3">
                  编辑
                </Menu.Item>
                <Menu.Item key="delete" className="px-3 actions-delete">
                  删除
                </Menu.Item>
              </Menu>
            }
            placement="bottomRight"
          >
            <Button
              icon={<Icon name="Duotune/gen052" className="svg-icon-2" />}
              size="sm"
              variant="light"
              activeColor="light-primary"
            />
          </Dropdown>
        </Card.Toolbar>
      </Card.Header>
      <Card.Body className=" pt-5">
        {!contact ? (
          <ContentLoader
            speed={2}
            width="100%"
            height={500}
            viewBox="0 0 870 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <circle cx="50" cy="50" r="50" />
            <rect x="120" y="30" rx="6" ry="6" width="120" height="12" />
            <rect x="120" y="60" rx="2" ry="2" width="150" height="6" />
            <rect x="120" y="76" rx="2" ry="2" width="100" height="6" />
            <rect x="0" y="136" rx="3" ry="3" width="410" height="6" />
            <rect x="0" y="152" rx="3" ry="3" width="380" height="6" />
            <rect x="0" y="168" rx="3" ry="3" width="178" height="6" />
          </ContentLoader>
        ) : (
          <>
            <div className="d-flex gap-7 align-items-center">
              <Symbol.Avatar
                size={100}
                alt={contact.name!}
                shape="circle"
                labelClassName="fs-4x"
                src="assets/media/avatars/300-6.jpg"
              />
              <div className="d-flex flex-column gap-2">
                <h3 className="mb-0">{contact.name}</h3>
                <div className="d-flex align-items-center gap-2">
                  <Icon name="Duotune/com011" className="svg-icon-2" />
                  <a href="#" className="text-muted text-hover-primary">
                    {contact.email?.address || 'xx@kpmg.com'}
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Icon name="Duotune/elc003" className="svg-icon-2" />
                  <a href="#" className="text-muted text-hover-primary">
                    {contact.phone?.number}
                  </a>
                </div>
              </div>
            </div>
            <Tabs className="nav-line-tabs nav-line-tabs-2x fs-6 fw-bold mt-6 mb-8">
              <Tabs.TabPane
                key="General"
                tab={
                  <a className="nav-link text-active-primary pb-4">
                    <Icon name="Duotune/gen001" className="svg-icon-4 me-1" />
                    通用
                  </a>
                }
              >
                {/*--begin::Row--*/}
                <div className="row mb-7">
                  {/*--begin::Label--*/}
                  <label className="col-lg-4 fw-bold text-muted">Full Name</label>
                  {/*--end::Label--*/}
                  {/*--begin::Col--*/}
                  <div className="col-lg-8">
                    <span className="fw-bolder fs-6 text-gray-800">Max Smith</span>
                  </div>
                  {/*--end::Col--*/}
                </div>
                {/*--end::Row--*/}
                {/*--begin::Input group--*/}
                <div className="row mb-7">
                  {/*--begin::Label--*/}
                  <label className="col-lg-4 fw-bold text-muted">Company</label>
                  {/*--end::Label--*/}
                  {/*--begin::Col--*/}
                  <div className="col-lg-8 fv-row">
                    <span className="fw-bold text-gray-800 fs-6">Keenthemes</span>
                  </div>
                  {/*--end::Col--*/}
                </div>
                {/*--end::Input group--*/}
                {/*--begin::Input group--*/}
                <div className="row mb-7">
                  {/*--begin::Label--*/}
                  <label className="col-lg-4 fw-bold text-muted">
                    Contact Phone
                    <i
                      className="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Phone number must be active"
                    />
                  </label>
                  {/*--end::Label--*/}
                  {/*--begin::Col--*/}
                  <div className="col-lg-8 d-flex align-items-center">
                    <span className="fw-bolder fs-6 text-gray-800 me-2">044 3276 454 935</span>
                    <span className="badge badge-success">Verified</span>
                  </div>
                  {/*--end::Col--*/}
                </div>
                {/*--end::Input group--*/}
                {/*--begin::Input group--*/}
                <div className="row mb-7">
                  {/*--begin::Label--*/}
                  <label className="col-lg-4 fw-bold text-muted">Company Site</label>
                  {/*--end::Label--*/}
                  {/*--begin::Col--*/}
                  <div className="col-lg-8">
                    <a href="#" className="fw-bold fs-6 text-gray-800 text-hover-primary">
                      keenthemes.com
                    </a>
                  </div>
                  {/*--end::Col--*/}
                </div>
                {/*--end::Input group--*/}
                {/*--begin::Input group--*/}
                <div className="row mb-7">
                  {/*--begin::Label--*/}
                  <label className="col-lg-4 fw-bold text-muted">
                    Country
                    <i
                      className="fas fa-exclamation-circle ms-1 fs-7"
                      title="Country of origination"
                    />
                  </label>
                  {/*--end::Label--*/}
                  {/*--begin::Col--*/}
                  <div className="col-lg-8">
                    <span className="fw-bolder fs-6 text-gray-800">Germany</span>
                  </div>
                  {/*--end::Col--*/}
                </div>
                {/*--end::Input group--*/}
                {/*--begin::Input group--*/}
                <div className="row mb-7">
                  {/*--begin::Label--*/}
                  <label className="col-lg-4 fw-bold text-muted">Communication</label>
                  {/*--end::Label--*/}
                  {/*--begin::Col--*/}
                  <div className="col-lg-8">
                    <span className="fw-bolder fs-6 text-gray-800">Email, Phone</span>
                  </div>
                  {/*--end::Col--*/}
                </div>
                {/*--end::Input group--*/}
                {/*--begin::Input group--*/}
                <div className="row mb-10">
                  {/*--begin::Label--*/}
                  <label className="col-lg-4 fw-bold text-muted">Allow Changes</label>
                  {/*--begin::Label--*/}
                  {/*--begin::Label--*/}
                  <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">Yes</span>
                  </div>
                  {/*--begin::Label--*/}
                </div>
              </Tabs.TabPane>
              {/* <Tabs.TabPane
                key="Activity"
                tab={
                  <a className="nav-link text-active-primary pb-4">
                    <Icon name="Duotune/gen056" className="svg-icon-4 me-1" />
                    活动
                  </a>
                }
              >
                222
              </Tabs.TabPane> */}
            </Tabs>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ViewContact;
