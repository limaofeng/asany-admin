import { useCallback, useState } from 'react';

import classnames from 'classnames';

import { Button, Checkbox, Form } from '@/metronic';
import type { FormInstance } from '@/metronic/typings';
import type { Model, ModelField } from '@/types';

import FieldAdvanced from '../form-widgets/FieldAdvanced';
import FieldOptions from '../form-widgets/FieldOptions';
import General from '../form-widgets/General';
import useValuesChange from '../hooks/useValuesChange';

type FloatFieldFormProps = {
  data?: ModelField;
  model: Model;
  form: FormInstance<any>;
  mode: 'new' | 'edit';
};

function FloatFieldForm(props: FloatFieldFormProps) {
  const { form, model, mode, data } = props;

  const [activeTabKey, setActiveTabKey] = useState('settings');

  const handleChangeTabKey = useCallback(
    (key: string) => () => {
      setActiveTabKey(key);
    },
    [],
  );

  const handleValuesChange = useValuesChange(form, mode);

  return (
    <Form form={form} onValuesChange={handleValuesChange}>
      <div className="mb-5">
        <Button
          color={activeTabKey !== 'settings' && 'gray-700'}
          variant={activeTabKey === 'settings' ? 'light-primary' : false}
          activeColor={
            activeTabKey === 'settings' ? 'light-primary' : 'secondary'
          }
          className="me-4 px-5"
          onClick={handleChangeTabKey('settings')}
        >
          设置
        </Button>
        <Button
          color={activeTabKey !== 'validations' && 'gray-700'}
          variant={activeTabKey === 'validations' ? 'light-primary' : false}
          activeColor={
            activeTabKey === 'validations' ? 'light-primary' : 'secondary'
          }
          className="me-4 px-5"
          onClick={handleChangeTabKey('validations')}
        >
          验证
        </Button>
        <Button
          color={activeTabKey !== 'advanced' && 'gray-700'}
          variant={activeTabKey === 'advanced' ? 'light-primary' : false}
          activeColor={
            activeTabKey === 'advanced' ? 'light-primary' : 'secondary'
          }
          className="me-4 px-5"
          onClick={handleChangeTabKey('advanced')}
        >
          高级
        </Button>
      </div>
      <div
        className={classnames('modal-tabpane d-flex flex-column gap-6', {
          'd-none': activeTabKey !== 'settings',
        })}
      >
        <General model={model} mode={mode} data={data} />
        <FieldOptions isTitle={false} model={model} mode={mode} data={data} />
      </div>
      <div
        className={classnames('modal-tabpane', {
          'd-none': activeTabKey !== 'validations',
        })}
      >
        <div className="field-validations">
          <div className="field-validations__list d-flex flex-column">
            <Form.Item
              valuePropName="checked"
              name="required"
              help={
                <div style={{ marginLeft: 26 }}>
                  如果此字段为空，则阻止保存条目
                </div>
              }
            >
              <Checkbox solid label="字段为必填项" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="unique"
              help={
                <div style={{ marginLeft: 26 }}>
                  该字段的多个条目不能具有相同的值
                </div>
              }
            >
              <Checkbox solid label="将字段设置为唯一" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="limitCharacterCount"
              help={
                <div style={{ marginLeft: 26 }}>
                  指定最小和/或最大允许的字符数
                </div>
              }
            >
              <Checkbox solid label="限制字符数" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="pattern"
              help={
                <div style={{ marginLeft: 26 }}>
                  仅接受指定的正则表达式（例如电子邮件、URL）
                </div>
              }
            >
              <Checkbox solid label="匹配特定模式" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="restrictPattern"
              help={
                <div style={{ marginLeft: 26 }}>不接受指定的正则表达式</div>
              }
            >
              <Checkbox solid label="匹配特定模式" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div
        className={classnames('modal-tabpane  d-flex flex-column gap-6', {
          'd-none': activeTabKey !== 'advanced',
        })}
      >
        <FieldAdvanced model={model} mode={mode} data={data} />
      </div>
    </Form>
  );
}

export default FloatFieldForm;
