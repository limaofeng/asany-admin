import { useCallback, useMemo } from 'react';
import React from 'react';

import type { ISortableItem, SortableChangeEvent } from '@asany/sortable';
import { dragPreview } from '@asany/sortable';
import Sortable from '@asany/sortable';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import ModelField from './ModelField';

import { Switch } from '@/metronic';
import type { Model } from '@/types';

type ModelFieldsManagementProps = {
  model: Model;
};

function ModelFieldsManagement(props: ModelFieldsManagementProps) {
  const { model } = props;

  const fields = useMemo(() => {
    return model.fields.map((item) => ({ id: item.id, data: item, type: 'custom' }));
  }, [model.fields]);

  const handleSort = useCallback((value: ISortableItem[], event: SortableChangeEvent) => {
    console.log(value, event);
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
          <Switch label="显示系统字段" />
        </div>
        {/* {model?.fields.map(() => (
          <div>111111</div>
        ))} */}
        <Sortable
          onChange={handleSort}
          tag="ul"
          accept={['custom']}
          // onDrop={handleDrop}
          // draggable={handleAllowDrag}
          // allowDrop={handleAllowDrop}
          items={fields}
          itemRender={ModelField}
          preview={{
            render: dragPreview(
              React.createElement(ModelField, {
                preview: true,
              } as any),
            ),
            container: document.body,
          }}
        />
      </OverlayScrollbarsComponent>
      <div className="model-field-types">
        <h3>添加字段</h3>
      </div>
    </div>
  );
}

export default ModelFieldsManagement;
