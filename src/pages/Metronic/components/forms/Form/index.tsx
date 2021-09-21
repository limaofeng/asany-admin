import type { FormProps as AntFormProps } from 'antd';
import { Form as AntForm } from 'antd';
import classnames from 'classnames';

type InternalFormProps = {
  className?: string;
  children: React.ReactNode;
};

function InternalForm({ className, children, ...props }: InternalFormProps) {
  return (
    <form
      className={classnames(
        'form',
        className!
          .split(' ')
          .filter((item) => !item.startsWith('ant-'))
          .join(' '),
      )}
      noValidate={true}
      {...props}
    >
      {children}
    </form>
  );
}

export interface FormProps extends AntFormProps {
  useForm?: any;
  children: React.ReactNode;
}

function Form({ children, ...props }: FormProps) {
  return (
    <AntForm component={InternalForm} {...props}>
      {children}
    </AntForm>
  );
}

export type FormItemProps = {
  name: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
};

Form.Item = (props: FormItemProps) => {
  const { className, name, label, children } = props;
  return (
    <div className={classnames('fv-row', className)}>
      <label className="form-label fs-6 fw-bolder text-dark">{label}</label>
      <AntForm.Item name={name} noStyle={true}>
        {children}
      </AntForm.Item>
    </div>
  );
};

export default Form;
