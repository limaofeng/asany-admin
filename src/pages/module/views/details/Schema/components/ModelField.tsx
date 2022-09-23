import React, { useCallback, useMemo } from 'react';

import type { SortableItemProps, SortableItemRefObject } from '@asany/sortable';
import classnames from 'classnames';
import { Icon } from '@asany/icons';

import type { ModelField as IModelField } from '@/types';
import { Badge, Button } from '@/metronic';

type ModelFieldProps = SortableItemProps<any> & {
  onDelete: (data: IModelField) => void;
  onClickEdit: (data: IModelField) => void;
};

function ModelField(props: ModelFieldProps, ref: SortableItemRefObject) {
  const { drag, style, animated, className, onClickEdit, onDelete } = props;

  const data = props.data.data as IModelField;

  const handleDelete = useCallback(() => {
    onDelete(data);
  }, [data, onDelete]);

  const fieldType = useMemo(() => {
    return data.type.id.toLowerCase();
  }, [data]);

  const handleCliclEditButton = useCallback(() => {
    onClickEdit(data);
  }, [data, onClickEdit]);

  return (
    <div {...animated} style={style} ref={ref} className={classnames('model-field', className)}>
      <div className="field-item-wrapper">
        <div ref={drag} className="field-item-drag-handle">
          <svg viewBox="0 0.5 9 13" focusable="false">
            <g fillRule="evenodd" transform="translate(0 .5)">
              <circle cx="1.5" cy="1.5" r="1.5" />
              <circle cx="7.5" cy="1.5" r="1.5" />
              <circle cx="1.5" cy="6.5" r="1.5" />
              <circle cx="7.5" cy="6.5" r="1.5" />
              <circle cx="1.5" cy="11.5" r="1.5" />
              <circle cx="7.5" cy="11.5" r="1.5" />
            </g>
          </svg>
        </div>
        <div className={classnames('field-item-type', `model-field-type__${fieldType}`)}>
          <Icon name={`FieldType/${fieldType}`} />
        </div>
        <div className="field-item-content">
          <div className="field-item-content__intro">
            <div className="field-item-content__name">{data.name}</div>
            <div className="field-item-content__code">#{data.code}</div>
            {data.description && <Icon name="Bootstrap/info-circle-fill" />}
          </div>
          <div className="field-item-content__details">
            <div className="field-item-content__labels">
              {data.type.family && (
                <Badge>{data.type.family[0] + data.type.family.substring(1).toLowerCase()}</Badge>
              )}
              <Badge>{data.type.name}</Badge>
              {data.system && <Badge>系统字段</Badge>}
            </div>
            <div className="field-item-content__actions">
              <Button onClick={handleCliclEditButton}>编辑字段</Button>
              <Button variant="danger" onClick={handleDelete}>
                删除字段
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(ModelField);
