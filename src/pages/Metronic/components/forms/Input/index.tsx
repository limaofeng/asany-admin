import type { DOMAttributes } from 'react';

import classnames from 'classnames';

interface InputProps extends DOMAttributes<HTMLInputElement> {
  size?: 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string;
  type?: 'text' | 'password';
  autoComplete?: boolean;
  bordered?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input(props: InputProps) {
  const {
    solid,
    bordered = true,
    autoComplete = false,
    size,
    value,
    onChange,
    ...otherProps
  } = props;
  return (
    <input
      className={classnames('form-control', {
        [`form-control-${size}`]: !!size,
        'form-control-solid': solid,
        'form-control-borderless': !bordered,
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
