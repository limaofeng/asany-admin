import { ContentWrapper } from '@/layouts/components';
import { Button, Card } from '@/pages/Metronic/components';

function Account() {
  return (
    <ContentWrapper header={{ title: '账户设置' }} footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>更改用户名</Card.Title>
        </Card.Header>
        <Card.Body>
          更改您的用户名可能会产生意想不到的副作用
          <Button>更改用户名</Button>
          想要管理帐户安全设置？您可以在“ 帐户安全”选项卡中找到它们。
        </Card.Body>
      </Card>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>删除账户</Card.Title>
        </Card.Header>
        <Card.Body>
          您的帐户目前是这些组织的所有者： w-asany 您必须先 删除自己、 转移所有权或
          删除这些组织，然后才能删除您的用户。
          <Button>删除您的账户</Button>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default Account;
