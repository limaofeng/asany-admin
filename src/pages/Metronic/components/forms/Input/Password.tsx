import type { InputProps } from './Input';
import Input from './Input';

interface PasswordProps extends InputProps {
  iconRender?: (visible: boolean) => React.ReactNode;
  visibilityToggle?: boolean;
}

function Password({ iconRender, visibilityToggle, ...props }: PasswordProps) {
  return <Input {...props} type="password" />;
}

export default Password;
