import classnames from 'classnames';

type BlockUIProps = {
  loading?: boolean;
  className?: string;
  message?: string;
  children: React.ReactNode;
  overlayClassName?: string;
  zIndex?: number;
};

function BlockUI(props: BlockUIProps) {
  const { children, className, overlayClassName, loading, message, zIndex = 1 } = props;

  return (
    <div className={classnames('blockui', className, { ['overflow-hidden']: loading })}>
      {children}
      {loading && (
        <div style={{ zIndex }} className={classnames('blockui-overlay', overlayClassName)}>
          {message ? (
            <div className="blockui-message">
              <span className="spinner-border text-primary" />
              {message}
            </div>
          ) : (
            <span className="spinner-border text-primary" />
          )}
        </div>
      )}
    </div>
  );
}

export default BlockUI;
