import classnames from 'classnames';

interface InputProps {
  size?: 'lg';
  solid?: boolean;
  value?: string;
  type?: 'text' | 'password';
  autoComplete?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
}
function Input(props: InputProps) {
  const { solid, autoComplete = false, size, value, onChange, ...otherProps } = props;
  return (
    <input
      className={classnames('form-control', {
        'form-control-lg': size === 'lg',
        'form-control-solid': solid,
      })}
      value={value}
      onChange={onChange}
      type="text"
      autoComplete={autoComplete ? 'off' : 'on'}
      {...otherProps}
    />
  );
}

interface PasswordProps extends InputProps {
  iconRender?: (visible: boolean) => React.ReactNode;
  visibilityToggle?: boolean;
}

Input.Password = ({ iconRender, visibilityToggle, ...props }: PasswordProps) => {
  return <Input {...props} type="password" />;
};

export default Input;
