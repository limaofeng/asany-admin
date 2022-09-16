import { useCallback, useMemo, useState } from 'react';
import React from 'react';

import type { ISortableItem, SortableChangeEvent } from '@asany/sortable';
import { dragPreview } from '@asany/sortable';
import Sortable from '@asany/sortable';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classnames from 'classnames';

import ModelField from './ModelField';
import ModelFieldType, { ModelFieldTypeGroup } from './ModelFieldType';
import CreateOrUpdateModelField from './CreateOrUpdateModelField';

import { Switch } from '@/metronic';
import type { ModelField as IModelField, ModelFiledType as IModelFiledType, Model } from '@/types';
import { useModelFiledTypesQuery } from '@/pages/module/hooks';

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
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleEditFieldModal = useCallback((field: IModelField) => {
    setState((prevState) => {
      return { ...prevState, mode: 'edit', data: field, visible: true, fieldType: field.fieldType };
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
          } as any)}
          preview={{
            render: dragPreview(React.createElement(ModelField), {
              scale: 1,
            }),
            axisLocked: true,
          }}
        />
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
