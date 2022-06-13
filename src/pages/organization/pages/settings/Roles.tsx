import { useState } from 'react';

import { Link } from 'umi';

import Controls from '@/components/Controls';
import { ContentWrapper } from '@/layouts/components';
import { Button, Card, Col, Input, Row, Select2 } from '@/metronic';

function RoleItem() {
  return (
    <Col md={3}>
      <Card flush className="h-md-100">
        <Card.Header>
          <Card.Title>
            <h2>Administrator</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body className="pt-1">
          {/*--begin::Users--*/}
          <div className="fw-bolder text-gray-600 mb-5">拥有此角色的用户数: 5</div>
          {/*--end::Users--*/}
          {/*--begin::Permissions--*/}
          <div className="d-flex flex-column text-gray-600">
            <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3" />
              All Admin Controls
            </div>
            <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3" />
              View and Edit Financial Summaries
            </div>
            <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3" />
              Enabled Bulk Reports
            </div>
            <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3" />
              View and Edit Payouts
            </div>
            <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3" />
              View and Edit Disputes
            </div>
            <div className="d-flex align-items-center py-2">
              <span className="bullet bg-primary me-3" />
              <em>and 7 more...</em>
            </div>
          </div>
          {/*--end::Permissions--*/}
        </Card.Body>
        <Card.Footer>
          <Button
            as={Link}
            to="/organizations/w-asany/settings/roles/12"
            className="my-1 me-2"
            variant="light"
            activeColor="primary"
          >
            查看详情
          </Button>
          <Button className="my-1" variant="light" activeColor="light-primary">
            编辑角色
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}

type RoleListProps = {
  layout: 'card' | 'table';
};

function RoleList(props: RoleListProps) {
  const { layout } = props;

  console.log(layout);

  const roles = [
    {
      id: 1,
      name: '系统管理员',
      code: 'administrator',
      description: '',
      type: 'system',
      enabled: true,
      space: 'xxx',
    },
    {
      id: 1,
      name: '系统管理员',
      code: 'administrator',
      description: '',
      type: 'system',
      enabled: true,
      space: 'xxx',
    },
    {
      id: 1,
      name: '系统管理员',
      code: 'administrator',
      description: '',
      type: 'system',
      enabled: true,
      space: 'xxx',
    },
    {
      id: 1,
      name: '系统管理员',
      code: 'administrator',
      description: '',
      type: 'system',
      enabled: true,
      space: 'xxx',
    },
  ];

  return (
    <Row gutter={{ default: 5, xl: 9 }} cols={{ default: 1, md: 3, xl: 4 }}>
      {roles.map((item) => (
        <RoleItem key={item.id} />
      ))}
      {/*--begin::Add new card--*/}
      <div className="ol-md-4">
        {/*--begin::Card--*/}
        <div className="card h-md-100">
          {/*--begin::Card body--*/}
          <div className="card-body d-flex flex-center">
            {/*--begin::Button--*/}
            <button
              type="button"
              className="btn btn-clear d-flex flex-column flex-center"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_role"
            >
              {/*--begin::Illustration--*/}
              <img
                src="/assets/media/illustrations/sigma-1/4.png"
                alt=""
                className="mw-100 mh-150px mb-7"
              />
              {/*--end::Illustration--*/}
              {/*--begin::Label--*/}
              <div className="fw-bolder fs-3 text-gray-600 text-hover-primary">Add New Role</div>
              {/*--end::Label--*/}
            </button>
            {/*--begin::Button--*/}
          </div>
          {/*--begin::Card body--*/}
        </div>
        {/*--begin::Card--*/}
      </div>
      {/*--begin::Add new card--*/}
    </Row>
  );
}

function Roles() {
  const [layout, setLayout] = useState<'card' | 'table'>('card');

  return (
    <ContentWrapper className="page-organization-settings-roles" footer={false}>
      <div className="d-flex flex-wrap flex-stack pb-7">
        <div className="d-flex flex-wrap align-items-center">
          <h3 className="fw-bolder me-5">角色 (4)</h3>
          <Input.Search placeholder="搜索" className="border-body bg-body w-250px" />
        </div>
        <Controls layout onLayout={setLayout}>
          <div className="d-flex my-0">
            <Select2
              className="border-body bg-body w-150px me-5"
              placeholder="启用状态"
              options={[
                { label: '全部', value: 'all' },
                { label: '启用', value: 'enable' },
                { label: '禁用', value: 'disable' },
              ]}
            />
            <Button>新增角色</Button>
          </div>
        </Controls>
      </div>
      <RoleList layout={layout} />
    </ContentWrapper>
  );
}

export default Roles;
