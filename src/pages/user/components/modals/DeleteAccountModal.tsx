import { useCallback, useState } from 'react';

import classnames from 'classnames';

import { Alert, Button, Form, Input, Modal, Separator } from '@/metronic';
import { useCurrentuser } from '@/utils/hooks';

type DeleteAccountModalProps = {
  visible?: boolean;
  onCancel: () => void;
};

function DeleteAccountModal(props: DeleteAccountModalProps) {
  const { visible, onCancel } = props;

  const [disabled, setDisabled] = useState(true);

  const { data: user } = useCurrentuser();

  const handleValuesChange = useCallback(
    (_: any, values: any) => {
      setDisabled(
        !(values.account == user?.account && values.verify === '删除我的账户' && values.password),
      );
    },
    [user?.account],
  );

  return (
    <Modal
      dialogClassName={classnames('delete-account-modal w-450px')}
      visible={visible}
      onCancel={onCancel}
      title={'确定删除您的账户吗？'}
      footer={false}
    >
      <Alert type="danger" message="请仔细阅读以下事项" />
      <div className="inner-body">
        <p className="fs-7">
          您即将永久删除 <b>您的帐户</b>，以及与您的帐户关联的所有内容。一旦确认
          删除帐户，此操作便无法撤销和恢复。
        </p>
        <Separator className="my-5" />
        <Form onValuesChange={handleValuesChange}>
          <Form.Item className="mb-5" name="account" label="您的用户名或邮箱">
            <Input solid />
          </Form.Item>
          <Form.Item
            className="mb-5"
            name="verify"
            label={
              <>
                输入“<i>删除我的账户</i>”，已完成验证
              </>
            }
          >
            <Input solid />
          </Form.Item>
          <Form.Item className="mb-5" name="password" label="确认密码">
            <Input.Password solid />
          </Form.Item>
        </Form>
        <Button className="confirm-delete-account" disabled={disabled} variant="light-danger">
          删除此账户
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteAccountModal;
