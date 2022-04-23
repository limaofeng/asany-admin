type BorderColor =
  | 'white'
  | 'primary'
  | 'light'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark';
type BorderStyle = 'dotted' | 'dashed' | 'solid';

export type SeparatorProps = {
  color?: BorderColor;
  style?: BorderStyle;
  className?: string;
  border?: number;
  children?: React.ReactNode;
};
