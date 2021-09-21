import classnames from 'classnames';

interface ButtonProps {
  id?: string;
  type?: 'primary';
  size?: 'lg';
  className?: string;
  htmlType?: 'submit' | 'button' | 'reset';
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

function Button({
  type = 'primary',
  size,
  children,
  className,
  loading,
  htmlType = 'button',
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={htmlType}
      disabled={loading}
      data-kt-indicator={loading ? 'on' : 'off'}
      className={classnames(
        'btn',
        {
          'btn-lg': size === 'lg',
          'btn-primary': type === 'primary',
        },
        className,
      )}
      {...props}
    >
      <span className={classnames({ 'indicator-label': !loading, 'indicator-progress': loading })}>
        {children}
        {loading && <span className="spinner-border spinner-border-sm align-middle ms-2" />}
      </span>
    </button>
  );
}

export default Button;
