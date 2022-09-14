import { useCallback } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';

import type { ModelFiledType as IModelFiledType } from '@/types';

type ModelFieldTypeGroupProps = {
  name: string;
  children: React.ReactNode;
};

export function ModelFieldTypeGroup(props: ModelFieldTypeGroupProps) {
  const { name, children } = props;
  return (
    <div className="model-field-type-group">
      <div className="model-field-type-group-name">{name}</div>
      <div className="model-field-type-group-content">{children}</div>
    </div>
  );
}

type ModelFieldTypeProps = {
  data: IModelFiledType;
  onClick: (data: IModelFiledType, e: React.MouseEvent) => void;
};

function ModelFieldType(props: ModelFieldTypeProps) {
  const { data, onClick } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      onClick && onClick(data, e);
    },
    [data, onClick],
  );

  return (
    <div className="model-field-type" onClick={handleClick}>
      <div className={classnames('model-field-type-icon', `model-field-type__${data.id}`)}>
        <Icon name={`FieldType/${data.id}`} />
      </div>
      <div className="model-field-type-content">
        <div className="model-field-type-content__name text-gray-800">{data.name}</div>
        <div className="model-field-type-content__description text-gray-600">
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default ModelFieldType;
