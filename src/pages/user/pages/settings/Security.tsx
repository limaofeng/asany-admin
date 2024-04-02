import { useCallback, useMemo } from 'react';

import Icon from '@asany/icons';
import { Link } from 'umi';

import { useChangePasswordMutation, useSessionsQuery } from '../../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card, Form, Input, Toast } from '@/metronic';
import type { Session } from '@/types';
import { parseError } from '@/utils';

// function TwoFactorAuthentication() {
//   return (
//     <Card className="mb-5 mb-xl-10">
//       <Card.Header>
//         <Card.Title>双重认证</Card.Title>
//       </Card.Header>
//       <Card.Body>启用双重身份认证（2FA），提高账户安全性</Card.Body>
//     </Card>
//   );
// }

type SessionItemProps = {
  data: Session;
};

function SessionItem(props: SessionItemProps) {
  const { data } = props;

  const deviceType = useMemo(() => {
    if (data.device?.type == 'COMPUTER') {
      return 'laptop';
    }
    if (data.device?.type == 'MOBILE') {
      return 'phone';
    }
    if (data.device?.type == 'TABLET') {
      return 'tablet';
    }
    return 'laptop';
  }, [data.device?.type]);

  return (
    <li className="session-item p-5 border-bottom border-secondary d-flex flex-row">
      <div className="flex-column-fluid d-flex flex-column">
        <div className="d-flex flex-row">
          <span className="session-state-indicator mt-3 rounded recent" />
          <div className="device-icon-container">
            <Icon className="svg-icon-2hx" name={`Bootstrap/${deviceType}`} />
          </div>
          <div className="session-info">
            <strong>
              {data.location || '地区 未知'}
              <span className="ms-4">{data.ip || 'IP 未知'}</span>
            </strong>
            <div className="text-small text-gray-800">
              您当前的会话1212 / 最后访问时间 2022年 3月 15日
            </div>
          </div>
        </div>
        <div className="seen-in text-gray-800">访问位置位于 中国</div>
      </div>
      <div>
        <Button
          as={Link}
          to="/settings/sessions/833633957"
          className="btn-session-details"
          type="solid"
        >
          查看详情
        </Button>
      </div>
    </li>
  );
}

function Sessions() {
  const { data } = useSessionsQuery();

  const sessions = data?.sessions || [];

  return (
    <Card className="user-session-list mb-5 mb-xl-10">
      <Card.Header>
        <Card.Title>会话</Card.Title>
      </Card.Header>
      <Card.Body>
        <p className="mb-4">
          这是已登录您帐户的设备列表。您可以撤销您不认可的任何会话。
        </p>
        <ul className="w-800px rounded border border-secondary">
          {sessions.map((item) => (
            <SessionItem key={item.id} data={item} />
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

function ChangePassword() {
  const form = Form.useForm();

  const [changePassword, { loading }] = useChangePasswordMutation();
  const handleUpdatePassword = useCallback(async () => {
    const { password_confirmation, ...values } = await form.validateFields();
    try {
      await changePassword({
        variables: values,
      });
      Toast.success('密码修改成功', 3000, {
        placement: 'bottom-start',
        progressBar: true,
      });
      form.resetFields();
    } catch (e) {
      const err = parseError(e);
      Toast.error(err.message, 3000, {
        placement: 'top-center',
      });
    }
  }, [changePassword, form]);

  return (
    <Card className="mb-5 mb-xl-10">
      <Card.Header>
        <Card.Title>更改密码</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form form={form} className="col-12 col-md-8">
          <Form.Item
            className="mb-5"
            name="oldPassword"
            label="原密码"
            rules={[{ required: true, message: '原密码必填' }]}
          >
            <Input.Password solid className="w-400px" />
          </Form.Item>
          <Form.Item
            className="my-5 w-400px"
            name="newPassword"
            label="新密码"
            rules={[
              { required: true, message: '密码必填' },
              {
                min: 8,
                message: '密码至少包含 8 个字符',
              },
            ]}
          >
            <Input.Password meter solid />
          </Form.Item>
          <Form.Item
            className="my-5"
            name="password_confirmation"
            label="确认新密码"
            rules={[
              {
                validator: async (_, value) => {
                  if (form.getFieldValue('newPassword') !== value) {
                    throw new Error('两次输入的密码不一致');
                  }
                },
              },
            ]}
          >
            <Input.Password solid className="w-400px" />
          </Form.Item>
        </Form>
        <p className="text-small mt-2 mb-1">
          确保密码至少包含 15 个字符或至少 8 个字符，包括数字 和小写字母。
        </p>
        <Button
          loading={loading}
          className="me-4"
          onClick={handleUpdatePassword}
        >
          更新密码
        </Button>
        <Button type="link" variant={false}>
          我忘记了自己的密码
        </Button>
      </Card.Body>
    </Card>
  );
}

function Security() {
  return (
    <ContentWrapper
      className="page-settings-security"
      header={{ title: '密码与安全设置' }}
      footer={false}
    >
      <ChangePassword />
      <Sessions />
    </ContentWrapper>
  );
}

export default Security;
