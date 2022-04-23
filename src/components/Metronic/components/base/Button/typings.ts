export type Variant =
  | 'white'
  | 'primary'
  | 'light'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'link'
  | 'default';

export type VariantStyle = 'light' | 'background';

export type ACTIVE_LIGHT_STYLE =
  | 'light-white'
  | 'light-primary'
  | 'light-secondary'
  | 'light-success'
  | 'light-info'
  | 'light-warning'
  | 'light-danger'
  | 'light-dark';

export type ButtonColor =
  | 'white'
  | 'primary'
  | 'secondary'
  | 'light'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'muted'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900';

export type ActiveColor = Variant | ACTIVE_LIGHT_STYLE;

export interface ButtonProps<AsProps = any> {
  as?: 'button' | 'a' | 'span' | React.ComponentType<AsProps>;
  id?: string;
  variant?: Variant | 'clean' | false;
  variantStyle?: VariantStyle;
  dashed?: boolean;
  type?: 'dashed' | 'link' | 'solid';
  disabled?: boolean;
  icon?: React.ReactNode;
  color?: ButtonColor;
  iconColor?: ButtonColor;
  activeIconColor?: ButtonColor;
  textColor?: ButtonColor;
  activeTextColor?: ButtonColor;
  activeColor?: ActiveColor;
  flushed?: boolean;
  active?: boolean;
  size?: 'lg' | 'sm' | 'xs';
  className?: string;
  htmlType?: 'submit' | 'button' | 'reset';
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  to?: string;
}
