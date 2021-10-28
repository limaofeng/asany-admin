import type { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface';

import type { FormInstance, FormProps } from './Form';
import InternalForm, { useForm } from './Form';
import type { FormItemProps } from './FormItem';
import Item from './FormItem';
import type { ErrorListProps } from './ErrorList';
import ErrorList from './ErrorList';
import type { FormListProps } from './FormList';
import List from './FormList';
import { FormProvider } from './context';

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

const Form = InternalForm as FormInterface;

Form.Item = Item;
Form.List = List;
Form.ErrorList = ErrorList;
Form.useForm = useForm;
Form.Provider = FormProvider;

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

export default Form;

// import type { FormProps as AntFormProps } from 'antd';
// import { Form as AntForm } from 'antd';
// import { useForm } from 'antd/lib/form/Form';
// import classnames from 'classnames';

// import FormItem from './FormItem';

// type InternalFormProps = {
//   className?: string;
//   children: React.ReactNode;
// };

// function InternalForm({ className, children, ...props }: InternalFormProps) {
//   return (
//     <form
//       className={classnames(
//         'form',
//         className!
//           .split(' ')
//           .filter((item) => !item.startsWith('ant-'))
//           .join(' '),
//       )}
//       noValidate={true}
//       {...props}
//     >
//       {children}
//     </form>
//   );
// }

// export interface FormProps extends AntFormProps {
//   useForm?: any;
//   children: React.ReactNode;
// }

// function Form({ children, ...props }: FormProps) {
//   return (
//     <AntForm component={InternalForm} {...props}>
//       {children}
//     </AntForm>
//   );
// }

// function UseForm<T = any>() {
//   const [form] = useForm<T>();
//   return form;
// }

// Form.useForm = UseForm;

// Form.Item =

// // (props: FormItemProps) => {
// //   const { className, name, label, noStyle, labelClassName, dependencies, children } = props;
// //   if (noStyle) {
// //     return (
// //       <AntForm.Item name={name} dependencies={dependencies} noStyle={true}>
// //         {children}
// //       </AntForm.Item>
// //     );
// //   }
// //   return (
// //     <div className={classnames('fv-row', className)}>
// //       <label className={classnames('form-label', labelClassName)}>{label}</label>
// //       {name ? (
// //         <AntForm.Item dependencies={dependencies} name={name} noStyle={true}>
// //           {children}
// //         </AntForm.Item>
// //       ) : (
// //         children
// //       )}
// //     </div>
// //   );
// // };

// export default Form;
