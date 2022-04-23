import classnames from 'classnames';

export type BulletProps = {
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
  style?: 'dot' | 'line';
  className?: string;
  vertical?: boolean;
};

function Bullet(props: BulletProps) {
  const { className, vertical, style, color } = props;
  return (
    <span
      className={classnames('bullet', className, {
        'bullet-line': style == 'line',
        'bullet-dot': style == 'dot',
        'bullet-vertical': vertical,
        [`bg-${color}`]: !!color,
      })}
    />
  );
}

export default Bullet;
