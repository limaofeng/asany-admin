import { useCallback, useState } from 'react';

import classnames from 'classnames';

import { Alert, Button, Form, Input, Modal, Separator } from '@/metronic';
import type { Organization } from '@/types';

type DeleteOrganizationModalProps = {
  data: Organization;
  visible?: boolean;
  onCancel: () => void;
};

function DeleteOrganizationModal(props: DeleteOrganizationModalProps) {
  const { data, visible, onCancel } = props;

  const [disabled, setDisabled] = useState(true);

  const handleValuesChange = useCallback(
    (_: any, values: any) => {
      setDisabled(!(values.code === data?.code));
    },
    [data],
  );

  const handleSubmit = useCallback(() => {
    // Toast.warning('占不支持删除组织', 3000, {
    //   placement: 'top-center',
    // });
  }, []);

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
          您即将永久删除组织: <b>{data?.code}</b>
          ，以及与组织关联的所有内容。一旦确认 删除，此操作便无法撤销和恢复。
        </p>
        <Separator className="my-5" />
        <Form onFinish={handleSubmit} onValuesChange={handleValuesChange}>
          <Form.Item
            className="mb-5"
            name="code"
            label="输入组织代码以确认删除"
          >
            <Input solid />
          </Form.Item>
          <Button
            htmlType="submit"
            className="confirm-delete-account"
            disabled={disabled}
            variant="light-danger"
          >
            删除组织
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

export default DeleteOrganizationModal;
