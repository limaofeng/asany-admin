import { useCallback, useState } from 'react';

import classnames from 'classnames';
import { pinyin } from 'pinyin-pro';

import { Button, Form, Input, Modal, Toast } from '@/metronic';
import { SchemaDocument, useCreateModelMutation, useModelsLazyQuery } from '@/pages/module/hooks';
import { useAjaxValidator } from '@/metronic/hooks';
import type { Model, Module } from '@/types';

type CreateModelProps = {
  module: Module;
  visible: boolean;
  onClose: () => void;
  onSuccess: (model: Model) => void;
};

function CreateModel(props: CreateModelProps) {
  const { module, visible, onClose, onSuccess } = props;

  const [activeTabKey, setActiveTabKey] = useState('settings');

  const form = Form.useForm();
  const [loadModels] = useModelsLazyQuery();
  const [createModel, { loading }] = useCreateModelMutation({
    refetchQueries: [
      {
        query: SchemaDocument,
        variables: {
          module: module.id,
        },
      },
    ],
  });

  const nameUniqueValidator = useAjaxValidator(async (rule, value, signal) => {
    const { data: _rdata } = await loadModels({
      variables: {
        moduleId: module.id,
        filter: {
          name: value,
        },
      },
      fetchPolicy: 'network-only',
      context: {
        fetchOptions: {
          signal,
        },
      },
    });
    return !_rdata?.models.length;
  });
  const codeUniqueValidator = useAjaxValidator(async (rule, value, signal) => {
    const { data: _rdata } = await loadModels({
      variables: {
        moduleId: module.id,
        filter: {
          code: value,
        },
      },
      fetchPolicy: 'network-only',
      context: {
        fetchOptions: {
          signal,
        },
      },
    });
    return !_rdata?.models.length;
  });
  const dbNameUniqueValidator = useAjaxValidator(async (rule, value, signal) => {
    const { data: _rdata } = await loadModels({
      variables: {
        moduleId: module.id,
        filter: {
          databaseTableName: value,
        },
      },
      fetchPolicy: 'network-only',
      context: {
        fetchOptions: {
          signal,
        },
      },
    });
    return !_rdata?.models.length;
  });

  const handleChangeTabKey = useCallback(
    (key: string) => () => {
      setActiveTabKey(key);
    },
    [],
  );

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();
    if (!values.databaseTableName) {
      values.databaseTableName = values.code;
    }
    try {
      const { data: rdata } = await createModel({
        variables: {
          input: {
            ...values,
            code: values.code.charAt(0).toUpperCase() + values.code.substring(1),
            features: ['master', 'system-fields'],
            module: module.id,
          },
        },
      });
      Toast.success(`模型 “${values.name}” 新增成功`, 2000, {
        placement: 'bottom-end',
        progressBar: true,
      });
      onSuccess(rdata?.createModel as Model);
    } catch (e: any) {
      Toast.error(e.message, 2000, {
        placement: 'bottom-end',
        progressBar: true,
      });
    }
  }, [createModel, form, module.id, onSuccess]);

  const [codeLinkageable, setCodeLinkageable] = useState(true);
  const [dbColumnNameLinkageable, setDbColumnNameLinkageable] = useState(true);

  const handleValuesChange = useCallback(
    (changedValues: any) => {
      if (Object.hasOwn(changedValues, 'code')) {
        setCodeLinkageable(false);
      }
      if (Object.hasOwn(changedValues, 'databaseColumnName')) {
        setDbColumnNameLinkageable(false);
      }
      if (Object.hasOwn(changedValues, 'name') && codeLinkageable) {
        const pyCode = pinyin(changedValues.name, { toneType: 'none', type: 'array' }).join('');
        form.setFieldValue('code', pyCode);
        if (dbColumnNameLinkageable) {
          form.setFieldValue('databaseColumnName', pyCode.toUpperCase());
        }
      }
      if (Object.hasOwn(changedValues, 'code') && dbColumnNameLinkageable) {
        form.setFieldValue('databaseColumnName', changedValues.code.toUpperCase());
      }
    },
    [codeLinkageable, dbColumnNameLinkageable, form],
  );

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
        <h4>创建模型</h4>
      </Modal.Header>
      <Modal.Body>
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
              color={activeTabKey != 'advanced' && 'gray-700'}
              variant={activeTabKey == 'advanced' ? 'light-primary' : false}
              activeColor={activeTabKey == 'advanced' ? 'light-primary' : 'secondary'}
              className="me-4 px-5"
              onClick={handleChangeTabKey('advanced')}
            >
              高级
            </Button>
          </div>
          <div className={classnames('modal-tabpane', { 'd-none': activeTabKey != 'settings' })}>
            <Form.Item
              required={false}
              className="mb-5"
              name="name"
              hasFeedback
              label="显示名称"
              help="配置模型时显示的名称, 通常为中文"
              rules={[
                { required: true, message: '显示名称不能为空' },
                {
                  validator: nameUniqueValidator,
                  message: '编码重复',
                },
              ]}
            >
              <Input solid boxClassName="w-75" />
            </Form.Item>
            <Form.Item
              required={false}
              className="my-5"
              name="code"
              label="编码"
              hasFeedback
              help="用于通过 API 访问此模型的 ID, 不能为中文"
              rules={[
                { required: true, message: '编码不能为空' },
                {
                  pattern: /^([a-z])([a-z1-9])*(_([a-z1-9]+))*/i,
                  message: '请遵循 Java 命名规范',
                },
                {
                  validator: codeUniqueValidator,
                  message: '编码重复',
                },
              ]}
            >
              <Input style={{ textTransform: 'capitalize' }} solid boxClassName="w-75" />
            </Form.Item>
            <Form.Item
              className="mt-5"
              name="description"
              label="描述"
              help="为内容编辑者和 API 用户显示提示"
              requiredMark="optional"
            >
              <Input.TextArea className="w-75" solid autoSize={{ maxRows: 4, minRows: 2 }} />
            </Form.Item>
          </div>
          <div className={classnames('modal-tabpane', { 'd-none': activeTabKey != 'advanced' })}>
            <Form.Item
              className="mb-5"
              name="databaseTableName"
              label="表名"
              hasFeedback
              help="映射到数据库中的表名"
              rules={[
                {
                  pattern: /^([a-z])([a-z1-9])*(_([a-z1-9]+))*/i,
                  message: '请遵循数据库命名规范',
                },
                {
                  validator: dbNameUniqueValidator,
                  message: '数据库表名重复',
                },
              ]}
            >
              <Input solid boxClassName="w-75" />
            </Form.Item>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateModel;
