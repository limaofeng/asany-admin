import { useCallback } from 'react';

import { Form, Input, Modal, Toast } from '@/metronic';

type NewModuleProps = {
  visible: boolean;
  onClose: () => void;
};

function NewModule(props: NewModuleProps) {
  const { visible, onClose } = props;

  const form = Form.useForm();
  // const [NewModule, { loading }] = useNewModuleMutation();

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();
    // await NewModule({
    //   variables: { input: { ...values, features: ['master', 'system-fields'] } },
    // });
    Toast.success(`模型 “${values.name}” 新增成功`, 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });
  }, [form]);

  return (
    <Modal
      confirmLoading={false}
      width={592}
      centered
      visible={visible}
      closable={false}
      onCancel={onClose}
      onOk={handleSave}
    >
      <Modal.Header>
        <h4>新模块</h4>
      </Modal.Header>
      <Modal.Body>
        <Form form={form}>
          <Form.Item
            required={false}
            className="mb-5"
            name="name"
            label="名称"
            help="配置模型时显示的名称, 通常为中文"
            rules={[{ required: true, message: '显示名称不能为空' }]}
          >
            <Input solid />
          </Form.Item>
          <Form.Item
            className="mt-5"
            name="description"
            label="描述"
            help="为内容编辑者和 API 用户显示提示"
            requiredMark="optional"
          >
            <Input.TextArea solid autoSize={{ maxRows: 4, minRows: 2 }} />
          </Form.Item>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NewModule;
