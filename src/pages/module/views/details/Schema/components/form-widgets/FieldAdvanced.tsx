import { Checkbox, Form, Input } from '@/metronic';
import type { Model, ModelField } from '@/types';

type FieldAdvancedProps = {
  data?: ModelField;
  model: Model;
  mode: 'new' | 'edit';
};

function FieldAdvanced(props: FieldAdvancedProps) {
  const { model, data, mode } = props;
  return (
    <div className="field-advanced">
      <div className="field-options__name text-dark fs-base fw-semibold">初始化</div>
      <div className="field-advanced__list d-flex flex-column">
        <Form.Item
          valuePropName="checked"
          name="required"
          help={<div style={{ marginLeft: 26 }}>使用此值预填充表单输入</div>}
        >
          <Checkbox solid label="设置初始值" />
        </Form.Item>
      </div>
      <div className="field-advanced">
        <div className="field-options__name text-dark fs-base fw-semibold">可见性</div>
        <div className="field-advanced__list d-flex flex-column">
          <Form.Item
            valuePropName="checked"
            name="required"
            help={<div style={{ marginLeft: 26 }}>使用此值预填充表单输入</div>}
          >
            <Checkbox solid label="设置初始值" />
          </Form.Item>
        </div>
      </div>
      <div className="field-advanced">
        <div className="field-options__name text-dark fs-base fw-semibold">数据库设置</div>
        <div className="field-advanced__list d-flex flex-column">
          <Form.Item
            className="mb-5"
            name="databaseColumnName"
            label="列名"
            help="映射到数据库中的列名"
            hasFeedback
            rules={[
              {
                pattern: /^([a-z])([a-z1-9])*(_([a-z1-9]+))*/i,
                message: '请遵循数据库命名规范',
              },
              {
                async validator(rule, value) {
                  const prevDatabaseColumnName = data?.metadata?.databaseColumnName?.toLowerCase();
                  if (!value) {
                    return;
                  }
                  if (value.toLowerCase() == prevDatabaseColumnName && mode == 'edit') {
                    return;
                  }
                  if (
                    model.fields.some(
                      (f) => f.metadata?.databaseColumnName?.toLowerCase() == value.toLowerCase(),
                    )
                  ) {
                    throw new Error(rule.message as string);
                  }
                },
                message: '名称不能重复',
              },
            ]}
          >
            <Input solid style={{ textTransform: 'uppercase' }} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default FieldAdvanced;
