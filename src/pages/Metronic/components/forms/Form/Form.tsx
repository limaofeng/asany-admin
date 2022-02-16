import React from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';
import FieldForm, { List } from 'rc-field-form';
import type { FormProps as RcFormProps } from 'rc-field-form/lib/Form';
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import type { Options } from 'scroll-into-view-if-needed';

import type { FormContextProps } from './context';
import { FormContext } from './context';
import useForm, { FormInstance } from './hooks/useForm';

export type RequiredMark = boolean | 'optional';
export type FormLayout = 'horizontal' | 'inline' | 'vertical';

export type SizeType = 'xs' | 'sm' | 'lg';

import './style/Form.scss';

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'> {
  prefixCls?: string;
  colon?: boolean;
  name?: string;
  layout?: FormLayout;
  form?: FormInstance<Values>;
  size?: SizeType;
  scrollToFirstError?: Options | boolean;
  requiredMark?: RequiredMark;
}

const InternalForm: React.ForwardRefRenderFunction<FormInstance, FormProps> = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className = '',
    size,
    form,
    colon,
    layout = 'vertical',
    scrollToFirstError,
    requiredMark,
    onFinishFailed,
    name,
    ...restFormProps
  } = props;

  const prefixCls = 'asany-form';

  const formClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-${layout}`]: !!layout,
      //   [`${prefixCls}-hide-required-mark`]: requiredMark === false,
      //   [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-${size}`]: size,
    },
    className,
  );

  const wrapForm = useForm(form);
  const { __INTERNAL__ } = wrapForm;
  __INTERNAL__.name = name;

  const formContextValue = useMemo<FormContextProps>(
    () => ({
      name,
      vertical: layout === 'vertical',
      size,
      colon,
      requiredMark,
      itemRef: __INTERNAL__.itemRef,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name, layout, size, colon, requiredMark],
  );

  React.useImperativeHandle(ref, () => wrapForm);

  const onInternalFinishFailed = (errorInfo: ValidateErrorEntity) => {
    onFinishFailed?.(errorInfo);

    let defaultScrollToFirstError: Options = { block: 'nearest' };

    if (scrollToFirstError && errorInfo.errorFields.length) {
      if (typeof scrollToFirstError === 'object') {
        defaultScrollToFirstError = scrollToFirstError;
      }
      wrapForm.scrollToField(errorInfo.errorFields[0].name, defaultScrollToFirstError);
    }
  };

  return (
    <FormContext.Provider value={formContextValue}>
      <FieldForm
        id={name}
        {...restFormProps}
        name={name}
        onFinishFailed={onInternalFinishFailed}
        form={wrapForm}
        className={formClassName}
      />
    </FormContext.Provider>
  );
};

const Form = React.forwardRef<FormInstance, FormProps>(InternalForm) as <Values = any>(
  props: React.PropsWithChildren<FormProps<Values>> & { ref?: React.Ref<FormInstance<Values>> },
) => React.ReactElement;

export { useForm, List, FormInstance };

export default Form;
