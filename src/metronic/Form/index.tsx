import type { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface';

import type { FormProps } from './Form';
import InternalForm, { useForm } from './Form';
import type { FormItemProps } from './FormItem';
import Item from './FormItem';
import type { ErrorListProps } from './ErrorList';
import ErrorList from './ErrorList';
import type { FormListProps } from './FormList';
import List from './FormList';
import { FormProvider } from './context';
import type { FormInstance } from './hooks/useForm';

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
  useForm: typeof useForm;
  Item: typeof Item;
  List: typeof List;
  ErrorList: typeof ErrorList;
  Provider: typeof FormProvider;

  /** @deprecated Only for warning usage. Do not use. */
  create: () => void;
}

const XForm = InternalForm as FormInterface;

XForm.Item = Item;
XForm.List = List;
XForm.ErrorList = ErrorList;
XForm.useForm = useForm;
XForm.Provider = FormProvider;

export type {
  FormInstance,
  FormProps,
  FormItemProps,
  ErrorListProps,
  Rule,
  RuleObject,
  RuleRender,
  FormListProps,
};

export default XForm;