import { useEffect } from 'react';

import { useCurrentuser } from '@/hooks';
import { Col, Form, Input, Row, Separator, Upload } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import { useAjaxValidator } from '@/metronic/hooks';
import type { User } from '@/types';

import { useFindUserByUsernameLazyQuery } from '../hooks';

type UserFormProps = {
  visible?: boolean;
  form: FormInstance;
  data: User;
  submitting: boolean;
  submit: () => void;
  onDeleteSuccess: (data: any) => void;
};

function UserForm(props: UserFormProps) {
  const { data: user } = useCurrentuser();
  const { form } = props;

  const [findUserByUsername] = useFindUserByUsernameLazyQuery();

  const usernameUniqueValidator = useAjaxValidator(
    async (rule, value, signal) => {
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

  useEffect(() => {
    const values = props.data;
    form.resetFields();
    form.setFieldsValue({
      ...values,
      phone: values.phone?.number || '',
      email: values.email?.address || '',
    });
  }, [form, props.data]);

  return (
    <Form form={form} className="form d-flex flex-column">
      <Row className="mt-5">
        <Col span={6}>
          {/* <Form.Item
            className="mb-5"
            name="userType"
            label="用户类型"
            rules={[{ required: true, message: '用户类型不能为空' }]}
          >
            <Select
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
          </Form.Item> */}
          <Form.Item
            className="mb-5"
            name="nickname"
            label="用户"
            rules={[{ required: true, message: '用户不能为空' }]}
          >
            <Input solid />
          </Form.Item>
          <Form.Item
            className="mb-5"
            name="phone"
            label="电话"
            rules={[{ required: true, message: '电话不能为空' }]}
          >
            <Input solid />
          </Form.Item>
          <Form.Item
            className="mb-5"
            name="email"
            label="邮箱"
            rules={[{ required: true, message: '邮箱不能为空' }]}
          >
            <Input solid />
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
            <Input solid />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default UserForm;
