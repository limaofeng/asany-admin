import classnames from 'classnames';

type BlockUIProps = {
  loading?: boolean;
  className?: string;
  message?: string | React.ReactNode;
  children: React.ReactNode;
  overlayClassName?: string;
  indicator?: false | React.ReactNode;
  zIndex?: number;
};

function BlockUI(props: BlockUIProps) {
  const {
    children,
    className,
    overlayClassName,
    loading,
    message,
    zIndex = 1,
    indicator = <span className="spinner-border text-primary" />,
  } = props;

  return (
    <div
      className={classnames('blockui', className, {
        ['overflow-hidden']: loading,
      })}
    >
      {children}
      {loading && (
        <div
          style={{ zIndex }}
          className={classnames('blockui-overlay', overlayClassName)}
        >
          {message ? (
            <div
              className={classnames({
                'blockui-message': typeof message === 'string',
              })}
            >
              {indicator}
              {message}
            </div>
          ) : (
            indicator
          )}
        </div>
      )}
    </div>
  );
}

export default BlockUI;
