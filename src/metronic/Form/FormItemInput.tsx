import React from 'react';

import { FormContext, FormItemPrefixContext } from './context';
import ErrorList from './ErrorList';
import type { ValidateStatus } from './typings';

interface FormItemInputMiscProps {
  prefixCls: string;
  children: React.ReactNode;
  errors: React.ReactNode[];
  warnings: React.ReactNode[];
  hasFeedback?: boolean;
  validateStatus?: ValidateStatus;
  marginBottom?: number | null;
  onErrorVisibleChanged?: (visible: boolean) => void;
  /** @private Internal Usage, do not use in any of your production. */
  _internalItemRender?: {
    mark: string;
    render: (
      props: FormItemInputProps & FormItemInputMiscProps,
      domList: {
        input: JSX.Element;
        errorList: JSX.Element | null;
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
    marginBottom,
    _internalItemRender: formItemRender,
    onErrorVisibleChanged,
    extra,
    help,
  } = props;
  const baseClassName = `${prefixCls}`;

  const formContext = React.useContext(FormContext);

  // Pass to sub FormItem should not with col info
  const subFormContext = { ...formContext };

  const inputDom = (
    <div className={`${baseClassName}-control-input`}>
      <div className={`${baseClassName}-control-input-content`}>{children}</div>
    </div>
  );

  const hasHelp = help !== undefined && help !== null;
  const hasError = !!(hasHelp || errors.length || warnings.length);

  const errorListDom = hasError ? (
    <div className="asany-form-item-error-list">
      <FormItemPrefixContext.Provider value={{ prefixCls, status }}>
        <ErrorList
          errors={errors}
          warnings={warnings}
          help={help}
          helpStatus={status}
          className={`${baseClassName}-explain-connected`}
          onVisibleChanged={onErrorVisibleChanged}
        />
      </FormItemPrefixContext.Provider>
      {!!marginBottom && <div style={{ width: 0, height: marginBottom }} />}
    </div>
  ) : null;

  const extraDom = extra ? <div className={`${baseClassName}-extra`}>{extra}</div> : null;

  const dom =
    formItemRender && formItemRender.render ? (
      formItemRender.render(props, { input: inputDom, errorList: errorListDom, extra: extraDom })
    ) : (
      <div className="fv-control-wrapper asany-form-item-control-wrapper">
        {inputDom}
        {errorListDom}
        {extraDom}
      </div>
    );
  return <FormContext.Provider value={subFormContext}>{dom}</FormContext.Provider>;
};

export default FormItemInput;
