import type { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface';

import { FormProvider } from './context';
import type { ErrorListProps } from './ErrorList';
import ErrorList from './ErrorList';
import type { FormProps } from './Form';
import InternalForm, { useForm } from './Form';
import Item from './FormItem';
import type { FormListProps } from './FormList';
import List from './FormList';
import FormRepeater from './FormRepeater';
import type { FormInstance } from './hooks/useForm';
import type { FormItemProps } from './typings';

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
  useForm: typeof useForm;
  Item: typeof Item;
  List: typeof List;
  ErrorList: typeof ErrorList;
  Provider: typeof FormProvider;
  Repeater: typeof FormRepeater;

  /** @deprecated Only for warning usage. Do not use. */
  create: () => void;
}

const XForm = InternalForm as FormInterface;

XForm.Item = Item;
XForm.List = List;
XForm.ErrorList = ErrorList;
XForm.useForm = useForm;
XForm.Provider = FormProvider;
XForm.Repeater = FormRepeater;

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
