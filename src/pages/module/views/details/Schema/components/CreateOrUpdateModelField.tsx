import { useCallback, useEffect, useMemo, useState } from 'react';
import React from 'react';

import classnames from 'classnames';
import { Icon } from '@asany/icons';

import allFieldForms from './field-forms';

import { Dropdown, Form, Menu, Modal, Toast } from '@/metronic';
import {
  ModelDocument,
  useAddModelFieldMutation,
  useUpdateModelFieldMutation,
} from '@/pages/module/hooks';
import type { ModelField as IModelField, ModelFiledType as IModelFiledType, Model } from '@/types';
import type { SelectEvent } from '@/metronic/Menu/typings';

type FieldTypeSelectProps = {
  family: {
    key: string;
    name: string;
    filedTypes: IModelFiledType[];
  };
  fieldType: IModelFiledType;
  onChange: (fieldType: IModelFiledType) => void;
};

function FieldTypeSelect(props: FieldTypeSelectProps) {
  const { family, fieldType, onChange } = props;

  const handleSelect = useCallback(
    (e: SelectEvent) => {
      const newFiledType = family.filedTypes.find((ft) => ft.id == e.key);
      onChange(newFiledType!);
    },
    [family.filedTypes, onChange],
  );

  return (
    <div
      className={classnames('model-field-type-select', {
        only: family.filedTypes.length == 1,
      })}
    >
      <div className={classnames('model-field-type-icon', `model-field-type__${fieldType.id}`)}>
        <Icon name={`FieldType/${fieldType.id}`} />
      </div>
      {family.filedTypes.length > 1 && (
        <Dropdown
          offset={[-32, 0]}
          placement="bottomLeft"
          overlay={
            <Menu
              onSelect={handleSelect}
              dropdown
              rounded
              className="menu-title-gray-700 model-field-type-select__change_types menu-state-primary fw-semibold fs-base w-150px"
            >
              {family.filedTypes.map((ft) => (
                <Menu.Item
                  key={ft.id}
                  linkClassName={classnames({ active: ft.id === fieldType.id })}
                  icon={
                    <div
                      className={classnames('model-field-type-icon', `model-field-type__${ft.id}`)}
                    >
                      <Icon name={`FieldType/${ft.id}`} />
                    </div>
                  }
                >
                  {ft.name}
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <button type="button" className="model-field-type-change">
            <span className="baukasten-button-inner">
              <svg
                fill="currentcolor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                tabIndex={-1}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </span>
          </button>
        </Dropdown>
      )}
    </div>
  );
}

type CreateOrUpdateModelFieldModalProps = {
  mode: 'new' | 'edit';
  model: Model;
  data?: IModelField;
  fieldTypeFamilies: {
    key: string;
    name: string;
    filedTypes: IModelFiledType[];
  }[];
  fieldType?: IModelFiledType;
  visible: boolean;
  onClose: () => void;
};

function CreateOrUpdateModelFieldModal(props: CreateOrUpdateModelFieldModalProps) {
  const { mode, visible, model, onClose, fieldTypeFamilies, data: fieldData } = props;

  const form = Form.useForm();
  const [fieldType, setFieldType] = useState(props.fieldType);

  const [createField, { loading: creating }] = useAddModelFieldMutation({
    refetchQueries() {
      return [
        {
          query: ModelDocument,
          variables: {
            id: model.id,
          },
        },
      ];
    },
  });
  const [updateField, { loading: updating }] = useUpdateModelFieldMutation({
    refetchQueries() {
      return [
        {
          query: ModelDocument,
          variables: {
            id: model.id,
          },
        },
      ];
    },
  });

  const loading = useMemo(() => creating || updating, [creating, updating]);

  const handleClose = useCallback(() => {
    onClose();
    form.resetFields();
  }, [form, onClose]);

  const handleSave = useCallback(async () => {
    const {
      allowMultipleValues: list = false,
      required = false,
      unique = false,
      ...values
    } = await form.validateFields();
    if (values.databaseColumnName) {
      values.databaseColumnName = values.databaseColumnName.toUpperCase();
    }
    try {
      if (mode == 'new') {
        await createField({
          variables: {
            modelId: model.id,
            input: { ...values, required, list, unique, type: fieldType!.id },
          },
        });
        Toast.success(
          <>
            字段 “<b>{values.name}</b>” 新增成功
          </>,
          2000,
          {
            placement: 'bottom-end',
            progressBar: true,
          },
        );
      } else {
        console.log('update field:', {
          modelId: model.id,
          input: { ...values, required, list, unique, type: fieldType!.id },
        });
        await updateField({
          variables: {
            modelId: model.id,
            fieldId: fieldData?.id,
            input: { ...values, required, list, unique, type: fieldType!.id },
          },
        });
        Toast.success(
          <>
            字段 “<b>{values.name}</b>” 修改成功
          </>,
          2000,
          {
            placement: 'bottom-end',
            progressBar: true,
          },
        );
      }
      handleClose();
    } catch (e: any) {
      Toast.error(e.message, 2000, {
        placement: 'bottom-end',
        progressBar: true,
      });
    }
  }, [createField, fieldType, form, handleClose, mode, model.id, fieldData?.id, updateField]);

  useEffect(() => {
    setFieldType(props.fieldType);
  }, [props.fieldType]);

  useEffect(() => {
    fieldData &&
      form.setFieldsValue({
        ...fieldData,
        databaseColumnName: fieldData.metadata?.databaseColumnName,
      });
  }, [form, fieldData]);

  return (
    <Modal
      confirmLoading={loading}
      width={592}
      centered
      maskClosable={!loading}
      visible={visible}
      onCancel={handleClose}
      onOk={handleSave}
      closable={false}
      dialogClassName="model-field-modal"
    >
      <Modal.Header>
        {fieldType && (
          <div className="d-flex flex-row align-items-center flex-row-fluid">
            <FieldTypeSelect
              fieldType={fieldType}
              onChange={setFieldType}
              family={fieldTypeFamilies.find((item) => item.key == fieldType.family)!}
            />
            <h4 className="flex-row-fluid">{mode === 'edit' ? fieldData?.name : '创建字段'}</h4>
            <span className="field-type-name">{fieldType.name}</span>
          </div>
        )}
      </Modal.Header>
      <Modal.Body>
        {!!fieldType?.family &&
          React.createElement(allFieldForms[fieldType.family], {
            form,
            mode,
            model,
            data: fieldData,
          })}
      </Modal.Body>
    </Modal>
  );
}

export default CreateOrUpdateModelFieldModal;
