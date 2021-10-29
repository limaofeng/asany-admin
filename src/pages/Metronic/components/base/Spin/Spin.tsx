import classnames from 'classnames';

type SpinProps = {
  tip?: React.ReactNode;
  spinning?: boolean;
};

function Spin(props: SpinProps) {
  const { tip, spinning = true } = props;
  return (
    <span className={classnames({ 'indicator-progress': !spinning })}>
      {tip}
      <span className="spinner-border spinner-border-sm align-middle ms-2" />
    </span>
  );
}

export default Spin;
