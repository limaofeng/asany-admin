import { useCallback, useState } from 'react';

import classnames from 'classnames';

import { Button, Form, Input, Modal, Toast } from '@/metronic';
import { useCreateModelMutation } from '@/pages/module/hooks';

type CreateModelProps = {
  visible: boolean;
  onClose: () => void;
};

function CreateModel(props: CreateModelProps) {
  const { visible, onClose } = props;

  const [activeTabKey, setActiveTabKey] = useState('settings');

  const form = Form.useForm();
  const [createModel, { loading }] = useCreateModelMutation();

  const handleChangeTabKey = useCallback(
    (key: string) => () => {
      setActiveTabKey(key);
    },
    [],
  );

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();
    if (!values.metadata.databaseTableName) {
      values.metadata.databaseTableName = values.code;
    }
    await createModel({
      variables: { input: { ...values, features: ['master', 'system-fields'] } },
    });
    Toast.success(`模型 “${values.name}” 新增成功`, 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });
  }, [createModel, form]);

  return (
    <Modal
      confirmLoading={loading}
      width={592}
      centered
      visible={visible}
      onCancel={onClose}
      onOk={handleSave}
    >
      <Modal.Header>
        <h4>创建模型</h4>
      </Modal.Header>
      <Modal.Body>
        <Form form={form}>
          <div className="mb-5">
            <Button
              color={activeTabKey != 'settings' && 'gray-700'}
              variant={activeTabKey == 'settings' ? 'light-primary' : false}
              activeColor={activeTabKey == 'settings' ? 'light-primary' : 'secondary'}
              className="me-4 px-5"
              onClick={handleChangeTabKey('settings')}
            >
              设置
            </Button>
            <Button
              color={activeTabKey != 'advanced' && 'gray-700'}
              variant={activeTabKey == 'advanced' ? 'light-primary' : false}
              activeColor={activeTabKey == 'advanced' ? 'light-primary' : 'secondary'}
              className="me-4 px-5"
              onClick={handleChangeTabKey('advanced')}
            >
              高级
            </Button>
          </div>
          <div className={classnames({ 'd-none': activeTabKey != 'settings' })}>
            <Form.Item
              required={false}
              className="mb-5"
              name="name"
              label="显示名称"
              help="配置模型时显示的名称, 通常为中文"
              rules={[{ required: true, message: '显示名称不能为空' }]}
            >
              <Input solid />
            </Form.Item>
            <Form.Item
              required={false}
              className="my-5"
              name="code"
              label="编码"
              help="用于通过 API 访问此模型的 ID, 不能为中文"
              rules={[{ required: true, message: '编码不能为空' }]}
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
          </div>
          <div className={classnames({ 'd-none': activeTabKey != 'advanced' })}>
            <Form.Item
              className="mb-5"
              name={['metadata', 'databaseTableName']}
              label="表名"
              help="映射到数据库中的表名"
            >
              <Input solid />
            </Form.Item>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateModel;
