import classnames from 'classnames';

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};

function Badge(props: BadgeProps) {
  const { className, children } = props;
  return <span className={classnames('badge badge-light', className)}>{children}</span>;
}

export default Badge;
