import classnames from 'classnames';

import { Checkbox, Form } from '@/metronic';

type FieldOptionsProps = {
  mode: 'new' | 'edit';
};

function FieldOptions(props: FieldOptionsProps) {
  const { mode } = props;
  return (
    <div className="field-options">
      <div className="field-options__name text-dark fs-base fw-semibold">字段选项</div>
      <div className="field-options__list d-flex flex-column">
        {/* <Form.Item
      valuePropName="checked"
      name="useTitleField"
      help={<div style={{ marginLeft: 26 }}>在关系中显示此字段的值而不是 ID</div>}
    >
      <Checkbox solid label="用作标题字段" />
    </Form.Item> */}
        <Form.Item
          valuePropName="checked"
          name="allowMultipleValues"
          className={classnames({ 'form-item__disabled': mode == 'edit' })}
          help={<div style={{ marginLeft: 26 }}>存储值列表而不是单个值</div>}
        >
          <Checkbox disabled={mode == 'edit'} solid label="允许多个值" />
        </Form.Item>
      </div>
    </div>
  );
}

export default FieldOptions;
