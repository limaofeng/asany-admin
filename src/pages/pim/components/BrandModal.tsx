import { useCallback, useEffect, useState } from 'react';

import { Form, Input, Modal } from '@/metronic';
import { FormInstance } from '@/metronic/typings';
import { Brand } from '@/types';

import { useCreateBrandMutation, useUpdateBrandMutation } from '../hooks';

type ModalFormProps = {
  form: FormInstance<any>;
  mode: 'create' | 'edit';
};

function ModalForm(props: ModalFormProps) {
  const { form, mode } = props;
  return (
    <Form form={form}>
      <Form.Item
        className="d-flex flex-column mb-7"
        name="id"
        label="编码"
        rules={[{ required: true }]}
      >
        <Input solid readOnly={mode === 'edit'} />
      </Form.Item>
      <Form.Item
        className="d-flex flex-column mb-7"
        name="name"
        label="名称"
        rules={[{ required: true }]}
      >
        <Input solid />
      </Form.Item>
      <Form.Item
        className="d-flex flex-column mb-7"
        name="description"
        label="描述"
      >
        <Input.TextArea solid />
      </Form.Item>
    </Form>
  );
}

type BrandModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  data?: Brand;
  refetch: () => void;
};

export const BrandModal = (props: BrandModalProps) => {
  const [submitting, setSubmitting] = useState(false);

  const { visible, data, refetch } = props;

  const [createBrand] = useCreateBrandMutation();
  const [updateBrand] = useUpdateBrandMutation();

  const form = Form.useForm();

  const handleCancel = useCallback(() => {
    props.setVisible(false);
  }, []);

  const handleSave = useCallback(async () => {
    const { id, ...values } = await form.validateFields();
    setSubmitting(true);
    try {
      if (data?.id) {
        await updateBrand({
          variables: {
            id,
            input: values,
          },
        });
      } else {
        await createBrand({
          variables: {
            input: { id, ...values },
          },
        });
      }
      props.setVisible(false);
    } finally {
      setSubmitting(false);
      refetch();
    }
  }, [refetch, data]);

  useEffect(() => {
    if (!visible) {
      form.resetFields();
    } else if (data) {
      form.setFieldsValue({
        id: data.id,
        name: data.name,
        description: data.description,
      });
    }
  }, [visible, data]);

  return (
    <Modal
      width={640}
      centered
      onOk={handleSave}
      confirmLoading={submitting}
      okText="保存"
      visible={visible}
      onCancel={handleCancel}
    >
      <Modal.Header closable className="ms-5 border-0">
        <h1 className="modal-title pt-6 pb-4">添加品牌</h1>
      </Modal.Header>
      <Modal.Body>
        <ModalForm form={form} mode={data?.id ? 'edit' : 'create'} />
      </Modal.Body>
    </Modal>
  );
};
