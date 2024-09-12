import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCurrentuser } from '@/hooks';
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
import { useAjaxValidator } from '@/metronic/hooks';

import {
  useCreateUserMutation,
  useFindUserByUsernameLazyQuery,
} from '../hooks';

function UserNewView() {
  const { data: user } = useCurrentuser();
  const navigate = useNavigate();
  const form = Form.useForm();

  const [findUserByUsername] = useFindUserByUsernameLazyQuery();
  const [createUser] = useCreateUserMutation();

  const usernameUniqueValidator = useAjaxValidator(
    async (rule, value, signal) => {
      console.log('usernameUniqueValidator', rule, value, signal);
      const { data } = await findUserByUsername({
        variables: {
          tenantId: user?.tenantId,
          username: value,
        },
        fetchPolicy: 'network-only',
        context: {
          fetchOptions: {
            signal,
          },
        },
      });
      return !data?.result.length;
    },
  );

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();

    const { data } = await createUser({
      variables: {
        input: {
          ...values,
          tenantId: user?.tenantId,
        },
      },
    });
    Toast.success('保存成功', 2000, {
      placement: 'top-center',
      progressBar: true,
    });
    navigate('/system/users/' + data!.result!.id, {
      replace: true,
    });
  }, [user?.tenantId]);

  return (
    <ContentWrapper
      header={{
        title: '新建用户',
      }}
    >
      <Card>
        <Card.Header>
          <Card.Title>新建用户</Card.Title>
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
                    space="7VE4SSrk"
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
                  rules={[
                    { required: true, message: '账户不能为空' },
                    { validator: usernameUniqueValidator, message: '账户重复' },
                  ]}
                >
                  <Input solid className="w-400px" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="password"
                  label="密码"
                  rules={[{ required: true, message: '密码不能为空' }]}
                >
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

export default UserNewView;
