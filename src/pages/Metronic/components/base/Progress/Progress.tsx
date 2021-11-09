type ProgressProps = {
  className?: string;
  percent?: number;
};

function Progress(props: ProgressProps) {
  const { percent } = props;
  return (
    <div
      className="bg-primary rounded h-4px"
      role="progressbar"
      style={{ width: `${percent}%` }}
      aria-valuenow={50}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

export default Progress;
