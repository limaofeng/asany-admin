import { useCallback, useState } from 'react';

import { DeleteOrganizationModal, RenameOrganizationModal } from '../../components/modals';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card, Form, Input } from '@/pages/Metronic/components';

function DangerZone() {
  const [renameOrganizationModalVisible, setRenameOrganizationModalVisible] = useState(false);
  const [deleteOrganizationModalVisible, setDeleteOrganizationModalVisible] = useState(false);

  const handleRenameOrganization = useCallback(() => {
    setRenameOrganizationModalVisible(true);
  }, []);

  const handleCloseRenameOrganizationModal = useCallback(() => {
    setRenameOrganizationModalVisible(false);
  }, []);

  const handleDeleteOrganization = useCallback(() => {
    setDeleteOrganizationModalVisible(true);
  }, []);

  const handleDeleteOrganizationModal = useCallback(() => {
    setDeleteOrganizationModalVisible(false);
  }, []);

  return (
    <Card className="mb-5 mb-xl-10">
      <Card.Header>
        <Card.Title className="text-danger">危险区域</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="w-800px danger-zone rounded border border-danger">
          <div className="p-5 border-bottom border-secondary d-flex align-items-center">
            <div className="flex-row-fluid">
              <div className="fw-bolder">重命名组织名称</div>
              <span className="text-small">重命名组织可能会产生意想不到的副作用</span>
            </div>
            <Button onClick={handleRenameOrganization} type="solid" variant="danger">
              修改组织名称
            </Button>
            <RenameOrganizationModal
              visible={renameOrganizationModalVisible}
              onCancel={handleCloseRenameOrganizationModal}
            />
          </div>
          <div className="p-5 border-bottom border-secondary d-flex align-items-center">
            <div className="flex-row-fluid">
              <div className="fw-bolder">删除组织</div>
              <span className="text-small">帐户删除后，将无法恢复。请谨慎操作</span>
            </div>
            <Button onClick={handleDeleteOrganization} type="solid" variant="danger">
              删除组织
            </Button>
            <DeleteOrganizationModal
              visible={deleteOrganizationModalVisible}
              onCancel={handleDeleteOrganizationModal}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

function Profile() {
  return (
    <ContentWrapper
      className="page-organization-settings-profile"
      header={{ title: '通用设置' }}
      footer={false}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>通用设置</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form className="w-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row">
            <div className="col-12 col-md-8">
              <Form.Item className="mb-5" name="displayName" label="显示名称">
                <Input solid className="w-400px" />
              </Form.Item>
              <Form.Item className="my-5" name="email" label="邮箱">
                <Input solid className="w-400px" />
              </Form.Item>
              <Form.Item className="my-5" name="url" label="网址">
                <Input solid className="w-400px" />
              </Form.Item>
              <Form.Item
                className="my-5"
                name="description"
                label="描述"
                help="请用少于250字符描述"
              >
                <Input.TextArea
                  solid
                  autoSize={{ minRows: 4, maxRows: 8 }}
                  showCount
                  maxLength={250}
                  className="w-600px"
                />
              </Form.Item>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="row">
                {/* <label className="col-lg-4 col-form-label fw-bold fs-6">Avatar</label> */}
                <div className="col-lg-8">
                  {/*--begin::Image input--*/}
                  <div
                    className="image-input image-input-outline"
                    data-kt-image-input="true"
                    style={{ backgroundImage: "url('/assets/media/svg/avatars/blank.svg')" }}
                  >
                    {/*--begin::Preview existing avatar--*/}
                    <div
                      className="image-input-wrapper w-125px h-125px"
                      style={{ backgroundImage: 'url(/assets/media/avatars/300-1.jpg)' }}
                    />
                    {/*--end::Preview existing avatar--*/}
                    {/*--begin::Label--*/}
                    <label
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="change"
                      data-bs-toggle="tooltip"
                      title="Change avatar"
                    >
                      <i className="bi bi-pencil-fill fs-7" />
                      {/*--begin::Inputs--*/}
                      <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                      <input type="hidden" name="avatar_remove" />
                      {/*--end::Inputs--*/}
                    </label>
                    {/*--end::Label--*/}
                    {/*--begin::Cancel--*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="cancel"
                      data-bs-toggle="tooltip"
                      title="Cancel avatar"
                    >
                      <i className="bi bi-x fs-2" />
                    </span>
                    {/*--end::Cancel--*/}
                    {/*--begin::Remove--*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="remove"
                      data-bs-toggle="tooltip"
                      title="Remove avatar"
                    >
                      <i className="bi bi-x fs-2" />
                    </span>
                    {/*--end::Remove--*/}
                  </div>
                  {/*--end::Image input--*/}
                  {/*--begin::Hint--*/}
                  <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                  {/*--end::Hint--*/}
                </div>
              </div>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button>更新个人资料</Button>
        </Card.Footer>
      </Card>

      <DangerZone />
    </ContentWrapper>
  );
}

export default Profile;
