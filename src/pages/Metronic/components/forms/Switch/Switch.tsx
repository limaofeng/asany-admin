type SwitchProps = {
  label?: string;
  checked?: boolean;
  value?: string;
};

function Switch(props: SwitchProps) {
  const { label, checked, value } = props;
  return (
    <label className="form-check form-switch form-check-custom form-check-solid">
      <input className="form-check-input" type="checkbox" value={value} checked={checked} />
      {label && <span className="form-check-label fw-bold text-muted">{label}</span>}
    </label>
  );
}

export default Switch;
