import classnames from 'classnames';

type SwitchProps = {
  label?: string;
  solid?: boolean;
  checked?: boolean;
  value?: string;
};

function Switch(props: SwitchProps) {
  const { label, checked, value, solid } = props;
  return (
    <label
      className={classnames('form-check form-switch form-check-custom', {
        [`form-check-${solid}`]: !!solid,
      })}
    >
      <input className="form-check-input" type="checkbox" value={value} checked={checked} />
      {label && <span className="form-check-label fw-bold text-muted">{label}</span>}
    </label>
  );
}

export default Switch;
