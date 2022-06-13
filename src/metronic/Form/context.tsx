import React from 'react';

import { FormProvider as RcFormProvider } from 'rc-field-form';
import type { FormProviderProps as RcFormProviderProps } from 'rc-field-form/lib/FormContext';
import type { Meta } from 'rc-field-form/lib/interface';
import omit from 'rc-util/lib/omit';

import type { RequiredMark, SizeType } from './Form';
import type { ValidateStatus } from './FormItem';

/** Form Context. Set top form style and pass to Form Item usage. */
export interface FormContextProps {
  vertical: boolean;
  name?: string;
  size?: SizeType;
  colon?: boolean;
  requiredMark?: RequiredMark;
  itemRef: (name: (string | number)[]) => (node: React.ReactElement) => void;
}

export const FormContext = React.createContext<FormContextProps>({
  vertical: false,
  itemRef: (() => {}) as any,
});

/** `noStyle` Form Item Context. Used for error collection */
export type ReportMetaChange = (meta: Meta, uniqueKeys: React.Key[]) => void;
export const NoStyleItemContext = React.createContext<ReportMetaChange | null>(null);

/** Form Provider */
export interface FormProviderProps extends Omit<RcFormProviderProps, 'validateMessages'> {
  prefixCls?: string;
}

export const FormProvider: React.FC<FormProviderProps> = (props) => {
  const providerProps = omit(props, ['prefixCls']);
  return <RcFormProvider {...providerProps} />;
};

/** Used for ErrorList only */
export interface FormItemPrefixContextProps {
  prefixCls: string;
  status?: ValidateStatus;
}

export const FormItemPrefixContext = React.createContext<FormItemPrefixContextProps>({
  prefixCls: '',
});
