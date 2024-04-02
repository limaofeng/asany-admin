import { useCallback, useEffect, useState } from 'react';

import type { RouteComponentProps } from 'react-router';

import logo_holder from '../../assets/blank.png';
import {
  DeleteOrganizationModal,
  RenameOrganizationModal,
} from '../../components/modals';
import {
  OrganizationDocument,
  useOrganizationQuery,
  useUpdateOrganizationProfileMutation,
} from '../../hooks/api';

import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  Form,
  Input,
  RegionPicker,
  Toast,
  Upload,
} from '@/metronic';
import type { Organization } from '@/types';

type DangerZoneProps = {
  data: Organization;
};

function DangerZone(props: DangerZoneProps) {
  const { data } = props;

  const [renameOrganizationModalVisible, setRenameOrganizationModalVisible] =
    useState(false);
  const [deleteOrganizationModalVisible, setDeleteOrganizationModalVisible] =
    useState(false);

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
              <div className="fw-bolder">修改组织代码</div>
              <span className="text-small">
                修改组织代码可能会产生意想不到的副作用
              </span>
            </div>
            <Button
              onClick={handleRenameOrganization}
              type="solid"
              variant="danger"
            >
              修改组织代码
            </Button>
            <RenameOrganizationModal
              data={data}
              visible={renameOrganizationModalVisible}
              onCancel={handleCloseRenameOrganizationModal}
            />
          </div>
          <div className="p-5 border-bottom border-secondary d-flex align-items-center">
            <div className="flex-row-fluid">
              <div className="fw-bolder">删除组织</div>
              <span className="text-small">
                帐户删除后，将无法恢复。请谨慎操作
              </span>
            </div>
            <Button
              onClick={handleDeleteOrganization}
              type="solid"
              variant="danger"
            >
              删除组织
            </Button>
            <DeleteOrganizationModal
              data={data}
              visible={deleteOrganizationModalVisible}
              onCancel={handleDeleteOrganizationModal}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

type ProfileProps = RouteComponentProps<{ id: string }>;

function Profile(props: ProfileProps) {
  const { match } = props;

  const form = Form.useForm();

  const { data, loading } = useOrganizationQuery({
    variables: {
      id: match.params.id,
    },
  });
  const [updateProfile, { loading: submiting }] =
    useUpdateOrganizationProfileMutation({
      refetchQueries: [
        {
          query: OrganizationDocument,
          variables: {
            id: match.params.id,
          },
        },
      ],
    });

  const organization = data?.organization;

  useEffect(() => {
    if (!organization) {
      return;
    }
    form.setFieldsValue(organization);
  }, [organization, form]);

  const handleUpdate = useCallback(async () => {
    const { ...values } = await form.getFieldsValue();
    await updateProfile({
      variables: {
        id: organization?.id,
        input: { ...values },
      },
    });
    Toast.success('资料更新成功', 3000, {
      placement: 'bottom-start',
      progressBar: true,
    });
  }, [form, organization, updateProfile]);

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
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={loading}>
            <Form
              form={form}
              className="mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row"
            >
              <div className="mw-500px col-12 col-md-8">
                <div className="mw-400px">
                  <Form.Item className="mb-5" name="name" label="显示名称">
                    <Input solid />
                  </Form.Item>
                  <Form.Item
                    className="my-5"
                    name="email"
                    label="邮箱"
                    help="组织联系邮箱"
                  >
                    <Input solid />
                  </Form.Item>
                  <Form.Item
                    className="my-5"
                    name="description"
                    label="描述"
                    help="请用少于250字符描述组织信息"
                  >
                    <Input.TextArea
                      solid
                      autoSize={{ minRows: 4, maxRows: 8 }}
                      showCount
                      maxLength={250}
                    />
                  </Form.Item>
                  <Form.Item
                    className="my-5"
                    name="url"
                    label="URL"
                    help="组织网址"
                  >
                    <Input solid />
                  </Form.Item>
                  <Form.Item className="my-5" name="location" label="所在地区">
                    <RegionPicker
                      ends={(area) => {
                        const level = area.path
                          .split('/')
                          .filter((item) => !!item).length;
                        return area.type == 'city' || level == 2;
                      }}
                      resultType="object"
                      solid
                      placeholder="选择组织所在的地区"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="row">
                  <Form.Item
                    className="mb-5"
                    name="logo"
                    label="组织标志"
                    help="允许的文件类型:png, jpg, jpeg"
                  >
                    <Upload.Image
                      width={125}
                      height={125}
                      space="7VE4SSrk"
                      crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
                      backgroundImage={logo_holder}
                    />
                  </Form.Item>
                </div>
              </div>
            </Form>
            <Button loading={submiting} onClick={handleUpdate}>
              更新资料
            </Button>
          </BlockUI>
        </Card.Body>
      </Card>

      <DangerZone data={organization as Organization} />
    </ContentWrapper>
  );
}

export default Profile;
