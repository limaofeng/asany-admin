import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ContentWrapper } from '@/layouts/components';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Separator,
  Toast,
  Upload,
} from '@/metronic';

import { useUpdateUserMutation, useUserQuery } from '../hooks';

function UserEditView() {
  const params = useParams();

  const navigate = useNavigate();
  const form = Form.useForm();

  const [updateUser] = useUpdateUserMutation();

  const { data } = useUserQuery({
    variables: {
      id: params.id,
    },
    skip: !params.id,
  });

  const article = data?.result;

  useEffect(() => {
    if (!article) {
      return;
    }
    form.setFieldsValue({
      userType: article.userType,
      nickname: article.nickname!,
      phone: article.phone?.number,
      email: article.email?.address,
      avatar: article.avatar?.id,
      username: article.username,
    });
  }, [article]);

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();

    delete values.username;
    delete values.userType;

    const { data } = await updateUser({
      variables: {
        id: params.id,
        input: values,
      },
    });
    Toast.success('保存成功', 2000, {
      placement: 'top-center',
      progressBar: true,
    });
    navigate('/system/users/' + data!.result!.id, {
      replace: true,
    });
  }, []);

  return (
    <ContentWrapper
      header={{
        title: '编辑用户',
      }}
    >
      <Card>
        <Card.Header>
          <Card.Title>编辑用户</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form form={form} className="form d-flex flex-column">
            <Row className="mt-5">
              <Col span={6}>
                <Form.Item
                  className="mb-5"
                  name="userType"
                  label="用户类型"
                  rules={[{ required: true, message: '用户类型不能为空' }]}
                >
                  <Select
                    className="w-400px"
                    readOnly
                    options={[
                      {
                        label: '普通用户',
                        value: 'USER',
                      },
                      {
                        label: '管理员',
                        value: 'ADMIN',
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  className="mb-5"
                  name="nickname"
                  label="用户"
                  rules={[{ required: true, message: '用户不能为空' }]}
                >
                  <Input solid className="w-400px" />
                </Form.Item>
                <Form.Item
                  className="mb-5"
                  name="phone"
                  label="电话"
                  rules={[{ required: true, message: '电话不能为空' }]}
                >
                  <Input solid className="w-400px" />
                </Form.Item>
                <Form.Item
                  className="mb-5"
                  name="email"
                  label="邮箱"
                  rules={[{ required: true, message: '邮箱不能为空' }]}
                >
                  <Input solid className="w-400px" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  className="mb-5"
                  name="avatar"
                  label="用户头像"
                  help="允许的文件类型:png, jpg, jpeg。"
                >
                  <Upload.Image
                    width={125}
                    height={125}
                    space="XXTIeJCp"
                    crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
                    background="/assets/media/svg/avatars/blank.svg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <h3 className="mt-6 mb-4">账户信息</h3>
            <Separator />
            <Row className="mt-5">
              <Col span={6}>
                <Form.Item
                  name="username"
                  label="账户"
                  rules={[{ required: true, message: '账户不能为空' }]}
                >
                  <Input readOnly solid className="w-400px" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="password" label="密码">
                  <Input solid className="w-400px" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button className="w-100px" onClick={handleSave}>
            保存
          </Button>
        </Card.Footer>
      </Card>
    </ContentWrapper>
  );
}

export default UserEditView;
