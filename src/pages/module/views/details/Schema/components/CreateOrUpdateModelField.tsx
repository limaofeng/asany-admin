import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import classnames from 'classnames';
import { Icon } from '@asany/icons';

import allFieldForms from './field-forms';

import { Dropdown, Form, Menu, Modal, Toast } from '@/metronic';
import { ModelDocument, useAddModelFieldMutation } from '@/pages/module/hooks';
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
  const { mode, visible, model, onClose, fieldTypeFamilies } = props;

  const form = Form.useForm();
  const [createField, { loading }] = useAddModelFieldMutation({
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

  const handleSave = useCallback(async () => {
    const {
      allowMultipleValues: list = false,
      required = false,
      unique = false,
      ...values
    } = await form.validateFields();
    if (!values.metadata.databaseColumnName) {
      values.metadata.databaseColumnName = values.code;
    }
    console.log('xxx', model.id, { ...values, required, list, unique });
    if (mode == 'new') {
      await createField({
        variables: { modelId: model.id, input: { ...values } },
      });
      Toast.success(`字段 “${values.name}” 新增成功`, 2000, {
        placement: 'bottom-end',
        progressBar: true,
      });
    } else {
    }
  }, [createField, form, mode, model.id]);

  const [fieldType, setFieldType] = useState(props.fieldType);

  useEffect(() => {
    setFieldType(props.fieldType);
  }, [props.fieldType]);

  useEffect(() => {
    if (props.data) {
      form.setFieldsValue({ ...props.data });
    } else {
      form.resetFields();
    }
  }, [form, props.data]);

  const handleClose = useCallback(() => {
    onClose();
    form.resetFields();
  }, [form, onClose]);

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
            <h4 className="flex-row-fluid">{mode === 'edit' ? props.data?.name : '创建字段'}</h4>
            <span className="field-type-name">{fieldType.name}</span>
          </div>
        )}
      </Modal.Header>
      <Modal.Body>
        {!!fieldType?.family &&
          React.createElement(allFieldForms[fieldType.family], { form, mode })}
      </Modal.Body>
    </Modal>
  );
}

export default CreateOrUpdateModelFieldModal;
