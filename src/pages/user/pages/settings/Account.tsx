import { useCallback, useState } from 'react';

import Icon from '@asany/icons';
import { Link } from 'umi';

import { ChangeUsernameModal, DeleteAccountModal } from '../../components/modals';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card } from '@/metronic';

function Account() {
  const organizations = [];

  const [changeUsernameModalVisible, setChangeUsernameModalVisible] = useState(false);
  const [deleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false);

  const handleChangeUsername = useCallback(() => {
    setChangeUsernameModalVisible(true);
  }, []);

  const handleCloseChangeUsernameModal = useCallback(() => {
    setChangeUsernameModalVisible(false);
  }, []);

  const handleDeleteAccount = useCallback(() => {
    setDeleteAccountModalVisible(true);
  }, []);

  const handleCloseDeleteAccountModal = useCallback(() => {
    setDeleteAccountModalVisible(false);
  }, []);

  return (
    <ContentWrapper header={{ title: '账户设置' }} footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>更改用户名</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="mb-3">更改您的用户名可能会产生意想不到的副作用</p>
          <Button onClick={handleChangeUsername}>更改用户名</Button>
          <ChangeUsernameModal
            visible={changeUsernameModalVisible}
            onCancel={handleCloseChangeUsernameModal}
          />
          <p className="mt-5 mb-3 text-gray-700 text-small d-flex align-items-center">
            <Icon className="text-gray-800 svg-icon-4 me-1" name="Bootstrap/question-circle" />
            想要管理帐户安全设置？您可以在 <Link to="/settings/security">帐户安全</Link>
            选项卡中找到它们。
          </p>
        </Card.Body>
      </Card>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title className="text-danger">删除账户</Card.Title>
        </Card.Header>
        <Card.Body>
          {organizations.length ? (
            <div className="fs-7">
              <p>您的帐户目前是这些组织的所有者： w-asany 您必须先 删除自己、 转移所有权或</p>
              <p>在删除用户之前，必须先将自己从组织中移除、转移所有权或删除这些组织。</p>
            </div>
          ) : (
            <p className="mb-3 fs-7">帐户删除后，将无法恢复。请谨慎操作</p>
          )}
          <Button variant="danger" onClick={handleDeleteAccount} disabled={!!organizations.length}>
            删除账户
          </Button>
          <DeleteAccountModal
            visible={deleteAccountModalVisible}
            onCancel={handleCloseDeleteAccountModal}
          />
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default Account;
