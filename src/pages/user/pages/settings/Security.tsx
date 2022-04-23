import Icon from '@asany/icons';
import { Link } from 'umi';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card, Form, Input } from '@/components/Metronic';

function TwoFactorAuthentication() {
  return (
    <Card className="mb-5 mb-xl-10">
      <Card.Header>
        <Card.Title>双重认证</Card.Title>
      </Card.Header>
      <Card.Body>启用双重身份认证（2FA），提高账户安全性</Card.Body>
    </Card>
  );
}

console.log('TwoFactorAuthentication', TwoFactorAuthentication);

type SessionItemProps = {
  device: 'phone' | 'laptop' | 'tablet';
};

function SessionItem(props: SessionItemProps) {
  const { device } = props;
  return (
    <li className="session-item p-5 border-bottom border-secondary d-flex flex-row">
      <div className="flex-column-fluid d-flex flex-column">
        <div className="d-flex flex-row">
          <span className="session-state-indicator mt-3 rounded recent" />
          <div className="device-icon-container">
            <Icon className="svg-icon-2hx" name={`Bootstrap/${device}`} />
          </div>
          <div className="session-info">
            <strong>
              上海 <span>67.230.185.83</span>
            </strong>
            <div className="text-small text-gray-800">
              您当前的会话 / 最后访问时间 2022年 3月 15日
            </div>
          </div>
        </div>
        <div className="seen-in text-gray-800">访问位置可能位于 中国, 美国</div>
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
  return (
    <Card className="user-session-list mb-5 mb-xl-10">
      <Card.Header>
        <Card.Title>会话</Card.Title>
      </Card.Header>
      <Card.Body>
        <p className="mb-4">这是已登录您帐户的设备列表。您可以撤销您不认可的任何会话。</p>
        <ul className="w-800px rounded border border-secondary">
          <SessionItem device="laptop" />
          <SessionItem device="phone" />
          <SessionItem device="tablet" />
        </ul>
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
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>更改密码</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form className="col-12 col-md-8">
            <Form.Item className="mb-5" name="old_password" label="旧密码">
              <Input.Password solid className="w-400px" />
            </Form.Item>
            <Form.Item className="my-5" name="password" label="新密码">
              <Input.Password solid className="w-400px" />
            </Form.Item>
            <Form.Item className="my-5" name="password_confirmation" label="确认新密码">
              <Input.Password solid className="w-400px" />
            </Form.Item>
          </Form>
          <p className="text-small mt-2 mb-1">
            确保密码至少包含 15 个字符或至少 8 个字符，包括数字 和小写字母。
          </p>
          <Button className="me-4">更新密码</Button>
          <Button type="link" variant={false}>
            我忘记了自己的密码
          </Button>
        </Card.Body>
      </Card>

      <Sessions />
    </ContentWrapper>
  );
}

export default Security;
