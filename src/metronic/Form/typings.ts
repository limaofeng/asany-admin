import type { FieldProps } from 'rc-field-form/lib/Field';
import type { FormInstance } from 'rc-field-form';

import type { FormItemInputProps } from './FormItemInput';
import type { FormItemLabelProps, LabelTooltipType } from './FormItemLabel';
import { tuple } from './util';
export { InternalNamePath, NamePath, Store, StoreValue } from 'rc-field-form/lib/interface';
export { Options as ScrollOptions } from 'scroll-into-view-if-needed';
export type FormLabelAlign = 'left' | 'right';

const ValidateStatuses = tuple('success', 'warning', 'error', 'validating', '');
export type ValidateStatus = typeof ValidateStatuses[number];

type RcFieldProps<Values = any> = Omit<FieldProps<Values>, 'children'>;
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;

export type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;

export interface FormItemProps<Values = any>
  extends FormItemLabelProps,
    FormItemInputProps,
    RcFieldProps<Values> {
  prefixCls?: string;
  noStyle?: boolean;
  style?: React.CSSProperties;
  className?: string;
  labelClassName?: string;
  children?: ChildrenType<Values>;
  id?: string;
  hasFeedback?: boolean;
  validateStatus?: ValidateStatus;
  required?: boolean;
  hidden?: boolean;
  initialValue?: any;
  messageVariables?: Record<string, string>;
  tooltip?: LabelTooltipType;
  /** Auto passed by List render props. User should not use this. */
  fieldKey?: React.Key | React.Key[];
}
