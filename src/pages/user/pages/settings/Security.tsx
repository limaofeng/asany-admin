import { ContentWrapper } from '@/layouts/components';
import { Button, Card, Form, Input } from '@/pages/Metronic/components';

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

<TwoFactorAuthentication />;

function Sessions() {
  return (
    <Card className="mb-5 mb-xl-10">
      <Card.Header>
        <Card.Title>会话</Card.Title>
      </Card.Header>
      <Card.Body>
        <p className="mb-4">这是已登录您帐户的设备列表。您可以撤销您不认可的任何会话。</p>
        <ul className="w-800px">
          <li>
            <div>
              <div>
                <span>状态</span>
                <div>设备</div>
                <div>
                  <span>城市，ip</span>
                  <div>您当前的会话 / 最后访问时间是</div>
                </div>
              </div>
              <div>登录于</div>
            </div>
            <div>查看详情</div>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}

function Security() {
  return (
    <ContentWrapper header={{ title: '密码与安全设置' }} footer={false}>
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
