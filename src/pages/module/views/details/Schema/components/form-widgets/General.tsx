import { Form, Input } from '@/metronic';
import type { Model, ModelField } from '@/types';

type GeneralProps = {
  data?: ModelField;
  model: Model;
  mode: 'new' | 'edit';
};

function General(props: GeneralProps) {
  const { model, data, mode } = props;

  return (
    <>
      <Form.Item
        required={false}
        name="name"
        label="显示名称"
        hasFeedback
        help="配置模型时显示的名称, 通常为中文"
        rules={[
          { required: true, message: '显示名称不能为空' },
          {
            async validator(rule, value) {
              if (!value) {
                return;
              }
              if (value == data?.name && mode == 'edit') {
                return;
              }
              if (model.fields.some((f) => f.name == value)) {
                throw new Error(rule.message as string);
              }
            },
            message: '名称不能重复',
          },
        ]}
      >
        <Input solid boxClassName="w-75" />
      </Form.Item>
      <Form.Item
        required={false}
        name="code"
        label="编码"
        help="用于通过 API 访问此模型的 ID, 不能为中文"
        hasFeedback
        rules={[
          { required: true, message: '编码不能为空' },
          {
            pattern: /^([a-z])([a-z1-9])*(_([a-z1-9]+))*/i,
            message: '请遵循 Java 命名规范',
          },
          {
            async validator(rule, value) {
              if (!value) {
                return;
              }
              if (value == data?.code && mode == 'edit') {
                return;
              }
              if (model.fields.some((f) => f.code == value)) {
                throw new Error(rule.message as string);
              }
            },
            message: '编码不能重复',
          },
        ]}
      >
        <Input solid boxClassName="w-75" />
      </Form.Item>
      <Form.Item
        name="description"
        label="描述"
        help="为内容编辑者和 API 用户显示提示"
        requiredMark="optional"
      >
        <Input.TextArea solid className="w-75" autoSize={{ maxRows: 4, minRows: 2 }} />
      </Form.Item>
    </>
  );
}

export default General;
