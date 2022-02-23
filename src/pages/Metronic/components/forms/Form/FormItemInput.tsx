import React from 'react';

import type { ValidateStatus } from './FormItem';
import { FormContext, FormItemPrefixContext } from './context';
import ErrorList from './ErrorList';

interface FormItemInputMiscProps {
  prefixCls: string;
  children: React.ReactNode;
  errors: React.ReactNode[];
  warnings: React.ReactNode[];
  hasFeedback?: boolean;
  validateStatus?: ValidateStatus;
  /** @private Internal Usage, do not use in any of your production. */
  _internalItemRender?: {
    mark: string;
    render: (
      props: FormItemInputProps & FormItemInputMiscProps,
      domList: {
        input: JSX.Element;
        errorList: JSX.Element;
        extra: JSX.Element | null;
      },
    ) => React.ReactNode;
  };
}

export interface FormItemInputProps {
  extra?: React.ReactNode;
  status?: ValidateStatus;
  help?: React.ReactNode;
}

const FormItemInput: React.FC<FormItemInputProps & FormItemInputMiscProps> = (props) => {
  const {
    prefixCls,
    status,
    children,
    errors,
    warnings,
    _internalItemRender: formItemRender,
    extra,
    help,
  } = props;
  const baseClassName = `${prefixCls}`;

  const formContext = React.useContext(FormContext);

  // Pass to sub FormItem should not with col info
  const subFormContext = { ...formContext };

  const inputDom = <>{children}</>;

  const errorListDom = (
    <FormItemPrefixContext.Provider value={{ prefixCls, status }}>
      <ErrorList
        errors={errors}
        warnings={warnings}
        help={help}
        helpStatus={status}
        className={`${baseClassName}-explain-connected`}
      />
    </FormItemPrefixContext.Provider>
  );

  // If extra = 0, && will goes wrong
  // 0&&error -> 0
  const extraDom = extra ? <div className={`${baseClassName}-extra`}>{extra}</div> : null;

  const dom =
    formItemRender && formItemRender.mark === 'pro_table_render' && formItemRender.render ? (
      formItemRender.render(props, { input: inputDom, errorList: errorListDom, extra: extraDom })
    ) : (
      <div className="fv-control-wrapper">
        {inputDom}
        {errorListDom}
        {extraDom}
      </div>
    );
  return <FormContext.Provider value={subFormContext}>{dom}</FormContext.Provider>;
};

export default FormItemInput;
