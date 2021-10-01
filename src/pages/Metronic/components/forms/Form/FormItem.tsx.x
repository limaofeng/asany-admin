type NamePath = string | number | (string | number)[];

const ValidateStatuses = ['success', 'warning', 'error', 'validating'];
export type ValidateStatus = typeof ValidateStatuses[number];

export type FormItemProps = {
  name?: string;
  label?: string;
  noStyle?: boolean;
  className?: string;
  labelClassName?: string;
  dependencies?: NamePath[];
  children: React.ReactNode;
};

function FormItem(props: FormItemProps) {
  const { className, name, label, noStyle, labelClassName, dependencies, children } = props;
  if (noStyle) {
    return (
      <AntForm.Item name={name} dependencies={dependencies} noStyle={true}>
        {children}
      </AntForm.Item>
    );
  }
  return (
    <div className={classnames('fv-row', className)}>
      <label className={classnames('form-label', labelClassName)}>{label}</label>
      {name ? (
        <AntForm.Item dependencies={dependencies} name={name} noStyle={true}>
          {children}
        </AntForm.Item>
      ) : (
        children
      )}
    </div>
  );
}

export default FormItem;
