import { useCallback, useMemo, useRef, useState } from 'react';
import React from 'react';

import type { ISortableItem, SortableChangeEvent } from '@asany/sortable';
import { dragPreview } from '@asany/sortable';
import Sortable from '@asany/sortable';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classnames from 'classnames';

import {
  ModelDocument,
  useModelFiledTypesQuery,
  useRemoveModelFieldMutation,
} from '../../../../hooks';

import ModelField from './ModelField';
import ModelFieldType, { ModelFieldTypeGroup } from './ModelFieldType';
import CreateOrUpdateModelField from './CreateOrUpdateModelField';
import NoFields from './NoFields';

import { Modal, Switch, Toast } from '@/metronic';
import type { ModelField as IModelField, ModelFiledType as IModelFiledType, Model } from '@/types';
import { delay } from '@/utils';

type ModelFieldsManagementProps = {
  model: Model;
};

const group_keys = [
  'STRING',
  'TEXT',
  'INTEGER',
  'FLOAT',
  'BOOLEAN',
  'DATE',
  'DATE_TIME',
  'JSON',
  'ASSET',
  'COLOR',
  'LOCATION',
  'ENUMERATION',
];

type ModelFieldsManagementState = {
  mode: 'new' | 'edit';
  visible: boolean;
  fieldType?: IModelFiledType;
  data?: IModelField;
  includeSystemFields: boolean;
};

function ModelFieldsManagement(props: ModelFieldsManagementProps) {
  const { model } = props;

  const [state, setState] = useState<ModelFieldsManagementState>({
    mode: 'new',
    visible: false,
    includeSystemFields: false,
  });

  const handleShowSystemFields = useCallback((checked: boolean) => {
    setState((prevState) => ({ ...prevState, includeSystemFields: checked }));
  }, []);

  const { systemFields, customFields } = useMemo(() => {
    return model.fields.reduce(
      (fieldSets, field) => {
        if (field.system) {
          fieldSets.systemFields.push({ id: field.id, data: field, type: 'system' });
        } else {
          fieldSets.customFields.push({ id: field.id, data: field, type: 'custom' });
        }
        return fieldSets;
      },
      {
        systemFields: [] as { id: string; data: IModelField; type: 'system' }[],
        customFields: [] as { id: string; data: IModelField; type: 'custom' }[],
      },
    );
  }, [model.fields]);

  const handleSort = useCallback((value: ISortableItem[], event: SortableChangeEvent) => {
    console.log(value, event);
  }, []);

  const { data } = useModelFiledTypesQuery({ fetchPolicy: 'cache-and-network' });

  const fieldTypeGroups = useMemo(() => {
    if (!data?.filedTypes) {
      return [];
    }

    const groups = group_keys.map((key) => ({
      key,
      name: key,
      filedTypes: [] as IModelFiledType[],
    }));
    for (const type of data.filedTypes) {
      const g = groups.find((item) => item.key == type.family);
      if (!g) {
        console.warn('未支持的类型', type);
        continue;
      }
      g.filedTypes.push(type as any);
    }

    return groups.filter((g) => g.filedTypes.length);
  }, [data?.filedTypes]);

  const handleCreateByFiledType = useCallback((fieldType: IModelFiledType) => {
    setState((prevState) => {
      return { ...prevState, mode: 'new', visible: true, fieldType };
    });
  }, []);

  const handleCloseFieldModal = useCallback(() => {
    setState((prevState) => ({ ...prevState, data: undefined, visible: false }));
  }, []);

  const handleEditFieldModal = useCallback((field: IModelField) => {
    setState((prevState) => {
      return { ...prevState, mode: 'edit', data: field, visible: true, fieldType: field.type };
    });
  }, []);

  const deleting = useRef(false);
  const [removeField] = useRemoveModelFieldMutation({
    refetchQueries: [
      {
        query: ModelDocument,
        variables: {
          id: model.id,
        },
        fetchPolicy: 'network-only',
      },
    ],
  });

  const temp = useRef({ removeField, model });
  temp.current.removeField = removeField;
  temp.current.model = model;

  const handleDelete = useCallback(async (field: IModelField) => {
    const modelId = temp.current.model.id;
    const _removeField = temp.current.removeField;
    const result = await Modal.confirm({
      title: '删除字段',
      content: (
        <>
          <p className="tip-confirm">
            您确定要删除字段 <b>{field.name}</b>
          </p>
          <p>删除后，存储在此字段中的数据将丢失</p>
        </>
      ),
      okClassName: 'btn-danger',
      okText: '删除',
      allowOutsideClick: () => {
        return !deleting.current;
      },
      preConfirm: async () => {
        deleting.current = true;
        try {
          const okButton = document.querySelector('.swal2-confirm')!;
          okButton.textContent = '删除中...';
          const spinner = document.createElement('span');
          spinner.classList.add('spinner-border-sm', 'ms-2', 'spinner-border', 'align-middle');
          okButton.appendChild(spinner);
          console.log('model.id', modelId);
          const _result = await delay(
            _removeField({
              variables: {
                modelId,
                fieldId: field.id,
              },
            }),
            350,
          );
          console.log(_result);
        } catch (e: any) {
          Toast.error(e.message, 2000, {
            placement: 'bottom-end',
            progressBar: true,
          });
        } finally {
          deleting.current = false;
        }
      },
    });
    if (!result.isConfirmed) {
      return;
    }
    Toast.success(`字段 “${field.name}” 已删除`, 2000, {
      placement: 'bottom-end',
      progressBar: true,
    });
  }, []);

  return (
    <div className="model-fields-management">
      <OverlayScrollbarsComponent
        className="model-fields-list custom-scrollbar"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <div className="model-fields-header">
          <Switch
            checked={state.includeSystemFields}
            onChange={handleShowSystemFields}
            label="显示系统字段"
          />
        </div>
        <Sortable
          onChange={() => {}}
          draggable={false}
          className={classnames('system-fields', { 'd-none': !state.includeSystemFields })}
          tag="ul"
          items={systemFields}
          itemRender={ModelField}
        />
        <Sortable
          onChange={handleSort}
          tag="ul"
          accept={['custom']}
          items={customFields}
          itemRender={React.createElement(ModelField, {
            onClickEdit: handleEditFieldModal,
            onDelete: handleDelete,
          } as any)}
          preview={{
            render: dragPreview(React.createElement(ModelField), {
              scale: 1,
            }),
            axisLocked: true,
          }}
        />
        {!customFields.length && !state.includeSystemFields && <NoFields />}
      </OverlayScrollbarsComponent>
      <OverlayScrollbarsComponent
        className="model-field-types custom-scrollbar"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <div className="model-field-types-container">
          <h3>添加字段</h3>
          {fieldTypeGroups.map((g) => (
            <ModelFieldTypeGroup key={g.key} name={g.name}>
              {g.filedTypes.map((t) => (
                <ModelFieldType onClick={handleCreateByFiledType} key={t.id} data={t} />
              ))}
            </ModelFieldTypeGroup>
          ))}
        </div>
      </OverlayScrollbarsComponent>
      <CreateOrUpdateModelField
        fieldTypeFamilies={fieldTypeGroups}
        fieldType={state.fieldType}
        visible={state.visible}
        data={state.data}
        mode={state.mode}
        model={model}
        onClose={handleCloseFieldModal}
      />
    </div>
  );
}

export default ModelFieldsManagement;
