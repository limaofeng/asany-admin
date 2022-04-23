import { useCallback, useState } from 'react';

import classnames from 'classnames';
import { useCurrentuser } from 'umi';

import { Alert, Button, Form, Input, Modal, Separator } from '@/components/Metronic';

type DeleteOrganizationModalProps = {
  visible?: boolean;
  onCancel: () => void;
};

function DeleteOrganizationModal(props: DeleteOrganizationModalProps) {
  const { visible, onCancel } = props;

  const [disabled, setDisabled] = useState(true);

  const user = useCurrentuser();

  const handleValuesChange = useCallback(
    (_, values) => {
      setDisabled(
        !(values.account == user?.account && values.verify === '删除我的账户' && values.password),
      );
    },
    [user?.account],
  );

  return (
    <Modal
      dialogClassName={classnames('delete-organization-modal w-450px')}
      visible={visible}
      onCancel={onCancel}
      title={'确定删除组织吗？'}
      footer={false}
    >
      <Alert type="danger" message="请仔细阅读以下事项" />
      <div className="inner-body">
        <p>
          您即将永久删除组织 <b>w-asany</b>，以及与组织关联的所有内容。一旦确认
          删除，此操作便无法撤销和恢复。
        </p>
        <Separator className="my-5" />
        <Form onValuesChange={handleValuesChange}>
          <Form.Item className="mb-5" name="account" label="输入组织的名称以确认删除">
            <Input solid />
          </Form.Item>
        </Form>
        <Button
          className="confirm-delete-account"
          disabled={disabled}
          variantStyle="light"
          variant="danger"
        >
          删除组织
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteOrganizationModal;
