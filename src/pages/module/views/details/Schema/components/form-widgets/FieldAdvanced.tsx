import { Checkbox, Form, Input } from '@/metronic';
import type { Model } from '@/types';

type FieldAdvancedProps = {
  model: Model;
};

function FieldAdvanced(props: FieldAdvancedProps) {
  const { model } = props;
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
            name={['databaseColumnName']}
            label="列名"
            help="映射到数据库中的列名"
            rules={[
              {
                pattern: /^([a-z])([a-z1-9])*(_([a-z1-9]+))*/i,
                message: '请遵循数据库命名规范',
              },
              {
                async validator(rule, value) {
                  if (!value) {
                    return;
                  }
                  // if (_code == module.code) {
                  //   return;
                  // }
                  if (model.fields.some((f) => f.name == value)) {
                    throw new Error(rule.message as string);
                  }
                },
                message: '名称不能重复',
              },
            ]}
          >
            <Input solid />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default FieldAdvanced;
