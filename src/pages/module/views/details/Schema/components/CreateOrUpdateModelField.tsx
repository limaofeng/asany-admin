import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import classnames from 'classnames';
import { Icon } from '@asany/icons';

import allFieldForms from './field-forms';

import { Dropdown, Form, Menu, Modal, Toast } from '@/metronic';
import { useCreateModelMutation } from '@/pages/module/hooks';
import type { ModelFiledType as IModelFiledType } from '@/types';
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
  const { visible, onClose, fieldTypeFamilies } = props;

  const form = Form.useForm();
  const [createModel, { loading }] = useCreateModelMutation();

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();
    if (!values.metadata.databaseTableName) {
      values.metadata.databaseTableName = values.code;
    }
    await createModel({
      variables: { input: { ...values, features: ['master', 'system-fields'] } },
    });
    Toast.success(`模型 “${values.name}” 新增成功`, 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });
  }, [createModel, form]);

  const [fieldType, setFieldType] = useState(props.fieldType);

  useEffect(() => {
    setFieldType(props.fieldType);
  }, [props.fieldType]);

  return (
    <Modal
      confirmLoading={loading}
      width={592}
      centered
      visible={visible}
      onCancel={onClose}
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
            <h4 className="flex-row-fluid">创建字段</h4>
            <span className="field-type-name">{fieldType.name}</span>
          </div>
        )}
      </Modal.Header>
      <Modal.Body>
        {!!fieldType?.family && React.createElement(allFieldForms[fieldType.family], { form })}
      </Modal.Body>
    </Modal>
  );
}

export default CreateOrUpdateModelFieldModal;
