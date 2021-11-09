import classnames from 'classnames';

export type BadgeProps = {
  color?:
    | 'white'
    | 'primary'
    | 'light'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'dark';
  lightStyle?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'dark';
  shape?: 'square' | 'circle';
  size?: 'sm' | 'lg';
  className?: string;
  children: React.ReactNode;
};

function Badge(props: BadgeProps) {
  const { size, className, children, shape, lightStyle } = props;
  const color = !props.color && !lightStyle ? 'light' : props.color;
  return (
    <span
      className={classnames('badge', className, {
        'badge-square': shape == 'square',
        'badge-circle': shape == 'circle',
        [`badge-${size}`]: !!size,
        [`badge-${color}`]: !!color,
        [`badge-light-${lightStyle}`]: !!lightStyle,
      })}
    >
      {children}
    </span>
  );
}

export default Badge;
