import { useCallback, useEffect, useRef } from 'react';

import { Icon } from '@asany/icons';

import type { InputRef } from '@/metronic';
import { Form, Input, Modal } from '@/metronic';
import { useCreateMailboxMutation } from '@/pages/mail/hooks';

type CreateMailboxModalProps = {
  mode: 'create' | 'update';
  user: string;
  name?: string;
  namespace: string;
  visible: boolean;
  onClose: () => void;
};

function MailboxFolderModal(props: CreateMailboxModalProps) {
  const { onClose, visible, user, namespace, name, mode } = props;

  const [createMailbox] = useCreateMailboxMutation();

  const form = Form.useForm();

  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }
    form.setFieldsValue({ name });
    inputRef.current?.focus();
    process.nextTick(() => {
      inputRef.current?.select();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const handleOk = useCallback(async () => {
    const values = await form.validateFields();
    if (mode === 'create') {
      await createMailbox({
        variables: {
          name: values.name,
          namespace,
        },
      });
    }
    onClose();
  }, [form, mode, onClose, createMailbox, namespace]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal
      centered
      visible={visible}
      dialogClassName="modal-dialog-small w-400px"
      onCancel={handleClose}
      onOk={handleOk}
      header={false}
      closable={false}
      okButtonProps={{
        className: 'btn-xs',
      }}
      cancelButtonProps={{
        className: 'btn-xs',
      }}
    >
      <div className="modal-dialog-header d-flex">
        <div className="modal-dialog-icon">
          <Icon className="svg-icon-5x" name="Duotune/fil012" />
        </div>
        <div className="modal-dialog-instructions">
          <div className="modal-dialog-title">
            {mode === 'create' ? '新建文件夹' : '修改文件夹'}
          </div>
          <div className="modal-dialog-description">
            {mode === 'create' ? (
              <>为账号 &quot; {user} &quot; 创建顶层文件夹</>
            ) : (
              <>
                修改账号 &quot; {user} &quot; 中 {name} 文件夹的名称
              </>
            )}
          </div>
        </div>
      </div>
      <Form form={form} layout="horizontal" initialValues={{ name }} size="xs">
        <div className="d-flex last flex-row flex-center">
          <div className="d-flex flex-column-fluid">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '请输入名字',
                },
              ]}
              name="name"
              label="名称"
            >
              <Input ref={inputRef} />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Modal>
  );
}

export default MailboxFolderModal;
