import classnames from 'classnames';

type StatProps = {
  label: string;
  className: string;
  children: React.ReactNode;
};

function Stat(props: StatProps) {
  const { label, children, className } = props;
  return (
    <div
      className={classnames(
        'border border-gray-300 border-dashed rounded',
        className,
      )}
    >
      <div className="d-flex align-items-center">{children}</div>
      <div className="fw-bold fs-6 text-gray-400">{label}</div>
    </div>
  );
}

export default Stat;
