import { useCallback, useEffect, useMemo, useState } from 'react';

import classnames from 'classnames';
import { pinyin } from 'pinyin-pro';

import { Button, Form, Input, Modal, Toast } from '@/metronic';
import { useAjaxValidator } from '@/metronic/hooks';
import {
  ModelDocument,
  SchemaDocument,
  useCreateModelMutation,
  useModelsLazyQuery,
  useUpdateModelMutation,
} from '@/pages/module/hooks';
import type { Model, Module } from '@/types';

type ModelModalProps = {
  module: Module;
  visible: boolean;
  data?: Model;
  onClose: () => void;
  onSuccess: (model: Model) => void;
};

function ModelModal(props: ModelModalProps) {
  const { module, visible, onClose, data, onSuccess } = props;

  const [activeTabKey, setActiveTabKey] = useState('settings');

  const form = Form.useForm();
  const [loadModelsByName] = useModelsLazyQuery();
  const [loadModelsByCode] = useModelsLazyQuery();
  const [loadModelsByDbName] = useModelsLazyQuery();
  const [createModel, { loading: creating }] = useCreateModelMutation({
    refetchQueries: [
      {
        query: SchemaDocument,
        variables: {
          module: module.id,
        },
      },
    ],
  });
  const [updateModel, { loading: updating }] = useUpdateModelMutation({
    refetchQueries: [
      {
        query: SchemaDocument,
        variables: {
          module: module.id,
        },
      },
      {
        query: ModelDocument,
        variables: {
          id: data?.id,
        },
      },
    ],
  });

  const loading = useMemo(() => creating || updating, [creating, updating]);

  const codePrefix = useMemo(() => {
    return (module.code || '')
      .split('.')
      .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
      .join('');
  }, [module]);

  const tablePrefix = useMemo(() => {
    return (module.code || '').replaceAll('.', '_').toUpperCase() + '_';
  }, [module]);

  const nameUniqueValidator = useAjaxValidator(async (rule, value, signal) => {
    if (data && value == data.name) {
      return true;
    }
    const { data: _rdata } = await loadModelsByName({
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
    if (!value) {
      return true;
    }
    const code =
      codePrefix + value.charAt(0).toUpperCase() + value.substring(1);
    if (data && code == data.code) {
      return true;
    }
    const { data: _rdata } = await loadModelsByCode({
      variables: {
        moduleId: module.id,
        filter: {
          code,
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
  const dbNameUniqueValidator = useAjaxValidator(
    async (rule, value, signal) => {
      const databaseTableName = tablePrefix + (value || '').toUpperCase();
      if (data && databaseTableName == data.metadata?.databaseTableName) {
        return true;
      }
      const { data: _rdata } = await loadModelsByDbName({
        variables: {
          moduleId: module.id,
          filter: {
            databaseTableName,
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
    },
  );

  const handleChangeTabKey = useCallback(
    (key: string) => () => {
      setActiveTabKey(key);
    },
    [],
  );

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();

    const databaseTableName =
      tablePrefix + (values.databaseTableName || values.code).toUpperCase();
    const code =
      codePrefix +
      values.code.charAt(0).toUpperCase() +
      values.code.substring(1);

    try {
      if (!data) {
        const { data: rdata } = await createModel({
          variables: {
            input: {
              ...values,
              databaseTableName,
              code,
              features: ['master', 'system-fields'],
              module: module.id,
            },
          },
        });
        Toast.success(`实体 “${values.name}” 新增成功`, 2000, {
          placement: 'bottom-end',
          progressBar: true,
        });
        onSuccess(rdata?.createModel as Model);
      } else {
        const { data: rdata } = await updateModel({
          variables: {
            id: data.id,
            input: {
              ...values,
              databaseTableName,
              code,
              features: ['master', 'system-fields'],
            },
          },
        });
        Toast.success(`实体 “${values.name}” 更新成功`, 2000, {
          placement: 'bottom-end',
          progressBar: true,
        });
        onSuccess(rdata?.updateModel as Model);
      }
    } catch (e: any) {
      Toast.error(e.message, 2000, {
        placement: 'bottom-end',
        progressBar: true,
      });
    }
  }, [
    codePrefix,
    createModel,
    data,
    form,
    module.id,
    onSuccess,
    tablePrefix,
    updateModel,
  ]);

  const [codeLinkageable, setCodeLinkageable] = useState(true);
  const [databaseTableNameLinkageable, setDatabaseTableNameLinkageable] =
    useState(true);

  const handleValuesChange = useCallback(
    (changedValues: any) => {
      if (Object.hasOwn(changedValues, 'code')) {
        setCodeLinkageable(false);
      }
      if (Object.hasOwn(changedValues, 'databaseTableName')) {
        setDatabaseTableNameLinkageable(false);
      }
      if (Object.hasOwn(changedValues, 'name') && codeLinkageable) {
        const pyCode = pinyin(changedValues.name, {
          toneType: 'none',
          type: 'array',
        }).join('');
        form.setFieldValue('code', pyCode);
        if (databaseTableNameLinkageable) {
          form.setFieldValue('databaseTableName', pyCode.toUpperCase());
        }
      }
      if (
        Object.hasOwn(changedValues, 'code') &&
        databaseTableNameLinkageable
      ) {
        form.setFieldValue(
          'databaseTableName',
          changedValues.code.toUpperCase(),
        );
      }
    },
    [codeLinkageable, databaseTableNameLinkageable, form],
  );

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        ...data,
        code: data.code.substring(codePrefix.length),
        databaseTableName: data.metadata?.databaseTableName?.substring(
          tablePrefix.length,
        ),
      });
    }
  }, [codePrefix, data, form, tablePrefix.length]);

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
        <h4>{data ? '编辑实体' : '新增实体'}</h4>
      </Modal.Header>
      <Modal.Body>
        <Form
          form={form}
          onValuesChange={!data ? handleValuesChange : undefined}
        >
          <div className="mb-5">
            <Button
              color={activeTabKey != 'settings' && 'gray-700'}
              variant={activeTabKey == 'settings' ? 'light-primary' : false}
              activeColor={
                activeTabKey == 'settings' ? 'light-primary' : 'secondary'
              }
              className="me-4 px-5"
              onClick={handleChangeTabKey('settings')}
            >
              设置
            </Button>
            <Button
              color={activeTabKey != 'advanced' && 'gray-700'}
              variant={activeTabKey == 'advanced' ? 'light-primary' : false}
              activeColor={
                activeTabKey == 'advanced' ? 'light-primary' : 'secondary'
              }
              className="me-4 px-5"
              onClick={handleChangeTabKey('advanced')}
            >
              高级
            </Button>
          </div>
          <div
            className={classnames('modal-tabpane', {
              'd-none': activeTabKey != 'settings',
            })}
          >
            <Form.Item
              required={false}
              className="mb-5"
              name="name"
              hasFeedback
              label="显示名称"
              help="配置实体时显示的名称, 通常为中文"
              rules={[
                { required: true, message: '显示名称不能为空' },
                {
                  validator: nameUniqueValidator,
                  message: '名称重复',
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
              help="用于通过 API 访问此实体的 ID, 不能为中文"
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
              <Input
                addonBefore={codePrefix}
                style={{ textTransform: 'capitalize' }}
                solid
                boxClassName="w-75"
              />
            </Form.Item>
            <Form.Item
              className="mt-5"
              name="description"
              label="描述"
              help="为内容编辑者和 API 用户显示提示"
              requiredMark="optional"
            >
              <Input.TextArea
                className="w-75"
                solid
                autoSize={{ maxRows: 4, minRows: 2 }}
              />
            </Form.Item>
          </div>
          <div
            className={classnames('modal-tabpane', {
              'd-none': activeTabKey != 'advanced',
            })}
          >
            <Form.Item
              className="mb-5"
              name="databaseTableName"
              label="表名"
              hasFeedback
              help="映射到数据库中的表名"
              rules={[
                {
                  pattern: /(^_([A-Z0-9]_?)*$)|(^[A-Z](_?[A-Z0-9])*_?$)/i,
                  message: '请遵循数据库命名规范',
                },
                {
                  validator: dbNameUniqueValidator,
                  message: '数据库表名重复',
                },
              ]}
            >
              <Input
                solid
                addonBefore={tablePrefix}
                boxClassName="w-75"
                className="text-uppercase"
              />
            </Form.Item>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModelModal;
