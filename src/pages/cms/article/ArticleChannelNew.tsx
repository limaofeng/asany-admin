import { useCallback, useEffect, useState } from 'react';

import { useArticleChannelAllQuery, useCreateArticleChannelMutation } from '../hooks';

import type { ClickCallback, FormInstance } from '@/pages/Metronic/components';
import { Form, Input, Modal, Select, Upload } from '@/pages/Metronic/components';
import { delay } from '@/utils';

const { UploadAvatar } = Upload;

type ArticleChannelNewProps = {
  form: FormInstance;
};

function ArticleChannelNew({ form }: ArticleChannelNewProps) {
  const { data = { channels: [] }, loading } = useArticleChannelAllQuery();

  const { channels } = data;

  console.log(channels, loading);

  return (
    <Form form={form}>
      <div className="row mb-10">
        <div className="col-md-8">
          <Form.Item name="parent" className="d-flex flex-column mb-7" label="所属栏目">
            <Select
              solid
              options={[
                {
                  value: 'root',
                  label: '根栏目',
                },
                ...channels.map((item) => ({ value: item.id, label: item.fullName })),
              ]}
            />
          </Form.Item>
          <Form.Item
            name="name"
            className="d-flex flex-column mb-7"
            label="名称"
            rules={[{ required: true, message: '名称不能为空' }]}
          >
            <Input solid />
          </Form.Item>
          <Form.Item name="slug" className="d-flex flex-column mb-7" label="编码">
            <Input solid />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item name="cover" className="d-flex flex-column mb-7" label="栏目封面">
            <UploadAvatar width={180} height={180} />
          </Form.Item>
        </div>
      </div>
      <Form.Item name="description" className="d-flex flex-column mb-7" label="描述" required>
        <Input.TextArea solid />
      </Form.Item>
    </Form>
  );
}

type NewArticleChannelModalProps = {
  data?: any;
  visible?: boolean;
  onCancel?: ClickCallback;
  onSuccess?: () => void;
};

export const NewArticleChannelModal = (props: NewArticleChannelModalProps) => {
  const { data, visible, onCancel, onSuccess } = props;

  const form = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [createArticleChannel] = useCreateArticleChannelMutation({
    fetchPolicy: 'no-cache',
  });

  const handleSubmit = useCallback(async () => {
    setConfirmLoading(true);
    try {
      const input = await form.validateFields();
      await delay(createArticleChannel({ variables: { input } }), 350);
      setConfirmLoading(false);
      onCancel && onCancel(new Event('look', { bubbles: true, cancelable: false }) as any);
      Modal.success({
        title: '保存成功',
        content: `栏目 <strong>${input.name}</strong> 保存成功`,
        timer: 2000,
        timerProgressBar: true,
      });
      onSuccess && onSuccess();
    } catch (e) {
      setConfirmLoading(false);
    }
  }, [createArticleChannel, onSuccess, onCancel, form]);

  useEffect(() => {
    if (!data) {
      return;
    }
    form.setFieldsValue(data);
  }, [data, form]);

  return (
    <Modal
      centered
      maskClosable={false}
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      confirmLoading={confirmLoading}
      dialogClassName="mw-650px"
      title="创建栏目"
    >
      <ArticleChannelNew form={form} />
    </Modal>
  );
};
