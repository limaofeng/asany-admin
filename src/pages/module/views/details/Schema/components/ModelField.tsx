import type { SortableItemProps, SortableItemRefObject } from '@asany/sortable';
import classnames from 'classnames';

type ModelFieldProps = SortableItemProps<any>;

function ModelField(props: ModelFieldProps, ref: SortableItemRefObject) {
  console.log('ModelField props', props, ref);
  const { drag, animated, className } = props;
  return (
    <div {...animated} ref={drag(ref)} className={classnames('model-field', className)}>
      <div className="field-item-wrapper">sdsdf</div>
    </div>
  );
}

export default ModelField;
