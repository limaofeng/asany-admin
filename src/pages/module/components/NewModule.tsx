import { useCallback, useRef } from 'react';

import { useCreateModuleMutation, useModulesLazyQuery } from '../hooks';

import { Form, Input, Modal, Toast } from '@/metronic';
import type { Module } from '@/types';

type NewModuleProps = {
  visible: boolean;
  onClose: () => void;
  onSuccess: (data: Module) => void;
};

function NewModule(props: NewModuleProps) {
  const { visible, onClose, onSuccess } = props;

  const form = Form.useForm();
  const [loadModules] = useModulesLazyQuery();
  const [createModule, { loading }] = useCreateModuleMutation();

  const abortController = useRef(new AbortController());

  const domain = 'cn.asany';

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();
    const { data } = await createModule({
      variables: { input: { ...values, code: domain + '.' + values.code } },
    });
    Toast.success(`模块 “${values.name}” 新增成功`, 2000, {
      placement: 'bottom-end',
      progressBar: true,
    });
    onSuccess(data!.createModule as Module);
  }, [createModule, form, onSuccess]);

  return (
    <Modal
      confirmLoading={loading}
      maskClosable={!loading}
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
            rules={[{ required: true, message: '名称不能为空' }]}
          >
            <Input solid />
          </Form.Item>
          <Form.Item
            required={false}
            className="mb-5"
            name="code"
            label="编码"
            hasFeedback
            help="请参考编程中命名空间的写法"
            rules={[
              { required: true, message: '编码不能为空' },
              {
                async validator(rule, value) {
                  if (!value) {
                    return;
                  }
                  if (abortController.current) {
                    abortController.current.abort();
                  }
                  abortController.current = new AbortController();
                  const { data: _mdata } = await loadModules({
                    variables: {
                      filter: {
                        code: domain + '.' + value,
                      },
                      limit: 1,
                    },
                    fetchPolicy: 'network-only',
                    context: {
                      fetchOptions: {
                        signal: abortController.current.signal,
                      },
                    },
                  });
                  console.log('validator', rule, value, _mdata?.modules);
                  if (_mdata?.modules.length) {
                    throw new Error(rule.message as string);
                  }
                },
                message: '编码不能重复',
              },
            ]}
          >
            <Input
              solid
              addonBefore={domain + '.'}
              placeholder="例如: module.text"
            />
          </Form.Item>
          <Form.Item
            className="mt-5"
            name="description"
            label="描述"
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
