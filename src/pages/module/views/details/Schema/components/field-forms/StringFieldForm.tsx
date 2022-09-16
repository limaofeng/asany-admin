import { useCallback, useState } from 'react';

import { pinyin } from 'pinyin-pro';
import classnames from 'classnames';

import { Button, Checkbox, Form, Input } from '@/metronic';
import type { FormInstance } from '@/metronic/typings';

type StringFieldFormProps = {
  form: FormInstance<any>;
  mode: 'new' | 'edit';
};

function StringFieldForm(props: StringFieldFormProps) {
  const { form, mode } = props;

  const [activeTabKey, setActiveTabKey] = useState('settings');

  const handleChangeTabKey = useCallback(
    (key: string) => () => {
      setActiveTabKey(key);
    },
    [],
  );

  const [codeLinkageable, setCodeLinkageable] = useState(true);
  const [dbColumnNameLinkageable, setDbColumnNameLinkageable] = useState(true);

  const handleValuesChange = useCallback(
    (changedValues: any) => {
      if (Object.hasOwn(changedValues, 'name') && codeLinkageable) {
        const pyCode = pinyin(changedValues.name, { toneType: 'none', type: 'array' }).join('');
        form.setFieldValue('code', pyCode);
        if (dbColumnNameLinkageable) {
          form.setFieldValue(['metadata', 'databaseColumnName'], pyCode.toLowerCase());
        }
      }
      if (Object.hasOwn(changedValues, 'code') && dbColumnNameLinkageable) {
        form.setFieldValue(['metadata', 'databaseColumnName'], changedValues.code.toLowerCase());
      }
    },
    [codeLinkageable, dbColumnNameLinkageable, form],
  );

  const handleStopCodeLinkage = useCallback(() => {
    setCodeLinkageable(false);
  }, []);

  const handleStopDbColumnNameLinkageable = useCallback(() => {
    setDbColumnNameLinkageable(false);
  }, []);

  return (
    <Form form={form} onValuesChange={handleValuesChange}>
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
          color={activeTabKey != 'validations' && 'gray-700'}
          variant={activeTabKey == 'validations' ? 'light-primary' : false}
          activeColor={activeTabKey == 'validations' ? 'light-primary' : 'secondary'}
          className="me-4 px-5"
          onClick={handleChangeTabKey('validations')}
        >
          验证
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
      <div
        className={classnames('modal-tabpane d-flex flex-column gap-6', {
          'd-none': activeTabKey != 'settings',
        })}
      >
        <Form.Item
          required={false}
          name="name"
          label="显示名称"
          help="配置模型时显示的名称, 通常为中文"
          rules={[{ required: true, message: '显示名称不能为空' }]}
        >
          <Input solid />
        </Form.Item>
        <Form.Item
          required={false}
          name="code"
          label="编码"
          help="用于通过 API 访问此模型的 ID, 不能为中文"
          rules={[
            { required: true, message: '编码不能为空' },
            {
              pattern: /^([a-z])([a-z1-9])*(_([a-z1-9]+))*/,
              message: '请遵循 Java 命名规范',
            },
          ]}
        >
          <Input solid onChange={handleStopCodeLinkage} />
        </Form.Item>
        <Form.Item
          name="description"
          label="描述"
          help="为内容编辑者和 API 用户显示提示"
          requiredMark="optional"
        >
          <Input.TextArea solid autoSize={{ maxRows: 4, minRows: 2 }} />
        </Form.Item>
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
      </div>
      <div className={classnames('modal-tabpane', { 'd-none': activeTabKey != 'validations' })}>
        <div className="field-validations">
          <div className="field-validations__list d-flex flex-column">
            <Form.Item
              valuePropName="checked"
              name="required"
              help={<div style={{ marginLeft: 26 }}>如果此字段为空，则阻止保存条目</div>}
            >
              <Checkbox solid label="字段为必填项" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="unique"
              help={<div style={{ marginLeft: 26 }}>该字段的多个条目不能具有相同的值</div>}
            >
              <Checkbox solid label="将字段设置为唯一" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="limitCharacterCount"
              help={<div style={{ marginLeft: 26 }}>指定最小和/或最大允许的字符数</div>}
            >
              <Checkbox solid label="限制字符数" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="pattern"
              help={
                <div style={{ marginLeft: 26 }}>仅接受指定的正则表达式（例如电子邮件、URL）</div>
              }
            >
              <Checkbox solid label="匹配特定模式" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="restrictPattern"
              help={<div style={{ marginLeft: 26 }}>不接受指定的正则表达式</div>}
            >
              <Checkbox solid label="匹配特定模式" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className={classnames('modal-tabpane', { 'd-none': activeTabKey != 'advanced' })}>
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
                name={['metadata', 'databaseColumnName']}
                label="列名"
                help="映射到数据库中的列名"
                rules={[
                  {
                    pattern: /^([a-z])([a-z1-9])*(_([a-z1-9]+))*/,
                    message: '请遵循数据库命名规范',
                  },
                ]}
              >
                <Input onChange={handleStopDbColumnNameLinkageable} solid />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default StringFieldForm;
